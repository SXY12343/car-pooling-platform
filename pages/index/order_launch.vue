<template>
  <NavigationBar />
    <view class="container">
      <!-- 身份选择 -->
      <view class="identity-selector">
        <view
          class="identity-option"
          :class="{ 'selected': identity === 'driver' }"
          @click="identity = 'driver'"
        >
          车主
        </view>
        <view
          class="identity-option"
          :class="{ 'selected': identity === 'passenger' }"
          @click="identity = 'passenger'"
        >
          乘客
        </view>
      </view>

      <!-- 地图容器 -->
      <view class="map-container">
        <map
          id="uni-map"
          class="map"
          :latitude="centerLat"
          :longitude="centerLng"
          :markers="markers"
          :polyline="polyline"
          show-location
        ></map>
      </view>

      <!-- 地址输入 -->
      <view class="address-container">
        <view class="address-input">
          <view class="input-group">
            <view class="label-container">
              <image src="../../static/start.png" class="input-icon"></image>
              <text class="input-label">起点</text>
            </view>
            <input
              v-model="startAddress"
              @input="handleStartInput"
              placeholder="请输入起点"
              class="address-input-field"
            />
            <!-- 起点建议列表 -->
            <view v-if="startSuggestions.length > 0" class="suggestions">
              <view
                v-for="(item, index) in startSuggestions"
                :key="index"
                @click="selectStartAddress(item)"
                class="suggestion-item"
              >
                {{ item.name }} <text v-if="item.address" style="font-size: 22rpx; color: #888;"> ({{ item.address }})</text>
              </view>
            </view>
          </view>

          <view class="input-group">
            <view class="label-container">
              <image src="../../static/dest.png" class="input-icon"></image>
              <text class="input-label">终点</text>
            </view>
            <input
              v-model="endAddress"
              @input="handleEndInput"
              placeholder="请输入终点"
              class="address-input-field"
            />
             <!-- 终点建议列表 -->
            <view v-if="endSuggestions.length > 0" class="suggestions">
              <view
                v-for="(item, index) in endSuggestions"
                :key="index"
                @click="selectEndAddress(item)"
                class="suggestion-item"
              >
                 {{ item.name }} <text v-if="item.address" style="font-size: 22rpx; color: #888;"> ({{ item.address }})</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 订单信息 -->
      <view class="order-info">
        <view class="info-item">
          <text class="info-label">出发时间</text>
           <!-- 日期选择 -->
          <picker
            mode="date"
            :value="departureDate"
            :start="currentDate"
            @change="handleDateChange"
            class="info-picker date-picker"
          >
            <view class="picker-text">{{ departureDate }}</view>
          </picker>
           <!-- 时间选择 -->
          <picker
            mode="time"
            :value="departureTime"
            @change="handleTimeChange"
            class="info-picker time-picker"
          >
            <view class="picker-text">{{ departureTime }}</view>
          </picker>
        </view>

        <!-- 司机特定选项 -->
        <view v-if="identity === 'driver'">
          <view class="info-item">
            <text class="info-label">车辆选择</text>
            <picker
              mode="selector"
              :range="vehiclePlateNumbers"
              range-key="plateNumber" 
              @change="handleVehicleChange"
              class="info-picker"
              :disabled="vehiclePlateNumbers.length === 0" 
            >
              <view class="picker-text" :class="{'picker-placeholder': !selectedVehicle}">
                 <!-- 显示车牌号和车型 -->
                {{ selectedVehicle ? `${selectedVehicle.plate_number} ` : (vehiclePlateNumbers.length === 0 ? '无可用车辆' : '请选择车辆') }}
              </view>
            </picker>
          </view>

          <view class="info-item">
            <text class="info-label">余座</text>
            <picker
              mode="selector"
              :range="availableSeats"
              @change="handleSeatChange"
              class="info-picker"
              :disabled="!selectedVehicle" 
            >
              <view class="picker-text" :class="{'picker-placeholder': !selectedSeats}">
                {{ selectedSeats ? selectedSeats + ' 座' : '请选择余座' }}
              </view>
            </picker>
          </view>
        </view>

        <!-- 乘客特定选项 -->
        <view v-if="identity === 'passenger'" class="info-item">
          <text class="info-label">同乘人数</text>
          <picker
            mode="selector"
            :range="passengerCountOptions"
            @change="handlePassengerCountChange"
            class="info-picker"
          >
            <view class="picker-text">
              {{ passengerCount }} 人
            </view>
          </picker>
        </view>

        <!-- 价格 -->
        <view class="info-item">
          <text class="info-label">价格预期</text>
          <view class="price-input-container">
            <input
              v-model="price"
              type="digit" 
              placeholder="请输入价格"
              class="price-input"
            />
            <text class="price-unit">元</text>
          </view>
        </view>
      </view>

      <!-- 发布按钮 -->
      <button class="publish-button" @click="handlePublish" :disabled="isPublishing">
        {{ isPublishing ? '发布中...' : '发布' }}
      </button>
    </view>
  </template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import { publishOrder } from '@/api/order.js';
