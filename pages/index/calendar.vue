<template>
  <view class="carpool-calendar-container">
    <NavigationBar />
    
    <!-- 日历区域 -->
    <view class="calendar-section">
      <uni-calendar 
        ref="calendar"
        :insert="true"
        :date="selectedDate"
        @change="onDateChange"
      />
    </view>
    
    <!-- 拼车信息区域 -->
    <view class="trip-info-section">
      <h2 class="selected-date">{{ selectedDate ? formatDisplayDate(selectedDate) : '请选择日期查看拼车计划' }}</h2>
      
      <view class="trip-info-card" v-if="selectedTrips.length > 0">
        <scroll-view class="trip-scroll" scroll-y>
          <view class="trip-card" v-for="trip in selectedTrips" :key="trip.id">
            <view class="trip-header">
              <text class='trip-time'>{{ formatTime(trip.date) }}</text>
              <button class="view-details-button" @click="viewDetails(trip.id)">查看详情</button>
            </view>
            <view class="trip-details">
              <view class="start-point">
                <image src="../../static/start.png" class="trip-icon" />
                <text class="trip-text">{{ trip.startPoint }}</text>
              </view>
              <view class="departure-point">
                <image src="../../static/dest.png" class="trip-icon" />
                <text class="trip-text">{{ trip.endPoint }}</text>
              </view>
            </view>
            <view class="separator" />
            <view class="trip-summary">
              <view class="summary-content">
                <image :src="trip.userAvatar" class="user-avatar" />
                <view class="car-info">
                  <view class="car-type-summary">
                    <text class="car-type">{{ trip.carType }}</text>
                  </view>
                  <view class="trip-count-summary">
                    <text class="trip-count">接单{{ trip.orderCount }}次</text>
                  </view>
                </view>
                <view class="price-info">
                  <text class="price-text">{{ trip.price }}元</text>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
      
      <view v-else class="no-trips-message">
        <text v-if="selectedDate">该日期暂无拼车计划</text>
        <text v-else>请从日历中选择一个日期</text>
      </view>
    </view>
  </view>
</template>


<script>
import NavigationBar from '../../components/NavigationBar.vue';
import { fetchCalendarTrips } from '@/api/order.js';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      selectedDate: this.getTodayDate(),
      trips: [],
      isLoading: false
    };
  },
  computed: {
  selectedTrips() {
    if (!this.selectedDate) return [];
    const selectedDateStr = this.selectedDate.split(' ')[0]; // 获取用户选择的日期
    return this.trips.filter(trip => {
      const tripDate = new Date(trip.start_time); // 转换为本地时间
      const tripDateStr = `${tripDate.getFullYear()}-${(tripDate.getMonth() + 1).toString().padStart(2, '0')}-${tripDate.getDate().toString().padStart(2, '0')}`;
      return tripDateStr === selectedDateStr; // 比较日期是否相同
    });
  }
  },
  methods: {
    async fetchTripsForMonth(year, month) {
      try {
		const cacheUserID = uni.getStorageSync('user_id');
        this.isLoading = true;
        this.trips = await fetchCalendarTrips(year, month,cacheUserID);
      } catch (error) {
        console.error('Error fetching trips:', error);
        uni.showToast({
          title: '获取行程失败',
          icon: 'none'
        });
      } finally {
        this.isLoading = false;
      }
    },
    
    getTodayDate() {
      const today = new Date();
      return `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    },
    
    onDateChange(e) {
      this.selectedDate = e.fulldate;
      const date = new Date(e.fulldate);
      this.fetchTripsForMonth(date.getFullYear(), date.getMonth() + 1);
    },
    
    formatDisplayDate(dateStr) {
      const date = new Date(dateStr);
      const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
      return date.toLocaleDateString('zh-CN', options);
    },
    
    formatTime(dateString) {
      const date = new Date(dateString);
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    },
    
    viewDetails(tripId) {
      uni.navigateTo({
        url: `/pages/index/trip_info?id=${tripId}`
      });
    }
  },
  mounted() {
    const today = new Date();
    this.fetchTripsForMonth(today.getFullYear(), today.getMonth() + 1);
  }
};
</script>

<style scoped>
.carpool-calendar-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0px;
}

.calendar-section {
 
  margin-top:20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0px;
  margin-left:10px;
  margin-right:10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.trip-info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items:center;
}

.selected-date {
  color: #003366;
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
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
  width: 85%;
  height: 300px;
  border: 2px solid #007aff;
  margin-bottom:80px;
}

.trip-scroll {
  height: 100%;
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
  margin-bottom: 5px;
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

.trip-time {
  font-size: 14px;
  font-weight: bold;
  color: #003269;
}

.trip-text {
  font-size: 14px;
  margin-left: 5px;
}

.price-text {
  font-size: 16px;
  color: #003366;
  font-weight: bold;
}

.separator {
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #007aff;
  margin-right: 10px;
}

.car-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.car-type {
  font-weight: bold;
  font-size: 14px;
}

.trip-count {
  font-size: 12px;
  color: #999;
}

.view-details-button {
  padding: 3px 10px;
  font-weight: bold;
  font-size: 12px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right:0px;
}

.no-trips-message {
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 16px;
}

.trip-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>