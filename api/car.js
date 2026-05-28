// car.js
import { get, post, put, del } from '@/utils/request.js';

// 添加车辆
export const addCar = async (userId, carData) => {
  try {
    const res = await post(`/user/cars/${userId}`, carData, {
      showLoading: true,
      loadingText: "正在添加车辆..."
    });
    return res;
  } catch (error) {
    console.error('添加车辆失败:', error);
    throw error;
  }
};

// 更新车辆信息
export const updateCar = async (userId, oldPlateNumber, carData) => {
  try {
    const res = await put(`/user/cars/${userId}/${oldPlateNumber}`, carData, {
      showLoading: true,
      loadingText: "正在更新车辆信息..."
    });
    return res;
  } catch (error) {
    console.error('更新车辆失败:', error);
    throw error;
  }
};

// 解绑车辆
export const unbindCar = async (userId, plateNumber) => {
  try {
    const res = await del(`/user/cars/${userId}/${plateNumber}`, {}, {
      showLoading: true,
      loadingText: "正在解绑车辆..."
    });
    return res;
  } catch (error) {
    console.error('解绑车辆失败:', error);
    throw error;
  }
};

// 验证车牌号
export const validatePlateNumber = (plateNumber) => {
  const pattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z]([A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]|[0-9]{5})$/;
  return pattern.test(plateNumber);
};