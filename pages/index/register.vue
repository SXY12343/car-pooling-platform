<template>
  <view class="container">
    <view class="card">
      <view class="card-title text-h5">用户注册</view>
      <view class="card-body">
        <form ref="form">
          <!-- 用户名 -->
          <div class="input-group">
            <label for="username">用户名</label>
            <input
              id="username"
              v-model="user.username"
              type="text"
              class="input"
              required
            />
          </div>
          <!-- 真实姓名 -->
          <div class="input-group">
            <label for="true_username">真实姓名</label>
            <input
              id="true_username"
              v-model="user.true_username"
              type="text"
              class="input"
              required
            />
          </div>
          <!-- 身份证号 -->
          <div class="input-group">
            <label for="identity_num">身份证号</label>
            <input
              id="identity_num"
              v-model="user.identity_num"
              type="text"
              class="input"
              required
            />
          </div>
          <!-- 性别选择 -->
          <div class="input-group">
            <label for="gender">性别</label>
            <picker
              mode="selector"
              :range="genderList"
              range-key="name"
              @change="handleGenderChange"
              class="info-picker"
            >
              <view class="picker-text">
                {{ selectedGender ? selectedGender.name : '请选择性别' }}
              </view>
            </picker>
          </div>
          <!-- 电话号码 -->
          <div class="input-group">
            <label for="telephone">电话号码</label>
            <input
              id="telephone"
              v-model="user.telephone"
              type="text"
              class="input"
              required
            />
          </div>
          <!-- 密码 -->
          <div class="input-group">
            <label for="password">密码</label>
            <input
              id="password"
              v-model="user.password"
              type="password"
              class="input"
              required
            />
          </div>
          <!-- 确认密码 -->
          <div class="input-group">
            <label for="confirmPassword">确认密码</label>
            <input
              id="confirmPassword"
              v-model="user.confirmPassword"
              type="password"
              class="input"
              required
            />
          </div>
          <!-- 注册按钮 -->
          <div class="button-group">
            <button
              class="primary-button"
              @click.prevent="register"
            >
              注册
            </button>
          </div>
        </form>
      </view>
      <view class="register-link">
        <button class="default-button" @click="goToLogin">
          已有账号？去登录
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import authApi from '@/api/auth.js'
	
export default {
  data() {
    return {
      user: {
        username: '',
        true_username: '',
        identity_num: '',
        gender: '',
        telephone: '',
        password: '',
        confirmPassword: ''
      },
      genderList: [
        { name: '男', value: '男' },
        { name: '女', value: '女' }
      ],
      selectedGender: null
    };
  },
  methods: {
    handleGenderChange(event) {
      const selectedGenderIndex = event.detail.value;
      this.selectedGender = this.genderList[selectedGenderIndex];
      this.user.gender = this.selectedGender.value;
    },
    register() {
      if (
        this.user.username &&
        this.user.true_username &&
        this.user.identity_num &&
        this.user.gender &&
        this.user.telephone &&
        this.user.password &&
        this.user.password === this.user.confirmPassword
      ) {
		// 调用注册API
		authApi.register({
			username: this.user.username,
			realname: this.user.true_username,
			identity_id: this.user.identity_num,
			gender: this.user.gender,
			telephone: this.user.telephone,
			password: this.user.password
		}).then(res => {
			console.log("注册成功", res);
			this.goToLogin(); // 跳转到登陆界面
		}).catch(err => {
			console.log('注册失败：', err);
		})
		
      } else {
        uni.showToast({
          title: '请填写所有必填项，并确保两次密码一致！',
          icon: 'none'
        });
      }
    },
	
    goToLogin() {
      uni.navigateTo({
        url: '/pages/index/login'
      });
    }
  }
};
</script>

<style scoped>
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
  margin-top: -30px;
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
  overflow-y: auto;
  max-height: 400px;
}

.input-group {
  margin-bottom: 20px;
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-group label {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
}

.input {
  width: 262px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
}

.info-picker {
  width: 262px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
}

.picker-text {
  font-size: 14px;
  color: #333;
}

.button-group {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.primary-button {
  width: 262px;
  height: 36px;
  padding: 8px;
  background-color: #007aff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
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
  height: 36px;
  padding: 8px;
  background-color: #f5f5f5;
  color: #333333;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
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