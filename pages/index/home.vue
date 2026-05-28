<template>
  <div>
    <!-- 使用 NavigationBar 组件 -->
    <NavigationBar />
    <!-- 其他内容 -->
  </div>
  <view class="container">
    <map
      id="baiduMap"
      class="map-container"
      :latitude="latitude"
      :longitude="longitude"
      scale="16"
      show-compass
      show-traffic
      show-scale
      style="width: 100%; height:150px;"
      @tap="onMapTap"
      @markertap="onMarkerTap"
      @regionchange="onRegionChange"
    ></map>
    <view class="bar">
      <image src="../../static/atm-fill.png" class="icon" />
      <input 
        class="search-input"
        placeholder="搜索栏"
        v-model="searchKeyword"
        @input="handleSearch"
      />
      <view class="switch">
        <text :class="{'active': isPassenger}" @click="toggleIdentity('passenger')">乘客</text>
        <text :class="{'active': !isPassenger}" @click="toggleIdentity('driver')">车主</text>
      </view>
    </view>
    <scroll-view class="order-scroll" scroll-y="true" style="height:calc(100vh - 200px);">
      <view class="order-info" v-for="order in filteredAndSearchedOrders" :key="order.id">
        <view class="order-card">
          <view class="order-header">
            <text>{{ order.date }}</text>
            <button class="join-button" @click="applyToJoin(order.id)">发单邀请Ta</button>
          </view>
          <view class="order-details">
            <view class="start-point">
              <image src="../../static/start.png" class="icon" style="height:20px;width:20px"/>
              <text class="order-text">{{ order.startPoint }}</text>
            </view>
            <view class="departure-point">
              <image src="../../static/dest.png" class="icon" style="height:20px;width:20px"/>
              <text class="order-text">{{ order.endPoint }}</text>
            </view>
          </view>
          <view class="separator" />
			<view class="order-summary">
			  <view class="summary-content">
				<image :src="order.userAvatar" class="user-avatar" />
				<view class="user-info">
				  <!-- 根据身份显示不同信息 -->
				  <view v-if="order.infoType === '乘客'" class="passenger-info">
					<text class="username">{{ order.username }}</text>
					<text class="passenger-count">同乘{{ order.passengerCount }}人</text>
				  </view>
				  <view v-else class="driver-info">
					<text class="car-type">{{ order.carType }}</text>
					<text class="max-seats">可载{{ order.maxSeats }}人</text>
					<!-- 只有车主才显示接单次数 -->
					<view class="order-count-summary">
					  <text class="order-count">接单{{ order.orderCount }}次</text>
					</view>
				  </view>
				</view>
				<view class="price-info">
				  <text class="price-text" style="color:#003366;font-weight:bold;">预估{{ order.price }}元</text>
				</view>
			</view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
// 引入 NavigationBar 组件
import NavigationBar from '../../components/NavigationBar.vue';
export default {
  data() {
    return {
     latitude: 0,
     longitude: 0,
     isPassenger: true,
     searchKeyword: '',
     orders: [
       {
        id: 1,
        infoType: '乘客',
        date: '3月7日14:30',
        startPoint: '创新港(2号)停车场',
        endPoint: '上海市·台铃电动车(文汇路店)',
        price: 41,
        username: '张先生',
        passengerCount: 2,
        orderCount: 15,
        userAvatar: '../../static/user.jpeg'
      },
      {
        id: 2,
        infoType: '乘客',
        date: '3月8日08:35',
        startPoint: '纪丰路327号3号楼',
        endPoint: '苏州市·苏州大学附属理想眼科医院',
        price: 62,
        username: '李女士',
        passengerCount: 1,
        orderCount: 8,
        userAvatar: '../../static/user.jpeg'
      },
      {
        id: 3,
        infoType: '车主',
        date: '3月7日17:05',
        startPoint: '汉庭酒店(上海安亭汽车城)',
        endPoint: '南通市·丝绸路与通源路交叉口',
        price: 87,
        carType: '宝马 宝马5系',
        maxSeats: 4,
        orderCount: 12,
        userAvatar: '../../static/user.jpeg'
      }
    ]
   };
  },
  computed: {
    filteredOrders() {
     return this.orders.filter(order => order.infoType === (this.isPassenger ? '乘客' : '车主'));
    },
    filteredAndSearchedOrders() {
      if (!this.searchKeyword) {
        return this.filteredOrders;
      }
      const keyword = this.searchKeyword.toLowerCase();
		return this.filteredOrders.filter(order => 
		  order.startPoint.toLowerCase().includes(keyword) ||
		  order.endPoint.toLowerCase().includes(keyword) ||
		  (order.username && order.username.toLowerCase().includes(keyword)) ||
		  (order.carType && order.carType.toLowerCase().includes(keyword)) ||
		  order.date.includes(keyword)
		);  // <-- Only one closing parenthesis needed
    }
  },
  onLoad() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.getLocation();
    },
    getLocation() {
      if (typeof wx !== "undefined" && wx.getLocation) {
        wx.getLocation({
          type: "wgs84",
          success: (res) => {
            this.latitude = res.latitude;
            this.longitude = res.longitude;
          },
          fail: (error) => {
            console.error("获取位置失败:", error);
          }
        });
      } else {
        console.error("当前环境不支持微信小程序的定位功能");
      }
    },
    onMapTap(e) {
      console.log("地图被点击了", e);
    },
    onMarkerTap(e) {
      console.log("标记被点击了", e);
    },
    onRegionChange(e) {
      console.log("地图区域改变", e);
    },
    toggleIdentity(identity) {
      this.isPassenger = identity === "passenger";
    },
    applyToJoin(orderId) {
      // 发送加入请求
    },
    handleSearch() {
      // 搜索逻辑已经在计算属性中处理
    }
  },
  components: {
    // 注册 NavigationBar 组件
    NavigationBar
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999; /* 确保导航栏在最上层 */
}

.icon {
  width: 30px;
  height: 30px;
}

.search-input {
  flex-grow: 1;
  margin-left: 10px;
  padding: 0px 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
  width:100px;
  font-size: 14px;
  height: 30px;
  background-color: white;
}

.switch {
  display: flex;
  justify-content: space-between; /* 这将会把按钮之间的间隔平均分布 */
  width: 96px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #ccc; /* 假设有边框，根据需要调整 */
  margin-left: 10px;
}

.switch text {
  margin: 0; /* 确保没有外边距 */
  cursor: pointer;
  font-size:14px;
  font-weight: bold;
  color: #003366;
  background-color: #ffffff;
  padding: 5px 10px; /* 内边距 */
  transition: background-color 0.3s, color 0.3s;
}

.switch .active {
  background-color: #4a90e2;
  color: #ffffff;
}

.order-info {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.order-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-details {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.start-point, .departure-point {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.order-text {
  font-size: 12px;
  margin-left: 5px;
}

.price-text {
  font-size: 16px;
  margin-left: 20px;
  color: #003366;
  font-weight: bold;
  align-self: flex-end;
}

.separator {
  height: 1px;
  background-color: #ccc;
  margin: 5px 10px;
}

.order-summary {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.summary-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #007aff;
  margin-right: 10px;
}

.user-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.passenger-info, .driver-info {
  display: flex;
  flex-direction: column;
}

.username, .car-type {
  font-weight: bold;
  font-size: 12px;
}

.passenger-count, .max-seats {
  font-size: 10px;
  color: #666;
}

.order-count {
  font-size: 10px;
  color: #999;
}

.price-info {
  align-self: flex-end;
}

.join-button {
  padding: 3px 10px;
  font-weight: bold;
  font-size: 10px;
  margin-right: 5px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>