import {fetchUserVehicles} from '@/api/user.js';
export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      identity: 'driver', // 默认身份 'driver' 或 'passenger'
      startAddress: '',   // 起点名称
      endAddress: '',     // 终点名称
      startSuggestions: [], // 起点建议列表
      endSuggestions: [],   // 终点建议列表
      startPos: null, // 起点坐标 [经度, 纬度]
      endPos: null,   // 终点坐标 [经度, 纬度]
      centerLat: 31.238, // 默认地图中心纬度 (上海市大致中心)
      centerLng: 121.48, // 默认地图中心经度 (上海市大致中心)
      zoom: 14,       // 地图缩放级别
      markers: [],    // 地图标记点
      polyline: [],   // 地图路线
      departureDate: '', // 出发日期 YYYY-MM-DD
      departureTime: '', // 出发时间 HH:MM
      vehiclePlateNumbers: [], // 用户车辆列表 (从后端获取)
      selectedVehicle: null, // 用户选择的车辆对象 { id, plateNumber, seats, carType }
      availableSeats: [], // 可选的剩余座位数 [1, 2, ...]
      selectedSeats: null, // 司机选择的剩余座位数 (数字)
      price: '', // 价格预期 (字符串，后端处理为数字)
      currentDate: '', // 当前日期，用于限制日期选择器的起始日期
      mapContext: null, // 地图上下文对象
      passengerCount: 1, // 乘客选择的同乘人数 (默认1)
      passengerCountOptions: Array.from({ length: 10 }, (_, i) => i + 1), // 可选同乘人数 [1, 2, ..., 10]
      isPublishing: false, // 是否正在发布中 (防止重复点击)
      userId: null, // 当前登录用户的 ID (需要从本地存储获取)
      amapKey: 'fa43ec73e8fbb3d4177fbe51747d764b' // 高德Web服务API Key
    };
  },
  onLoad() {
    // 从本地存储获取用户ID
    const storedUserId = uni.getStorageSync('user_id');
    if (storedUserId) {
      this.userId = parseInt(storedUserId);
      console.log("当前用户 ID:", this.userId);
      this.fetchVehicleList();
    } else {
      console.error("未能获取到用户 ID，请确保用户已登录!");
      uni.showModal({
        title: '提示',
        content: '您尚未登录，无法发布订单。是否前往登录？',
        success: (res) => {
          if (res.confirm) {
            uni.navigateTo({ url: '/pages/login/login' });
          } else {
            uni.navigateBack();
          }
        }
      });
    }
  },
  mounted() {
    this.initCurrentDateTime();
    this.initMap();
  },
  methods: {
    initCurrentDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      this.currentDate = `${year}-${month}-${day}`;
      this.departureDate = this.currentDate;
      this.departureTime = `${hours}:${minutes}`;
    },
    initMap() {
      this.$nextTick(() => {
        this.mapContext = uni.createMapContext('uni-map', this);
        if (!this.mapContext) {
            console.error("创建 map context 失败");
        }
      });
    },
    async fetchVehicleList() {
      if (!this.userId) return;

      uni.showLoading({ title: '加载车辆...' });
      try {
        const res = await fetchUserVehicles(this.userId);

        if (Array.isArray(res.data)) {
          console.log(res.data);
          this.vehicleList = res.data; // 保留完整的车辆信息
          this.vehiclePlateNumbers = res.data.map(vehicle => vehicle.plate_number); // 提取车牌号
          console.log("从后端获取车辆列表成功:", this.vehicleList);
          if (this.vehicleList.length === 0 && this.identity === 'driver') {
            uni.showToast({ title: '您还未添加车辆信息', icon: 'none' });
          }
        } else {
          console.error('获取车辆列表失败:', res);
          uni.showToast({ title: '加载车辆失败', icon: 'none' });
          this.vehicleList = [];
          this.vehiclePlateNumbers = [];
        }
      } catch (error) {
        console.error('请求车辆列表接口异常:', error);
        uni.showToast({ title: '网络错误，加载车辆失败', icon: 'none' });
        this.vehicleList = [];
        this.vehiclePlateNumbers = [];
      } finally {
        uni.hideLoading();
      }
    },
    handleStartInput() {
      if (this.startAddress.length > 1) {
        this.searchAddress(this.startAddress, 'start');
      } else {
        this.startSuggestions = [];
      }
    },
    handleEndInput() {
      if (this.endAddress.length > 1) {
        this.searchAddress(this.endAddress, 'end');
      } else {
        this.endSuggestions = [];
      }
    },
    async searchAddress(query, type) {
      try {
        const res = await uni.request({
          url: 'https://restapi.amap.com/v3/assistant/inputtips',
          data: {
            keywords: query,
            key: this.amapKey,
            city: '上海',
            output: 'JSON'
          }
        });

        if (res.statusCode === 200 && res.data.status === '1' && Array.isArray(res.data.tips)) {
          const suggestions = res.data.tips
            .filter(tip => tip.location && typeof tip.location === 'string' && tip.location.includes(','))
            .map(tip => ({
              name: tip.name,
              address: tip.address || '',
              location: tip.location.split(',')
            }));

          if (type === 'start') {
            this.startSuggestions = suggestions;
          } else {
            this.endSuggestions = suggestions;
          }
        } else {
          if (type === 'start') this.startSuggestions = [];
          else this.endSuggestions = [];
        }
      } catch (error) {
        console.error('地址搜索 API 请求失败:', error);
        if (type === 'start') this.startSuggestions = [];
        else this.endSuggestions = [];
      }
    },
    selectStartAddress(item) {
      this.startAddress = item.name;
      const lng = parseFloat(item.location[0]);
      const lat = parseFloat(item.location[1]);
      if (!isNaN(lng) && !isNaN(lat)) {
        this.startPos = [lng, lat];
      } else {
        console.error("选择的起点坐标无效:", item.location);
        this.startPos = null;
        uni.showToast({ title: '起点位置信息无效', icon: 'none'});
      }
      this.startSuggestions = [];
      this.updateMap();
    },
    selectEndAddress(item) {
      this.endAddress = item.name;
      const lng = parseFloat(item.location[0]);
      const lat = parseFloat(item.location[1]);
      if (!isNaN(lng) && !isNaN(lat)) {
        this.endPos = [lng, lat];
      } else {
        console.error("选择的终点坐标无效:", item.location);
        this.endPos = null;
        uni.showToast({ title: '终点位置信息无效', icon: 'none'});
      }
      this.endSuggestions = [];
      this.updateMap();
    },
    async updateMap() {
      if (this.startPos && this.endPos) {
        this.centerLng = this.startPos[0];
        this.centerLat = this.startPos[1];
        
        this.markers = [
          {
            id: 1,
            latitude: this.startPos[1],
            longitude: this.startPos[0],
            title: '起点',
            iconPath: '../../static/start.png',
            width: 20,
            height: 20
          },
          {
            id: 2,
            latitude: this.endPos[1],
            longitude: this.endPos[0],
            title: '终点',
            iconPath: '../../static/dest.png',
            width: 20,
            height: 20
          }
        ];
        
        await this.drawRoute();
      }
    },
    async drawRoute() {
      if (!this.startPos || !this.endPos || isNaN(this.startPos[0]) || isNaN(this.startPos[1]) || isNaN(this.endPos[0]) || isNaN(this.endPos[1])) {
        this.polyline = [];
        return;
      }

      try {
        const res = await uni.request({
          url: 'https://restapi.amap.com/v3/direction/driving',
          data: {
            origin: this.startPos.join(','),
            destination: this.endPos.join(','),
            key: this.amapKey,
          }
        });

        if (res.statusCode === 200 && res.data.status === '1' && res.data.route && res.data.route.paths && res.data.route.paths.length > 0) {
          const path = res.data.route.paths[0];
          let pointsArr = [];

          path.steps.forEach(step => {
            if (step.polyline) {
              step.polyline.split(';').forEach(pointStr => {
                if (pointStr) {
                  const coords = pointStr.split(',');
                  if (coords.length === 2) {
                    const lng = parseFloat(coords[0]);
                    const lat = parseFloat(coords[1]);
                    if (!isNaN(lng) && !isNaN(lat)) {
                      pointsArr.push({ latitude: lat, longitude: lng });
                    }
                  }
                }
              });
            }
          });

          if (pointsArr.length > 0) {
              this.polyline = [{
                points: pointsArr,
                color: '#007AFF',
                width: 6,
                dottedLine: false
              }];
          } else {
              this.polyline = [];
          }

        } else {
          console.warn("高德路线规划失败或无路径:", res.data.info);
          this.polyline = [];
        }
      } catch (error) {
        console.error('路线规划 API 请求失败:', error);
        this.polyline = [];
      }
    },
    handleDateChange(e) {
      this.departureDate = e.detail.value;
    },
    handleTimeChange(e) {
      this.departureTime = e.detail.value;
    },
    handleVehicleChange(e) {
      const index = parseInt(e.detail.value);
      console.log("选择的车辆索引:", index);
      if (isNaN(index) || index < 0 || index >= this.vehicleList.length) {
        this.selectedVehicle = null;
        this.availableSeats = ["请先选择车辆"]; // 未选择车辆时填充提示
      } else {
        this.selectedVehicle = this.vehicleList[index];
        console.log("选择的车辆:", this.selectedVehicle);
        if (this.selectedVehicle && this.selectedVehicle.seats > 1) {
          this.availableSeats = Array.from(
            { length: this.selectedVehicle.seats - 1 },
            (_, i) => i + 1
          );
        } else {
          this.availableSeats = [];
        }
      }
      this.selectedSeats = null; // 重置余座选择
    },
    handleSeatChange(e) {
      if (!this.selectedVehicle) {
        uni.showToast({ title: '请先选择车辆', icon: 'none' });
        return;
      }

      const index = parseInt(e.detail.value);
      if (!isNaN(index) && index >= 0 && index < this.availableSeats.length) {
        const selectedSeat = this.availableSeats[index];
        if (selectedSeat === "请先选择车辆") {
          uni.showToast({ title: '请先选择车辆', icon: 'none' });
          this.selectedSeats = null;
        } else {
          this.selectedSeats = selectedSeat;
        }
      } else {
        this.selectedSeats = null;
      }
    },
    handlePassengerCountChange(e) {
      const index = parseInt(e.detail.value);
      if (!isNaN(index) && index >= 0 && index < this.passengerCountOptions.length) {
          this.passengerCount = this.passengerCountOptions[index];
      } else {
          this.passengerCount = 1;
      }
    },
    async handlePublish() {
      if (this.isPublishing) return;

      // 数据校验
      if (!this.userId) {
        uni.showToast({ title: '无法获取用户信息，请重新登录', icon: 'none' });
        return;
      }
      if (!this.startAddress || !this.endAddress || !this.startPos || !this.endPos) {
        uni.showToast({ title: '请选择有效的起点和终点', icon: 'none' });
        return;
      }
      if (!this.departureDate || !this.departureTime) {
        uni.showToast({ title: '请选择出发日期和时间', icon: 'none' });
        return;
      }
      const selectedDateTime = new Date(`${this.departureDate} ${this.departureTime}`);
      if (selectedDateTime < new Date()) {
          uni.showToast({ title: '出发时间不能早于当前时间', icon: 'none' });
          return;
      }
      const priceFloat = parseFloat(this.price);
      if (isNaN(priceFloat) || priceFloat <= 0) {
        uni.showToast({ title: '请输入有效的价格 (大于0)', icon: 'none' });
        return;
      }

      if (this.identity === 'driver') {
        if (!this.selectedVehicle) {
          uni.showToast({ title: '请选择车辆', icon: 'none' });
          return;
        }
        if (!this.selectedSeats) {
          uni.showToast({ title: '请选择提供的余座数', icon: 'none' });
          return;
        }
      } else {
        if (!this.passengerCount || this.passengerCount < 1) {
          uni.showToast({ title: '请选择有效的同乘人数', icon: 'none' });
          return;
        }
      }

      // 构造订单数据
      const orderData = {
        initiator_id: this.userId,
        identity: this.identity,
        startAddress: this.startAddress,
        endAddress: this.endAddress,
        departureTime: `${this.departureDate} ${this.departureTime}:00`,
        price: priceFloat,
        vehicleId: this.identity === 'driver' ? this.selectedVehicle.id : null,
        availableSeats: this.identity === 'driver' ? this.selectedSeats : null,
        carType: this.identity === 'driver' && this.selectedVehicle ? this.selectedVehicle.brand_model : null,
        passengerCount: this.identity === 'passenger' ? this.passengerCount : null
      };

      console.log("准备发送到后端的订单数据:", orderData);

      this.isPublishing = true;
      uni.showLoading({ title: '正在发布...' });

      try {
        const res = await publishOrder(orderData);

        uni.hideLoading();

        if (res.code === 200) {
          console.log('订单发布成功');
          uni.showToast({
            title: `发布成功`,
            icon: 'success',
            duration: 2000
          });

          setTimeout(() => {
            uni.navigateBack();
          }, 1500);

        } else {
          console.error('订单发布失败，后端返回:', res);
          const errorMsg = res.message || '订单发布失败，请检查信息或稍后重试';
          uni.showToast({
            title: errorMsg,
            icon: 'none',
            duration: 3000
          });
        }
      } catch (error) {
        uni.hideLoading();
        console.error(error);
      } finally {
        this.isPublishing = false;
      }
    }
  }
};
</script>

