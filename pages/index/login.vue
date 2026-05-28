<template>
  <div>
    <!-- 欢迎界面 -->
    <div v-if="showWelcome" class="welcome-screen"></div>

    <!-- 登录界面 -->
    <view v-if="!showWelcome" class="container">
      <view class="card">
        <view class="card-title">用户登录</view>
        <view class="card-body">
          <view class="input-group">
            <input
              v-model="credentials.username"
              placeholder="请输入用户名"
              type="text"
              class="input"
            />
          </view>
          <view class="input-group">
            <input
              v-model="credentials.password"
              placeholder="请输入密码"
              type="password"
              class="input"
            />
          </view>
          <view class="button-group">
            <button class="primary-button" @click="login">登录</button>
          </view>
          <view class="register-link">
            <button class="default-button" @click="goToRegister">没有账号？去注册</button>
          </view>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import authApi from '@/api/auth.js'
	
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      showWelcome: true,
      loading: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showWelcome = false;
    }, 500);
  },
  methods: {
    login() {
	  // 验证输入
      if (!this.credentials.username || !this.credentials.password) {
        uni.showToast({
          title: '用户名和密码不能为空',
          icon: 'none'
        });
        return;
      }
	  
	  console.log(typeof authApi.login); 
	  
	  // 调用登陆API
	  authApi.login({
	  	username: this.credentials.username,
	  	password: this.credentials.password,
	  }).then(res => {
	  	console.log("登陆成功", res);
		
		// 存储Token和用户信息（同步存储）
		uni.setStorageSync('access_token', res.data.access_token);
		uni.setStorageSync('user_info', res.data.user);
		uni.setStorageSync('user_id', res.data.user.userId);
		uni.setStorageSync('is_manager',res.data.user.isManager);
		
		this.goToHome()
	  }).catch(err => {
	  	console.log('登陆失败：', err);
		uni.showToast({ title: err.data?.message || '登录失败', icon: 'none' });
	  });
    },
	
    goToRegister() {
      uni.navigateTo({
        url: '/pages/index/register'
      });
    },
	
	goToHome() {
	  uni.navigateTo({
	    url: '/pages/index/home'
	  });
	},
  }
};
</script>

<style scoped>
/* 保持原有样式不变 */
.welcome-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: opacity 2s ease;
  opacity: 1;
  z-index: 1000;
  background-image: url('../../static/welcome.png');
  background-size: cover;
  background-position: center;
  transform: scale(0.3);
  transform-origin: center;
}

.container {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../../static/bg.jpg');
  background-size: cover;
  background-position: center;
}

.card {
  width: 80%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  margin-bottom: 20px;
  width: 88%;
  display: flex;
  justify-content: center;
}

.input {
  width: 262px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
}

.button-group {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.primary-button {
  width: 262px;
  height: 45px;
  padding: 10px;
  background-color: #007aff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary-button:hover {
  background-color: #005bb5;
}

.default-button {
  width: 262px;
  height: 45px;
  padding: 10px;
  background-color: #f5f5f5;
  color: #333333;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.default-button:hover {
  background-color: #e0e0e0;
}

.register-link {
  text-align: center;
}
</style>