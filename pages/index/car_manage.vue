<template>
  <div class="user-profile-container">
    <NavigationBar />
    
    <!-- 车牌信息卡片 -->
    <div class="car-info-card">
      <div class="car-scroll">
        <!-- 已登记的车牌列表 -->
        <div id="plateList">
          <div v-if="userCars.length === 0" class="no-plate-tip">
            <text>暂无绑定车牌</text>
          </div>
		  <div class="plate-item" v-for="plate in userCars" :key="plate.number">
			<div class="plate-info">
			  <i class="fa-solid fa-car"></i>
			  <span class="plate-number" style="font-weight:bold">{{ plate.number }}</span>
			  <span class="color-badge" :style="{ 
				backgroundColor: colorMap[plate.color] || plate.color,
				border: '2px solid rgb(100, 100, 100)'
			  }"></span>
			  <span class="car-model" v-if="plate.model">{{ plate.model }}</span>
			</div>
			<div class="plate-actions">
			  <button class="edit-button" @click="openEditModal(plate)">修改</button>
			  <button class="unbind-button" @click="unbindCar(plate.number)">解绑</button>
			</div>
		  </div>
        </div>
      </div>
      <!-- 添加车牌按钮 -->
      <button class="add-plate-button" @click="openAddPlateModal">添加车牌</button>
    </div>

    <!-- 添加车牌模态窗口 -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 style="margin-bottom:20px;">{{ modalTitle }}</h2>
        <div class="form-container">
          <div class="form-group">
            <label for="plateNumber">车牌号码:</label>
            <div class="plate-input-group">
				<picker 
				  mode="selector" 
				  :range="provinces" 
				  @change="onProvinceChange"
				  class="plate-picker"
				>
				  <div class="picker-content">
					{{ plateInputs[0] || '省份' }}
				  </div>
				</picker>
				
				<!-- 字母选择器 -->
				<picker 
				  mode="selector" 
				  :range="lettersNumbers" 
				  @change="onLetterChange"
				  class="plate-picker"
				>
				  <div class="picker-content">
					{{ plateInputs[1] || '字母' }}
				  </div>
				</picker>
              <input type="text" v-model="plateInputs[2]" class="plate-input" maxlength="1" pattern="[A-Z0-9]" placeholder="A" required>
              <input type="text" v-model="plateInputs[3]" class="plate-input" maxlength="1" pattern="[A-Z0-9]" placeholder="1" required>
              <input type="text" v-model="plateInputs[4]" class="plate-input" maxlength="1" pattern="[A-Z0-9]" placeholder="2" required>
              <input type="text" v-model="plateInputs[5]" class="plate-input" maxlength="1" pattern="[A-Z0-9]" placeholder="3" required>
              <input type="text" v-model="plateInputs[6]" class="plate-input" maxlength="1" pattern="[A-Z0-9]" placeholder="4" required>
            </div>
          </div>
			<div class="form-group">
			  <label for="plateColor">车牌颜色:</label>
			  <picker 
				mode="selector" 
				:range="colorOptions" 
				@change="onColorChange"
				class="color-picker"
			  >
				<div class="picker-content">  <!-- 移除动态颜色样式 -->
				  {{ getColorName(plateColor) || '选择颜色' }}
				</div>
			  </picker>
			</div>
          <div class="form-group">
            <label for="carModel">车辆型号:</label>
            <input type="text" 
                   v-model="carModel" 
                   id="carModel" 
                   class="color-select" 
                   placeholder="请输入车辆型号"
                   required>
          </div>
          <div class="form-group">
            <label for="seatCount">座位数量:</label>
            <input type="number" 
                   v-model.number="seatCount" 
                   id="seatCount" 
                   class="color-select" 
                   min="1" 
                   max="20" 
                   placeholder="请输入座位数"
                   required
                   @keypress="validateNumberInput">
          </div>
          <button class="confirm-btn" @click="handleButtonClick">{{ submitButtonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue';
import {get, post, put, del} from '@/utils/request.js';
import {fetchCars} from '../../api/user';  
import {
  addCar,
  updateCar,
  unbindCar,
  validatePlateNumber
} from '../../api/car'; 
export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      user: {
        avatar: '/static/user.jpeg',
        name: 'jyd777',
        age: 20,
        gender: '女'
      },
      userCars: [],
      showModal: false,
      modalTitle: '添加车牌',
      submitButtonText: '确定',
      isEditing: false,
      editingPlateNumber: '',
      provinces: ['沪', '京', '津', '渝', '冀', '晋', '辽', '吉', '黑', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼', '川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新', '藏', '港', '澳'],
      lettersNumbers: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''),
      plateInputs: Array(7).fill(''),
      plateColor: 'blue',
      colorOptions: ['蓝牌', '黄牌', '白牌', '黑牌', '绿牌', '黄绿牌', '临牌'],
      colorMap: {
        blue: '#1E90FF',
        yellow: '#FFD700',
        white: '#FFFFFF',
        black: '#000000',
        green: '#32CD32',
        'yellow-green': '#ADFF2F',
        temporary: '#FFA500'
      },
      isLoading: false,
      seatCount: 4,
    };
  },
  mounted() {
    this.fetchUserCars();
  },
  methods: {
	  // 颜色选择变化
    onColorChange(e) {
      const colorKeys = Object.keys(this.colorMap);
      this.plateColor = colorKeys[e.detail.value];
    },
	  // 省份选择变化
	  onProvinceChange(e) {
		this.plateInputs[0] = this.provinces[e.detail.value];
	  },
	  
	  // 字母选择变化
	  onLetterChange(e) {
		this.plateInputs[1] = this.lettersNumbers[e.detail.value];
	  },
    getColorName(colorName) {
      const map = {
        'yellow-green': '黄绿牌',
        'temporary': '临牌',
        'blue': '蓝牌',
        'yellow': '黄牌',
        'white': '白牌',
        'black': '黑牌',
        'green': '绿牌'
      };
      return map[colorName] || colorName + '牌';
    },
    
    openAddPlateModal() {
      this.modalTitle = '添加车牌';
      this.submitButtonText = '确定';
      this.isEditing = false;
      this.showModal = true;
    },
    
    openEditModal(plate) {
      this.modalTitle = '修改车辆信息';
      this.submitButtonText = '保存';
      this.isEditing = true;
      this.editingPlateNumber = plate.number;
      
      // 填充表单数据
      this.plateInputs = [
        plate.number.substring(0, 1), // 省份
        plate.number.substring(1, 2), // 字母
        ...plate.number.substring(2).split('') // 剩余字符
      ];
      this.plateColor = plate.color;
      this.carModel = plate.model || '';
      this.seatCount = plate.seats || 4;
      
      this.showModal = true;
    },
    
    closeModal() {
      this.showModal = false;
      this.resetPlateForm();
    },
    
    resetPlateForm() {
      this.plateInputs = Array(7).fill('');
      this.plateColor = 'blue';
      this.carModel = '';
      this.seatCount = 4;
      this.isEditing = false;
      this.editingPlateNumber = '';
    },

	async fetchUserCars() {
	  this.isLoading = true;
	  try {
		const userId = uni.getStorageSync('user_id');
		const res = await fetchCars(userId);
		console.log("fetch car res", res);
		
		// 处理返回数据为空或非对象情况
		if (!res || typeof res !== 'object') {
		  this.userCars = [];
		  console.log('没有车辆数据或数据格式不正确');
		  return;
		}
		
		// 将对象转换为数组
		const carsArray = Object.values(res);
		
		// 转换后端数据为前端需要的格式
		this.userCars = carsArray.map(car => ({
		  car_id: car.car_id,
		  number: car.plate_number,
		  model: car.brand_model,
		  color: car.color || 'blue', // 默认颜色
		  seats: car.seats || 4 // 默认座位数
		}));
		
		console.log(this.userCars);
		
		// 如果没有车辆数据，显示提示
		if (this.userCars.length === 0) {
		  uni.showToast({
			title: '您还没有添加车辆，请点击下方按钮添加',
			icon: 'none',
			duration: 3000
		  });
		}
	  } catch (error) {
		console.error('获取车辆列表失败:', error);
		this.userCars = []; // 确保设置为空数组
		
		uni.showToast({
		  title: '获取车辆列表失败，请稍后重试',
		  icon: 'none',
		  duration: 2000
		});
	  } finally {
		this.isLoading = false;
	  }
	},   
  // 新的按钮点击处理方法
  handleButtonClick() {
    // 执行表单验证
    if (!this.validateForm()) {
      return;
    }
    
    // 根据模式调用不同方法
    if (this.isEditing) {
      this.updatePlate();
    } else {
      this.addPlate();
    }
  },
  
  // 表单验证方法
  validateForm() {
    const plateNumber = this.plateInputs.join('');
    
    // 车牌号验证
    if (!validatePlateNumber(plateNumber)) {
      uni.showToast({
        title: '请输入有效的车牌号',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    
    // 必填字段验证
    if (!this.plateColor || !this.carModel || !this.seatCount) {
      uni.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    
    return true;
  },
    
  // 修改 addPlate 方法
  async addPlate() {
    const plateNumber = this.plateInputs.join('');
    if (!validatePlateNumber(plateNumber)) {
      uni.showToast({
        title: '请输入有效的车牌号',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    this.isLoading = true;
    
    try {
      const userId = uni.getStorageSync('user_id');
      const res = await addCar(userId, {
        number: plateNumber,
        color: this.plateColor,
        model: this.carModel,
        seats: this.seatCount
      });
      
      let failMsg = '车辆信息不匹配';
      console.log(res.message);
      if (res.message === '车辆信息不匹配') {
        failMsg = '车辆信息不匹配';
        uni.showToast({
          title: failMsg,
          icon: 'none',
          duration: 2000
        });
      } else {
        let successMsg = '添加成功';
        if (res.message === '关联成功') {
          successMsg = '关联成功';
        } else if (res.message === '车辆已关联') {
          successMsg = '该车辆已关联';
        }
        
        uni.showToast({
          title: successMsg,
          icon: 'success',
          duration: 2000
        });
        
        await this.fetchUserCars();
      }
    } catch (error) {
      console.error('操作失败:', error);
      uni.showToast({
        title: '操作失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
    } finally {
      this.closeModal();
      this.isLoading = false;
    }
  },

  // 修改 updatePlate 方法
  async updatePlate() {
    const plateNumber = this.plateInputs.join('');
    if (!validatePlateNumber(plateNumber)) {
      uni.showToast({
        title: '请输入有效的车牌号',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    this.isLoading = true;
    
    try {
      const userId = uni.getStorageSync('user_id');
      const res = await updateCar(userId, this.editingPlateNumber, {
        number: plateNumber,
        color: this.plateColor,
        model: this.carModel,
        seats: this.seatCount
      });

      let failMsg = '车辆信息不匹配';
      console.log(res.message);
      if (res.message === '车辆信息不匹配') {
        failMsg = '车辆信息不匹配';
        uni.showToast({
          title: failMsg,
          icon: 'none',
          duration: 2000
        });
      } else {
        let successMsg = '修改成功';
        if (res.message === '合并成功') {
          successMsg = '车辆信息已合并';
        }
        console.log("ok");
        uni.showToast({
          title: successMsg,
          icon: 'success',
          duration: 2000
        });
        
        await this.fetchUserCars();
      }    
    } catch (error) {
      console.error('修改车牌失败:', error);
      uni.showToast({
        title: '操作失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
    } finally {
      this.closeModal();
      this.isLoading = false;
    }
  },

  // 修改 unbindCar 方法
  unbindCar(plateNumber) {
    uni.showModal({
      title: '提示',
      content: '确定要解绑车牌吗？',
      success: async (res) => {
        if (res.confirm) {
          this.isLoading = true;
          try {
            const userId = uni.getStorageSync('user_id');
            const response = await unbindCar(userId, plateNumber);
            
            if (response.code === 200) {
              uni.showToast({
                title: '解绑成功',
                icon: 'success',
                duration: 2000
              });
              await this.fetchUserCars();
            } else {
              uni.showToast({
                title: response.message || '解绑失败',
                icon: 'none',
                duration: 2000
              });
            }
          } catch (error) {
            console.error('解绑车牌失败:', error);
            uni.showToast({
              title: '操作失败，请稍后重试',
              icon: 'none',
              duration: 2000
            });
          } finally {
            this.isLoading = false;
          }
        }
      }
    });
  },

  }
};
</script>

<style scoped>
.user-profile-container {
  height: 100vh; /* 高度占据整个视口 */
  margin: 0 auto;
  padding: 20px;
  display: flex; /* 启用弹性布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-image: url('../../static/bg.jpg');
  background-size: cover; /* 确保背景图片覆盖整个容器 */
  background-position: center; /* 背景图片居中 */
}

.car-info-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  min-height: 100px;
  margin-top: 0px;
}

.car-scroll {
  width:100%;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}


.plate-item {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  justify-content: space-between; /* 添加这一行 */
}

.plate-info {
  display: flex;
  align-items: center;
  flex-grow: 1; /* 让信息部分占据剩余空间 */
}

.plate-actions {
  display: flex;
  gap: 5px; /* 按钮之间的间距 */
}

.plate-item .fa-car {
  margin-right: 10px;
  color: #007aff;
}

.plate-number {
  margin-right: 10px;
  font-size: 14px;
}

.color-badge {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.car-model {
  margin-right: 10px;
  font-size: 12px;
  color: #666;
}

.edit-button {
  padding: 0px 5px;
  margin-right: 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
}

.unbind-button {
  padding: 0px 5px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
}

.add-plate-button {
  padding: 0px 15px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
}

.no-plate-tip {
  text-align: center;
  color: #999;
  padding: 20px;
  font-size: 14px;
}

/* 模态窗口样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 18px;
  border-radius: 8px;
  width: 82%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.close {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 24px;
  color: #aaa;
  cursor: pointer;
}

.close:hover {
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.plate-input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.plate-select, .plate-input {
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 0px;
  font-size: 14px;
}

.plate-select {
  min-width: 30px;
}

.plate-input {
  width: 30px;
  text-align: center;
}

.color-select {
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 0px;
  font-size: 16px;
}
/* 确保数字输入框与选择框样式一致 */
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Safari 和 Chrome */
  margin: 0;
}
.confirm-btn {
  width: 100%;
  padding: 0px 10px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

.confirm-btn:hover {
  background-color: #0062cc;
}

/* 添加 picker 相关样式 */
.plate-picker {
  height: 30px;
  min-width: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin-right: 5px;
}

.picker-content {
  font-size: 14px;
  color: #333;
}

/* 确保输入框对齐 */
.plate-input-group {
  display: flex;
  align-items: center;
}

.color-picker {
  width: 93.5%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>