<style>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom:90px;
}

.identity-selector {
  display: flex;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  overflow: hidden;
  border: 1rpx solid #1890FF;
}

.identity-option {
  flex: 1;
  padding: 10rpx;
  text-align: center;
  font-weight: bold;
  color: #333;
}

.identity-option.selected {
  background-color: #1890FF;
  color: white;
}

.map-container {
  height: 300rpx; /* 减小高度 */
  width: 100%; /* 宽度自动填充父容器 */
  border-radius: 10rpx;
  overflow: hidden;
}

.map {
  width: 100%; /* 确保地图填满容器宽度 */
  height: 100%; /* 确保地图填满容器高度 */
}

.address-container {
  margin-top:15px;
  border: 3px solid #007AFF; /* Blue border */
  border-radius: 15px; /* Rounded corners */
  background-color: white; /* White fill */
  padding: 8px;
  margin-bottom: 20rpx;
}

.address-input {
  margin-bottom: 0;
}

.input-group {
  margin-bottom: 20rpx;
  position: relative;
}

.label-container {
  display: flex;
  align-items: center;
  margin-bottom: 10rpx;
}

.input-icon {
  width: 30rpx;
  height: 30rpx;
  margin-right: 10rpx;
}

.input-label {
  display: inline-block; /* 修改为inline-block以与图标同行 */
  font-size: 28rpx;
  color: #333;
}

