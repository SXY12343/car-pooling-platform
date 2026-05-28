/**
 * @file 网络请求(request)工具库
 * @description 封装了uni-app的请求方法，提供以下功能：
 * 1. 自动添加基础URL和认证Token
 * 2. 统一的请求/响应拦截器
 * 3. 快捷的HTTP方法封装（GET/POST/PUT/DELETE）
 * 
 * @example 基本使用
 * import { get, post } from '@/utils/request'
 * 
 * // GET请求
 * get('/api/user').then(res => {...})
 * 
 * // POST请求
 * post('/api/login', {username, password}).then(res => {...})
 * 
 * // 文件上传
 * upload('/api/upload', filePath).then(res => {...})
 */

// 配置区 ====================================================

/**
 * 基础API地址 (根据环境动态设置--未完成)
 */
//你的ipconfig得到的ipv4地址
const BASE_URL = "http://100.80.189.152:5000/api" 


// 拦截器 ====================================================

/**
 * 请求拦截器配置
 * @property {function} invoke - 请求发出前的处理
 */
const requestInterceptor = {
  /**
    * 请求预处理
    * @param {Object} options - 请求配置
    * @returns {Object} 处理后的请求配置
    */
  invoke(options) {
    // 添加请求头
    options.header = {
      'Content-Type': 'application/json',
      ...(options.header || {}),
      'Authorization': `Bearer ${uni.getStorageSync('access_token') || ''}`
    }
    
    // 自动补全完整URL（若非完整路径）
    if (!options.url.startsWith('http') && !options.url.startsWith('//')) {
      options.url = `${BASE_URL}${options.url.startsWith('/') ? '' : '/'}${options.url}`
    }
    
    return options
  }
}

/**
 * 响应拦截器配置
 */
const responseInterceptor = {
  /**
    * 请求成功处理 (状态码200)
    * @param {Object} res - 响应对象
    * @returns {Promise}
    */
  success(res) {
	const { statusCode, data } = res;
	
	// 网络层错误处理
	if(statusCode !== 200) {
		return handleNetworkError(statusCode);
	}
	
	// 业务层代码处理
	return handleBusinessCode(data);
  },
  
  /**
    * 请求失败处理
    * @param {Error} err - 错误对象
    */
  fail(err) {
    // 统一错误处理
	return handleNetworkError(error.errMsg || '网络请求失败');
  }
}

// 注册拦截器 ================================================
uni.addInterceptor('request', requestInterceptor)
uni.addInterceptor('uploadFile', requestInterceptor)
uni.addInterceptor('downloadFile', requestInterceptor)

// 核心请求方法 ==============================================

/**
 * 基础请求方法
 * @param {Object} options - 请求配置
 * @returns {Promise} 
 */
export const request = (options) => {
  const {
    showLoading = false,
    loadingText = '加载中...',
    ...realOptions
  } = options
  
  // 从本地获取Token
  const token = uni.getStorageSync('access_token');
  console.log(token)
  options.header = options.header || {};
  if(token) {
	  options.header['Authorization'] = `Bearer ${token}`;
  }
  
  if (showLoading) {
    uni.showLoading({
      title: loadingText,
      mask: true
    })
  }
	
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
		if (showLoading) uni.hideLoading()
		
        responseInterceptor.success(res)
          .then(resolve)
          .catch(reject)
      },
      fail: (err) => {
		if (showLoading) uni.hideLoading()
		
        responseInterceptor.fail(err)
          .then(resolve)
          .catch(reject)
      }
    })
  })
}

/**
 * 文件上传
 * @param {String} url - 请求地址
 * @param {String} filePath - 文件路径
 * @param {String} name - 文件字段名
 * @param {Object} [formData] - 额外表单数据
 * @param {Object} [options] - 额外配置
 */
