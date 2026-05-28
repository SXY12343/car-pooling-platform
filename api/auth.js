import { get, post } from "@/utils/request.js"

export default {
	/**
	  * 注册用户
	  * @param {Object} data 注册参数
	  * @returns Promise
	  */
	register(data) {
		return post("/auth/register", data, {
		  showLoading: true,
		  loadingText: "正在注册..."
		})
	},
	/**
      * 用户登录
      * @param {Object} data 登录参数
      * @returns Promise
      */
	login(data) {
		return post("/auth/login", data, {
		  showLoading: true,
		  loadingText: "正在登录..."
		})
	}
}

/**
 * @file 认证相关工具函数
 */


/**
 * 获取当前登录用户ID
 * @returns {number|null} 用户ID
 */
export const getCurrentUserId = () => {
  const user_id=uni.getStorageSync('user_id');;
  return payload?.user_id || null;
};

/**
 * 检查是否已登录
 * @returns {boolean}
 */
export const isLoggedIn = () => {
  return !!getCurrentUserId();
};