.address-input-field {
  border: 1rpx solid #ddd;
  padding: 0px 20rpx; /* Increased vertical padding */
  border-radius: 10rpx;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px; /* Larger font size */
  min-height: 25px; /* Taller input field */
}

.suggestions {
  position: absolute;
  top: 100rpx;
  left: 0;
  right: 0;
  background: white;
  border: 1rpx solid #ddd;
  border-radius: 10rpx;
  z-index: 100;
  max-height: 300rpx;
  overflow-y: auto;
}

.suggestion-item {
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background-color: #f5f5f5;
}

.order-info {
  background-color: #f9f9f9;
  padding: 20rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
}

.info-item {
  margin-bottom: 20rpx;
  display: flex;
  align-items: center; /* 垂直居中 */
  flex-wrap: wrap; /* 允许换行 */
}

.info-label {
  width: 100%; /* 标签占满一行 */
  margin-bottom: 10rpx;
  font-size: 28rpx;
  color: #333;
}

.info-picker {
  border: 1rpx solid #ddd;
  padding: 20rpx 10rpx; /* 增加垂直内边距 */
  border-radius: 10rpx;
  background-color: white;
  width: 100%; /* 选择框宽度填满 */
  margin-bottom: 10rpx; /* 选择框之间的间距 */
  box-sizing: border-box; /* 包含内边距和边框 */
}

