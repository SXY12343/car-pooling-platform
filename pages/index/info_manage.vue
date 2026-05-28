<template>
  <div class="user-profile-container">
    <!-- 使用 NavigationBar 组件 -->
    <NavigationBar />
    <div class="profile-edit-card">
      <!-- 头像上传区域 -->
      <div class="avatar-section">
        <image class="avatar-image" :src="user.avatar" alt="用户头像"  @error="handleImageError"/>
        <button class="upload-btn" @click="triggerAvatarUpload">
          {{ user.avatar === defaultAvatar ? '上传头像' : '更换头像' }}
        </button>
        <p v-if="avatarError" class="error-message">{{ avatarError }}</p>
      </div>

      <!-- 用户信息表单 -->
      <div class="form-section">
        <div class="form-group">
          <label for="username">用户名</label>
          <input 
            type="text" 
            id="username" 
            v-model="user.username" 
            placeholder="请输入用户名"
            style ="width:80%"
          >
        </div>

        <!-- 新增性别选择 -->
        <div class="form-group">
          <label for="gender">性别</label>
          <picker
            mode="selector"
            :range="genderList"
            range-key="name"
            @change="handleGenderChange"
            class="info-picker"
          >
            <view class="picker-text">
              {{ user.gender || '请选择性别' }}
            </view>
          </picker>
        </div>

        <div class="form-group">
          <label for="contact">联系方式</label>
          <input 
            type="tel" 
            id="contact" 
            v-model="user.contact" 
            placeholder="请输入手机号"
            pattern="[0-9]{11}"
            style ="width:80%"
          >
        </div>

        <!-- 新增密码修改 -->
        <div class="form-group">
          <label for="password">新密码</label>
          <input
            id="password"
            v-model="user.password"
            type="password"
            class="input"
            placeholder="留空则不修改密码"
            style="width:80%"
          >
        </div>

        <div class="form-group">
          <label for="confirmPassword">确认新密码</label>
          <input
            id="confirmPassword"
            v-model="user.confirmPassword"
            type="password"
            class="input"
            placeholder="再次输入新密码"
            style="width:80%"
          >
        </div>

        <button class="save-btn" @click="saveProfile">保存修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import { fetchUserBaseInfo,
  fetchModifiableData, 
  updateUserInfo, 
  uploadUserAvatar,
  getDefaultAvatar,
  fetchUserAvatar
} from '@/api/user.js';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      user: {
        user_id: null,
        avatar: '',        // 头像
        username: '',       // 用户名
        gender: '',       // 新增性别字段
        contact: '',
        password: '',     // 新增密码字段
        confirmPassword: '' // 新增确认密码字段
      },
      originalUser: {},     // 保存原始数据用于比较
      defaultAvatar: '../../static/user.jpeg', // 直接使用路径
      avatarError: '',
      genderList: [        // 性别选项
        { name: '男', value: '男' },
        { name: '女', value: '女' }
      ]
    };
  },
  created() {
    this.fetchUserModifiableData();
  },
  methods: {
  async fetchUserModifiableData() {
    this.loading = true;
    try {
      const cacheUserID = uni.getStorageSync('user_id');
      const res = await fetchModifiableData(cacheUserID);
      
      // 获取用户头像
      const avatar = await fetchUserAvatar(cacheUserID);
	  console.log(res);
      const userData = {
        user_id: cacheUserID,
        avatar: avatar || this.defaultAvatar,
        gender: res.gender,
		contact: res.telephone,
		username: res.username
      };

      this.user = { ...userData };
      this.originalUser = { ...userData };
    } catch (error) {
      console.error('获取用户数据失败:', error);
      uni.showToast({ title: '获取信息失败', icon: 'none' });
    }
  },

    // 处理性别选择变化
    handleGenderChange(event) {
      const selectedGenderIndex = event.detail.value;
      this.user.gender = this.genderList[selectedGenderIndex].value;
    },

    // 触发头像上传
    // 处理头像变更
	async triggerAvatarUpload() {
	  uni.chooseImage({
		count: 1,
		sizeType: ['compressed'], // 压缩图片
		sourceType: ['album', 'camera'],
		success: async (res) => {
		  try {
			const filePath = res.tempFilePaths[0];
			
			// 使用 plus.io.resolveLocalFileSystemURL 解析文件路径
			plus.io.resolveLocalFileSystemURL(filePath, (entry) => {
			  // entry 是一个 FileEntry 对象
			  entry.file((file) => {
				// 使用 FileReader 读取文件内容
				const reader = new plus.io.FileReader();
				reader.readAsDataURL(file); // 读取为 Data URL
				reader.onloadend = (e) => {
				  const base64Data = e.target.result; // 获取 Base64 数据
				  this.uploadAvatar(base64Data); // 调用上传方法
				};
				reader.onerror = (err) => {
				  console.error('读取文件失败:', err);
				  uni.showToast({ 
					title: '读取文件失败: ' + err.message, 
					icon: 'none' 
				  });
				};
			  });
			}, (error) => {
			  console.error('解析文件路径失败:', error);
			  uni.showToast({ 
				title: '解析文件路径失败: ' + error.message, 
				icon: 'none' 
			  });
			});
		  } catch (error) {
			console.error('头像处理失败:', error);
			uni.showToast({ 
			  title: '头像处理失败: ' + error.message, 
			  icon: 'none' 
			});
		  }
		}
	  });
	},

	// 图片压缩方法(可选)
	compressImage(filePath) {
	  return new Promise((resolve, reject) => {
		uni.compressImage({
		  src: filePath,
		  quality: 80, // 质量80%
		  success: res => resolve(res.tempFilePath),
		  fail: err => reject(err)
		});
	  });
	},

  fileToBase64(filePath) {
    return new Promise((resolve, reject) => {
      // 使用uni.getFileSystemManager()代替nativeFileManager
      const fs = uni.getFileSystemManager();
      fs.readFile({
        filePath: filePath,
        encoding: 'base64',
        success: (res) => {
          // 获取文件类型
          const fileType = this.getFileType(filePath);
          resolve(`data:image/${fileType};base64,${res.data}`);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  },

  // 获取文件类型
  getFileType(filePath) {
    const extension = filePath.split('.').pop().toLowerCase();
    return extension === 'png' ? 'png' : 'jpeg'; // 默认jpeg
  },

  async uploadAvatar(base64Data) {
    try {
      uni.showLoading({ title: '上传中...' });
      const cacheUserID = uni.getStorageSync('user_id'); 
      await uploadUserAvatar(cacheUserID, base64Data);
      
      // 获取更新后的头像
      const newAvatar = await fetchUserAvatar(cacheUserID);
      this.user.avatar = newAvatar;
	   // 获取更新后的头像
	   this.user.avatar = newAvatar;

      uni.showToast({
        title: '头像上传成功',
        icon: 'success'
      });
    } catch (error) {
      console.error('头像上传失败:', error);
      uni.showToast({
        title: error.message || '头像上传失败',
        icon: 'none'
      });
    } finally {
      uni.hideLoading();
    }
  },
    handleImageError() {
      this.user.avatar = this.defaultAvatar;
    },

    async saveProfile() {
      // 验证用户名
      if (!this.user.username.trim()) {
        uni.showToast({ title: '用户名不能为空', icon: 'none' });
        return;
      }

      // 验证性别
      if (!this.user.gender) {
        uni.showToast({ title: '请选择性别', icon: 'none' });
        return;
      }

      // 验证手机号
      if (!/^1[3-9]\d{9}$/.test(this.user.contact)) {
        uni.showToast({ title: '请输入有效手机号', icon: 'none' });
        return;
      }

      // 验证密码
      if (this.user.password && this.user.password !== this.user.confirmPassword) {
        uni.showToast({ title: '两次输入的密码不一致', icon: 'none' });
        return;
      }

      try {
        uni.showLoading({ title: '保存中...' });
        const cacheUserID = uni.getStorageSync('user_id');

        // 准备请求数据
        const requestData = {
          username: this.user.username,
          gender: this.user.gender,
          telephone: this.user.contact
        };

        // 如果有新密码，添加到请求数据中
        if (this.user.password) {
          requestData.password = this.user.password;
        }

        const response = await updateUserInfo(cacheUserID, requestData);
        
        if (response.code === 200) {
          uni.showToast({ title: '保存成功', icon: 'success' });
          this.originalUser = { ...this.user };
          // 清空密码字段
          this.user.password = '';
          this.user.confirmPassword = '';
		  setTimeout(() => {
				uni.navigateTo({
				url: '/pages/index/person'
			});
		  }, 2000);
        } else {
          throw new Error(response.message || '保存失败');
        }
		
      } catch (error) {
        console.error('保存失败:', error);
        uni.showToast({ 
          title: error.message || '保存失败，请重试', 
          icon: 'none' 
        });
      } finally {
        uni.hideLoading();
      }
    }
  }
};
</script>

<style scoped>
.user-profile-container {

  margin: 0 auto;
  padding: 20px;
  background-image: url('../../static/bg.jpg');
  background-size: cover; /* 确保背景图片覆盖整个容器 */
  background-position: center; /* 背景图片居中 */
}

.profile-edit-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 0px;
  margin-bottom:40px;
}

.profile-edit-card h2 {
  text-align: center;
  margin-bottom: 10px;
  font-size:20px;
  color: #333;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}


.avatar-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #084fa1;
  margin-bottom: 15px;
}

.upload-btn {
  background-color: #f0f0f0;
  color: #666;
  border: 2px solid #999;
  padding: 2px 10px;
  margin-top:-5px;
  margin-bottom:-10px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s;
}

.upload-btn:hover {
  background-color: #e0e0e0;
}

.form-section {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.form-group label {
  flex: 0 0 80px; /* 根据实际需要调整标签宽度 */
  margin-bottom: 0;
  font-weight: 500;
  color: #555;
}

.form-group input,
.form-group .info-picker {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  max-width: calc(100% - 100px); /* 减去标签宽度 */
}


.save-btn {
  width: 100%;
  padding: 2px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight:bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.error-message {
  color: #ff4d4f;
  margin-top: 8px;
  font-size: 14px;
}


</style>