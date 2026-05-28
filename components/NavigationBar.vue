<template>
  <div class="nav-bar">
    <div class="icon-container">
      <image src="../static/car-icon.png" class="icon" @click="home"/>
      <image src="../static/launch-icon.png" class="icon" @click="launch"/>
      <image src="../static/chatlist.png" class="icon" @click="chatlist"/>
      <image src="../static/person-icon.png" class="icon" @click="person"/>
      <!-- 根据 isManager 显示或隐藏 manage-icon -->
      <image v-if="isManager" src="../static/manage-icon.png" class="icon" @click="manage"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_manager: 0 // 默认值为 0
    };
  },
  computed: {
    isManager() {
      return this.is_manager === 1; // 判断是否为 manager
    }
  },
  created() {
    // 在组件创建时从缓存中获取 is_manager 的值
    const storedValue = uni.getStorageSync('is_manager');
    console.log('Stored is_manager value:', storedValue); // 调试输出
    if (storedValue !== undefined && storedValue !== null) {
      this.is_manager = parseInt(storedValue, 10) || 0; // 确保值为数字类型，默认为 0
    }
  },
  methods: {
    home() {
      uni.navigateTo({
        url: '/pages/index/home' // 登录成功后的跳转
      });
    },
    launch() {
      uni.navigateTo({
        url: '/pages/index/order_launch' // 跳转到注册页面
      });
    },
    person() {
      uni.navigateTo({
        url: '/pages/index/person' // 登录成功后的跳转
      });
    },
    manage() {
      uni.navigateTo({
        url: '/pages/index/manage' // 跳转到管理页面
      });
    },
    chatlist() {
      uni.navigateTo({
        url: '/pages/index/chatlist' // 跳转到聊天列表页面
      });
    }
  }
};
</script>

<style scoped>
.nav-bar {
  position: fixed; /* 固定在页面底部 */
  bottom: 0;
  left: 0;
  width: 100%; /* 宽度占满整个屏幕 */
  background-color: #f8f8f8;
  padding: 5px 0; /* 上下内边距 */
  display: flex; /* 使用 flexbox 布局 */
  justify-content: space-around; /* 图标均匀分布 */
  align-items: center; /* 垂直居中 */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影，提升视觉效果 */
  z-index: 1000; /* 确保导航栏在最上层 */
}

.icon-container {
  display: flex; /* 使用 flexbox 布局 */
  justify-content: space-around; /* 图标均匀分布 */
  width: 100%; /* 确保容器宽度占满 */
}

.icon {
  width: 25px; /* 图标宽度 */
  height: 25px; /* 图标高度 */
}
</style>