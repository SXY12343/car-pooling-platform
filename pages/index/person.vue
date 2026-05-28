<template>
  <!-- 使用 NavigationBar 组件 -->
  <NavigationBar />
  <!-- 其他内容 -->
  <view class="flex-col self-start group">
    <view class="flex-col section">
      <view class="flex-row justify-between items-center group_2">
        <image
          class="user_avatar"
          :src="user.avatar"
        />
        <view class="flex-col group_3">
          <text class="self-start user-name">{{ user.name }}</text>
          <view class="flex-row items-center self-stretch user-info">
                         <image 
                           class="gender-icon"
                           :src="(user.gender === '男'||user.gender === 'male') ? '../../static/male.png' : '../../static/female.png'"
                         />
            <text class="user-age">{{ user.age }}岁</text>
          </view>
        </view>
      </view>
<!-- 修改 menu-items 部分的代码 -->
<view class="flex-row menu-items">
  <view class="flex-col items-center equal-division-item" @click="info_manage">
    <image
      class="menu-icon"
      src="../../static/info-manage.png"
    />
    <text class="menu-text">信息编辑</text>
  </view>
  <view class="flex-col items-center equal-division-item" @click="car_manage">
    <image
      class="menu-icon"
      src="../../static/car-manage.png"
    />
    <text class="menu-text">车牌管理</text>
  </view>
  <view class="flex-col items-center equal-division-item" @click="calendar">
    <image
      class="menu-icon"
      src="../../static/calendar.png"
    />
    <text class="menu-text">出行日历</text>
  </view>
</view>
    </view>
    <div class="trip-info-card">
      <div class="trip-scroll">
		    <!-- 添加悬浮按钮 -->
		    <button class="floating-button" @click="viewAllTrips">
		      <image src="../../static/see-all.png" class="floating-icon" />
		      <text class="floating-text">所有</text>
		    </button>
        <div class="trip-card" v-for="trip in recentTrips" :key="trip.id">
          <div class="trip-header">
            <text class='trip-date'>{{ formatDate(trip.date) }}</text>
            <button class="view-details-button" @click="viewDetails(trip.id)">查看详情</button>
          </div>
          <div class="trip-details">
            <div class="start-point">
              <image src="../../static/start.png" class="icon" style="height:20px;width:20px"/>
              <text class="trip-text">{{ trip.startPoint }}</text>
            </div>
            <div class="departure-point">
              <image src="../../static/dest.png" class="icon" style="height:20px;width:20px"/>
              <text class="trip-text">{{ trip.endPoint }}</text>
            </div>
          </div>
          <div class="separator" />
          <div class="trip-summary">
            <div class="summary-content">
              <image :src="trip.userAvatar" class="user-avatar" />
              <div class="car-info">
                <div class="car-type-summary">
                  <text class="car-type">{{ trip.carType }}</text>
                </div>
                <div class="trip-count-summary">
                  <text class="trip-count">接单{{ trip.orderCount }}次</text>
                </div>
              </div>
              <div class="price-info">
                <text class="price-text" style="color:#003366;font-weight:bold;">{{ trip.price }}元</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import { fetchUserBaseInfo} from '../../api/user'; 