.picker-text {
  color: #333;
  line-height: 1.5; /* 设置行高 */
}

/* 价格输入区域样式 */
.price-input-container {
  display: flex;
  align-items: center; /* 垂直居中 */
  width: 100%; /* 宽度填满 */
}

.price-input {
  border: 1rpx solid #ddd;
  padding: 20rpx 10rpx; /* 与选择框相同的垂直内边距 */
  border-radius: 10rpx;
  flex: 1; /* 占据剩余空间 */
  margin-right: 10rpx;
  box-sizing: border-box;
  height: 72rpx; /* 设置固定高度与选择框一致 */
}

.price-unit {
  font-size: 28rpx;
  color: #333;
  height: 72rpx; /* 与输入框相同高度 */
  line-height: 72rpx; /* 垂直居中 */
}

.publish-button {
  background-color: #1890FF;
  color: white;
  border-radius: 10rpx;
  padding: 0px;
  font-size: 16px;
  font-weight:bold;
  width:100%;
  margin-bottom:30px;
}
.info-picker {
  border: 1rpx solid #ddd;
  padding: 20rpx 10rpx;
  border-radius: 10rpx;
  background-color: white;
  width: 100%;
  margin-bottom: 10rpx;
  box-sizing: border-box;
  height: 72rpx;
  line-height: 72rpx;
}
/* 新增地址建议样式 */
.suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8rpx;
  z-index: 100;
  max-height: 300rpx;
  overflow-y: auto;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.suggestion-item {
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
  font-size: 14px;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background-color: #f5f5f5;
}

/* 调整表单输入框样式 */
.form-input {
  border: 1px solid #ddd;
  border-radius: 8rpx;
  padding: 15rpx;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
}

.form-item {
  position: relative;
  margin-bottom: 40rpx;
}

/* 调整弹窗内容样式 */
.custom-popup-content {
  width: 90%;
  max-height: 80vh;
  padding: 30rpx;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>