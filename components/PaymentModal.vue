<template>
  <view class="modal" v-if="visible">
    <view class="modal-content">
      <view class="modal-header">
        <text>请支付 {{ amount }} 元</text>
      </view>
      <view class="modal-footer">
        <button class="close-button" @click="closeModal">关闭付款</button>
        <button class="confirm-button" @click="confirmPayment">确认支付</button>
      </view>
    </view>
  </view>
</template>

<script>
import { payOrder } from '@/api/order.js';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      required: true
    },
    orderId: {
      type: Number,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    confirmPayment() {
      if (!this.orderId) {
        uni.showToast({ title: '订单ID丢失，无法支付', icon: 'error' });
        return;
      }

      // 调用封装的支付接口
      payOrder(this.orderId)
        .then(() => {
          uni.showToast({ title: '支付成功', icon: 'success' });
          this.$emit('refresh'); // 通知父组件刷新界面
          this.closeModal(); // 关闭弹窗
        })
        .catch((err) => {
          console.error('支付失败:', err);
          uni.showToast({ title: '支付失败，请重试', icon: 'none' });
        });
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 30%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 300px;
  text-align: center;
  z-index: 9999;
}

.modal-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-body {
  margin-bottom: 10px;
}

.qr-code {
  width: 80%;
  height: 80%;
}

.modal-footer {
  display: flex;
  justify-content: center;
}
.confirm-button,
.close-button {
  padding: 0 10px;
  font-size: 12px;
  font-weight:bold;
  border: none;
  border-radius: 5px;
}
.close-button {
  background-color: #ccc;
  color: #333;
}

.confirm-button {
  background-color: #007aff;
  color: white;
}
</style>