import { fetchUserTrips } from '../../api/order';
export default {
  components: {
    NavigationBar
  },
  name: 'App',
  data() {
    return {
      user: {
        avatar: '../../static/user.jpeg',
        name: '加载中...',
        age: 0,
        gender: ''
      },
      isEditing: false,
      trips: [],
    }
  },
  computed: {
	  recentTrips() {
		// 直接返回 trips，因为后端已经按时间倒序并限制了数量
		return this.trips;
	  }
  },
  methods: {
    info_manage() {
      uni.navigateTo({
        url: '/pages/index/info_manage' 
      });
    },
    car_manage() {
      uni.navigateTo({
        url: '/pages/index/car_manage'
      });
    },
	calendar() {
	  uni.navigateTo({
	    url: '/pages/index/calendar'
	  });
	},
    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    },
	viewAllTrips() {
	  uni.navigateTo({
	    url: '/pages/index/record'
	  });
	},
    async fetchUserData() {
	  this.loading = true;
	  try {
		// 优先读取本地缓存
		const cacheUser = uni.getStorageSync('user_info');  
		// 无论是否有缓存都请求最新数据
		if(cacheUser) {
			this.user.name = cacheUser.username;
			this.user.avatar = cacheUser.avatar;
			this.user.age = cacheUser.age;
			this.user.gender = cacheUser.gender;
		}
		// 无论是否有缓存都请求最新数据
		const cacheUserID = uni.getStorageSync('user_id'); 
		const res = await fetchUserBaseInfo(cacheUserID);
		const newUserData = {
		  user_id: res.user_id,
		  name: res.username,
		  avatar: res.avatar,
		  age: res.age,
		  gender: res.gender
		};
			
		if (JSON.stringify(this.user) !== JSON.stringify(newUserData)) {
		  this.user = newUserData;
		  uni.setStorageSync('user_info', newUserData);
		  console.log(this.user)
		}
	  } catch (error) {
		  console.error('获取用户数据失败:', error);
	  }
    },
    viewDetails(tripId) {
      uni.navigateTo({
        url: `/pages/index/trip_info?id=${tripId}`
      });
    }, 
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    saveChanges() {
      console.log('保存修改:', this.user);
      this.isEditing = false;
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    uploadAvatar(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async fetchUserTrips() {
      try {
        const cacheUserID = uni.getStorageSync('user_id');
        if (!cacheUserID) {
          console.error('用户ID不存在');
          return;
        }
        
        const res = await fetchUserTrips(cacheUserID);
        if (res.code === 200) {
          this.trips = res.data.map(trip => ({
            id: trip.id,
            date: trip.date,
            startPoint: trip.startPoint,
            endPoint: trip.endPoint,
            price: trip.price,
            carType: trip.carType,
            userAvatar: trip.userAvatar,
            orderCount: trip.orderCount,
            status: trip.status
          }));
        } else {
          console.error('获取行程数据失败:', res.error);
        }
      } catch (error) {
        console.error('获取行程数据异常:', error);
      }
    }

  },
  mounted() {
    this.fetchUserData();
    this.fetchUserTrips(); 
  }
};
</script>

<style>
/* 个人信息区域样式 */
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group {
  padding: 30px 20px 20px;
  width: 100%;
}
.section {
  background-color: #2a82e4;
  border-radius: 12px;
  width: 90%;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.group_2 {
  padding: 15px 15px 0;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.user_avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #084fa1;
  margin-right: 15px;
}
.user-name {
  color: #ffffff;
  font-size: 22px;
  font-family: SourceHanSansCN;
  font-weight: 700;
  margin-bottom: 5px;
}
.user-info {
  display: flex;
  align-items: center;
}
/* 修改性别图标样式 */
.gender-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.user-age {
  color: #ffffff;
  font-size: 16px;
  font-family: SourceHanSansCN;
  font-weight: 700;
}
.menu-items {
  margin-top: 20px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}
.menu-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 2px;
}
.menu-text {
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
}
.equal-division-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 行程卡片区域样式 */
.trip-info-card {
  background-color: #fffff9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  width: 80%;
  height: 300px;
  margin-top: 0px;
  border: 2px solid #007aff;
  position: relative;
  margin-bottom:40px;
}
.trip-scroll {
  height: 300px;
  overflow-y: auto;
}
.trip-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
.trip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trip-details {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}
.start-point, .departure-point {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.trip-date {
  font-size: 14px;
  margin-left: 5px;
  font-weight: bold;
  color: #003269;
}
.trip-text {
  font-size: 12px;
  margin-left: 5px;
}
.price-text {
  font-size: 16px;
  margin-left: 18px;
  margin-right: 10px;
  color: #003269;
  font-weight: bold;
  align-self: flex-end;
}
.separator {
  height: 1px;
  background-color: #ccc;
  margin: 5px 10px;
}
.trip-summary {
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
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #007aff;
  margin-right: 10px;
}
.car-info {
  display: flex;
  flex-direction: column;
}
.car-type {
  font-weight: bold;
  font-size: 12px;
  margin-left: -80px;
}
.trip-count {
  font-size: 10px;
  color: #999;
  margin-left: -80px;
}
.price-info {
  align-self: flex-end;
}
.view-details-button {
  padding: 2px 8px;
  font-weight: bold;
  margin-left: 125px;
  font-size: 10px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* 其他通用样式 */
button {
  padding: 10px 20px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #f5f5f5;
}
nav ul li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #2c3e50;
}
nav ul li a:hover {
  background-color: #eaeaea;
}
.floating-button {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: #0055b1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index:9999;
}

.floating-icon {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.floating-text {
  font-size: 10px;
  font-weight: bold;
}
</style>