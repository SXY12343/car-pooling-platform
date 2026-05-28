<template>
  <div>
    <!-- 使用 NavigationBar 组件 -->
    <NavigationBar />
    <!-- 其他内容 -->
  </div>
  <view class="container">
    <view class="filter-bar">
      <view class="filter-group">
        <picker @change="onStatusChange" :value="statusIndex" :range="statusOptions" range-key="name">
          <view class="picker">
            审核状态: {{statusOptions[statusIndex].name}}
            <image src="../../static/arrow-down.png" class="arrow-icon" />
          </view>
        </picker>
      </view>
      
      <view class="time-filters">
        <picker @change="onYearChange" :value="yearIndex" :range="years" class="time-picker">
          <view class="picker">
            {{years[yearIndex] || '--'}}年
            <image src="../../static/arrow-down.png" class="arrow-icon" />
          </view>
        </picker>
        <picker @change="onMonthChange" :value="monthIndex" :range="months" class="time-picker">
          <view class="picker">
            {{months[monthIndex] || '--'}}月
            <image src="../../static/arrow-down.png" class="arrow-icon" />
          </view>
        </picker>
      </view>
      
      <view class="filter-group">
        <picker @change="onTypeChange" :value="typeIndex" :range="typeOptions" range-key="name">
          <view class="picker">
            订单类型: {{typeOptions[typeIndex].name}}
            <image src="../../static/arrow-down.png" class="arrow-icon" />
          </view>
        </picker>
      </view>
    </view>
    
    <scroll-view class="order-scroll" scroll-y="true" style="height:calc(100vh - 200px);">
      <view class="order-info" v-for="order in filteredOrders" :key="order.id">
        <view class="order-card">
          <view class="order-header">
            <text>{{ order.date }}</text>
            <view class="status-badge" :class="getStatusClass(order.status)">
              {{ getStatusText(order.status) }}
            </view>
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
              <view class="car-info">
                <view class="car-type-summary">
                  <text class="car-type">{{ order.carType || '无车辆信息' }}</text>
                </view>
                <view class="order-count-summary">
                  <text class="order-count">发布人: {{ order.publisher }}</text>
                </view>
              </view>
              <view class="price-info">
                <text class="price-text" style="color:#003366;font-weight:bold;">{{ order.price }}元</text>
              </view>
            </view>
          </view>
			<view class="audit-actions" v-if="order.status === 'pending'">
			  <view class="action-buttons">
				<button class="reject-btn" @click="rejectOrder(order.id)">拒绝</button>
				<button class="approve-btn" @click="approveOrder(order.id)">通过</button>
			  </view>
			</view>
          <view class="audit-reason" v-if="order.status === 'rejected' && order.rejectReason">
            <text>拒绝原因: {{ order.rejectReason }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import { 
  fetchManagedOrders, 
  approveOrder, 
  rejectOrder 
} from '@/api/order.js'; 
export default {
  data() {
    return {
      statusOptions: [
        { name: '全部', value: 'all' },
        { name: '待审核', value: 'pending' },
        { name: '已通过', value: 'approved' },
        { name: '已拒绝', value: 'rejected' }
      ],
      statusIndex: 1, // 默认显示待审核
      typeOptions: [
        { name: '全部', value: 'all' },
        { name: '乘客', value: 'passenger' },
        { name: '车主', value: 'driver' }
      ],
      typeIndex: 0,
      years: ['', '2023', '2024', '2025'],
      yearIndex: 0,
      months: ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      monthIndex: 0,
      orders: [] // 初始化为空数组，从API获取数据
    };
  },
  computed: {
    filteredOrders() {
      let filtered = this.orders;
      return filtered;
    }
  },
  methods: {
    async fetchOrders() {
      try {
        const params = {
          status: this.statusOptions[this.statusIndex].value,
          type: this.typeOptions[this.typeIndex].value,
          year: this.years[this.yearIndex] || '',
          month: this.months[this.monthIndex] || ''
        };
        const orders = await fetchManagedOrders(params);
        this.orders = orders;
      } catch (error) {
        uni.showToast({
          title: error.message || '获取订单失败',
          icon: 'none'
        });
        console.error('获取订单失败:', error);
      }finally {
      this.loading = false;
    }
    },

    async approveOrder(orderId) {
      try {
        await approveOrder(orderId);
        uni.showToast({
          title: '已通过审核',
          icon: 'success'
        });
        this.fetchOrders(); // 刷新列表
      } catch (error) {
        uni.showToast({
          title: error.message || '操作失败',
          icon: 'none'
        });
        console.error('审核通过失败:', error);
      }
    },

    async rejectOrder(orderId) {
      uni.showModal({
        title: '输入拒绝原因',
        editable: true,
        placeholderText: '请输入拒绝原因',
        success: async (res) => {
          if (res.confirm && res.content) {
            try {
              await rejectOrder(orderId, res.content);
              uni.showToast({
                title: '已拒绝该订单',
                icon: 'success'
              });
              this.fetchOrders(); // 刷新列表
            } catch (error) {
              uni.showToast({
                title: error.message || '操作失败',
                icon: 'none'
              });
              console.error('拒绝订单失败:', error);
            }
          }
        }
      });
    },
    getStatusClass(status) {
      return {
        'status-pending': status === 'pending',
        'status-approved': status !== 'pending' && status !== 'rejected',
        'status-rejected': status === 'rejected'
      };
    },
    getStatusText(status) {
      if (status === 'pending') return '待审核';
      if (status === 'rejected') return '已拒绝';
      return '已通过';
    },
    onStatusChange(e) {
      this.statusIndex = e.detail.value;
      this.fetchOrders();
    },
    onTypeChange(e) {
      this.typeIndex = e.detail.value;
      this.fetchOrders();
    },
    onYearChange(e) {
      this.yearIndex = e.detail.value;
      this.monthIndex = 0;
      this.fetchOrders();
    },
    onMonthChange(e) {
      this.monthIndex = e.detail.value;
      this.fetchOrders();
    },
  },
  mounted() {
    this.fetchOrders(); // 组件加载时获取订单数据
  },
  components: {
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
  border-radius: 0px;
  overflow: hidden;
}

.filter-bar {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top:10px;
  border-radius:10px;
  background-color: #007aff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.filter-group {
  margin-bottom: 10px;
}

.time-filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.time-picker {
  flex: 1;
  margin: 0 5px;
}

.picker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #003366;
}

.arrow-icon {
  width: 12px;
  height: 12px;
  margin-left: 5px;
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
  margin-bottom: 5px;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight:bold;
  color: white;
}

.status-pending {
  background-color: #FF9500;
}

.status-approved {
  background-color: #4CD964;
}

.status-rejected {
  background-color: #FF3B30;
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

.car-info {
  display: flex;
  flex-direction: column;
  margin-left: -125px;
}

.car-type {
  font-weight: bold;
  font-size: 12px;
}
.order-count {
  font-size: 10px;
  color: #999;
}

.price-info {
  align-self: flex-end;
}

.audit-actions {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #eee;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background-color: #f9f9f9;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.approve-btn, .reject-btn {
  padding: 0px 15px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 0;
  transition: all 0.2s;
}

.approve-btn {
  background-color: #4CD964;
  color: white;
  border: none;
}

.approve-btn:active {
  background-color: #3ac052;
  transform: scale(0.98);
}

.reject-btn {
  background-color: #FF3B30;
  color: white;
  border: none;
}

.reject-btn:active {
  background-color: #e6352a;
  transform: scale(0.98);
}

.reject-btn {
  background-color: #FF3B30;
  color: white;
  border: none;
}

.audit-reason {
  margin-top: 8px;
  padding: 5px;
  background-color: #FFF2F0;
  border-radius: 4px;
  font-size: 12px;
  color: #FF3B30;
}
</style>