import { get, post } from '@/utils/request.js'

// 获取用户车辆列表
export const fetchUserVehicles = (userId) => {
  return get(`/user/cars/${userId}`);
};

/**
 * 获取当前用户基本信息
 * @param {number} userId - 用户ID
 * @returns {Promise<UserInfo>}
 */
export const fetchUserBaseInfo = (userId) => {
  return get(`/user/basic/${userId}`)
    .then(res => {
      return {
        ...res.data,
        age: typeof res.data.age === 'number' ? res.data.age : null,
        gender: res.data.gender === '男' ? 'male' : 'female',
        avatar: res.data.avatar || getDefaultAvatar() 
      };
    })
    .catch(error => {
      console.error('Error fetching user base info:', error);
      throw error;
    });
};

/**
 * 获取用户完整档案
 * @param {number} userId - 用户ID
 * @returns {Promise<UserProfile>}
 */
export const fetchUserProfile = (userId) => {
  return get(`/user/${userId}/profile`).then(res => {
    return {
      ...res.data.user_info,
      telephone: res.data.user_info.telephone
    };
  });
};

/**
 * 获取用户可修改的信息
 * @param {number} userId - 用户ID
 * @returns {Promise}
 */
export const fetchModifiableData = (userId) => {
  return get(`/user/${userId}/modifiable_data`).then(res => {
    return {
      ...res.data,
      avatar: res.data.avatar || getDefaultAvatar() 
    };
  });
};

/**
 * 获取用户的车牌信息
 * @param {number} userId - 用户ID
 * @returns {Promise}
 */
export const fetchCars = (userId) => {
  return get(`/user/cars/${userId}`).then(res => {
    return {
      ...res.data
    };
  });
};

/**
 * 更新用户信息
 * @param {number} userId - 用户ID
 * @param {Object} data - 需要更新的字段
 * @returns Promise
 */
export const updateUserInfo = (userId, data) => {
  return post(`/user/update/${userId}`, data, {
    showLoading: true,
    loadingText: "正在更新用户信息..."
  }).then(res => {
    if (res.code !== 200) {
      throw new Error(res.message || '更新失败');
    }
    return res;
  });
};

/**
 * 上传用户头像 (Base64版本)
 * @param {number} userId - 用户ID
 * @param {string} base64Data - Base64编码的图片数据
 * @returns {Promise}
 */
export const uploadUserAvatar = (userId, base64Data) => {
  return post(`/user/upload_avatar/${userId}`, {
    base64_data: base64Data
  }, {
    showLoading: true,
    loadingText: "正在上传头像..."
  });
};

/**
 * 获取用户头像 (Base64版本)
 * @param {number} userId - 用户ID
 * @returns {Promise<string>} Base64编码的头像URL
 */
export const fetchUserAvatar = (userId) => {
  return get(`/user/avatar/${userId}`).then(res => {
    if (!res || !res.data) {
        console.error('Invalid data received for user avatar:', res);
        return getDefaultAvatar(); // Return default on error/invalid data
    }
    return res.data.avatar_url || getDefaultAvatar();
  }).catch(error => {
      console.error('Error fetching user avatar:', error);
      return getDefaultAvatar(); // Return default on fetch error
  });
};

/**
 * 获取用户简要信息（用于性能敏感场景） - Endpoint needs verification
 * @returns {Promise<BasicUserInfo>}
 */
export const fetchBasicUserInfo = () => {
  // Verify if this endpoint requires userId or gets current logged-in user implicitly
  return get('/user/basic').then(res => {
       if (!res || !res.data) {
         console.error('Invalid data received for basic user info:', res);
         throw new Error('Failed to fetch basic user info');
      }
      return res.data; // Assuming response structure matches BasicUserInfo
  }).catch(error => {
      console.error('Error fetching basic user info:', error);
      throw error;
  });
};

/**
 * 获取用户默认头像
 * @returns {string}
 */
export const getDefaultAvatar = () => {
  return '../../static/user.jpeg';
}

// 类型定义
/**
 * @typedef {Object} UserInfo
 * @property {string} userId
 * @property {string} username
 * @property {string} [avatar]
 * @property {number} [age]
 * @property {'male'|'female'} [gender]
 */

/**
 * @typedef {Object} BasicUserInfo
 * @property {string} userId
 * @property {string} username
 * @property {string} [avatar]
 */