export const upload = (url, filePath, name = 'file', formData = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`,
      filePath,
      name,
      formData,
      header: {
        'Authorization': `Bearer ${uni.getStorageSync('access_token') || ''}`
      },
      success: (res) => {
        if (res.statusCode === 200) {
          try {
            const data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
            handleBusinessCode(data)
              .then(resolve)
              .catch(reject);
          } catch (e) {
            reject(new Error('解析响应数据失败'));
          }
        } else {
          handleNetworkError(res.statusCode)
            .then(resolve)
            .catch(reject);
        }
      },
      fail: (err) => {
        responseInterceptor.fail(err)
          .then(resolve)
          .catch(reject);
      }
    });
  });
};

// 快捷方法 =================================================

/**
 * GET请求
 * @param {String} url - 请求地址
 * @param {Object} [data] - 请求参数
 * @param {Object} [options] - 额外配置
 */
export const get = (url, data = {}, options = {}) => 
	request({ url, data, method: 'GET', ...options });
  

/**
 * POST请求
 * @param {String} url - 请求地址
 * @param {Object} data - 请求体数据
 * @param {Object} [options] - 额外配置
 */
export const post = (url, data = {}, options = {}) =>
  request({ url, data, method: 'POST', ...options })

/**
 * PUT请求
 * @param {String} url - 请求地址
 * @param {Object} data - 请求体数据
 * @param {Object} [options] - 额外配置
 */
	
export const put = (url, data = {}, options = {}) =>
	request({ url, data, method: 'PUT', ...options });


/**
 * DELETE请求
 * @param {String} url - 请求地址
 * @param {Object} [data] - 请求参数
 * @param {Object} [options] - 额外配置
 */
export const del = (url, data = {}, options = {}) =>
  request({ url, data, method: 'DELETE', ...options })

// 工具函数 ==================================================
/**
 * 展示信息
 * @param {message} 展示信息 
 */
function showToast(message) {
  uni.showToast({ 
    title: message, 
    icon: 'none',
    duration: 2000 
  });
}

/**
 * 设置认证Token
 * @param {String} token - JWT Token
 */
export const setAuthToken = (token) => {
  uni.setStorageSync('token', token)
}

/**
 * 清除认证信息
 */
export const clearAuth = () => {
  uni.removeStorageSync('token')
}

/**
 * 处理Token过期
 */
function handleTokenExpired(message) {
  // 前端移除token和用户信息
  uni.removeStorageSync('access_token')
  uni.removeStorageSync('user_info')
  
  // 避免重复跳转
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]?.route
  if (currentPage !== 'pages/login/login') {
    uni.navigateTo({
      url: '/pages/login/login?redirect=/' + currentPage
    })
  }
  
  showToast(message || '登录已过期');
}

/**
 * 处理HTTP网络错误
 * @param {number} statusCode 
 */
function handleNetworkError(statusCode) {
  const errorMap = {
    400: '请求参数错误',
    401: '未授权',
    403: '禁止访问',
    404: '资源不存在',
	409: '信息不匹配',
    500: '服务器内部错误',
    502: '网关错误'
  };
  
  const errMsg = errorMap[statusCode] || `网络错误[${statusCode}]`;
  showToast(title=errMsg);
  return Promise.reject(new Error(errMsg));
}

/**
 * 处理业务状态码
 * @param {ApiResponse} data 
 */
function handleBusinessCode(data) {
  switch (data?.code) {
    case 200: // 业务成功
      return Promise.resolve(data);
      
    case 401: // Token无效
      handleTokenExpired(data.message);
      return Promise.reject(new Error(data.message || '请重新登录'));
      
    case 403: // 无权限
      showToast('无访问权限');
      return Promise.reject(new Error('无权限'));
	  
	case 409: // 信息不匹配
	  showToast('信息不匹配');
	  return Promise.reject(new Error('信息不匹配'));  
      
    default:   // 其他业务错误
      const errMsg = data?.message || `业务错误[${data?.code}]`;
      showToast(errMsg);
      return Promise.reject(new Error(errMsg));
  }
}

