<template>
	<div>
		<!-- 使用 NavigationBar 组件 -->
		<NavigationBar />
		<!-- 支付弹窗 -->
		<PaymentModal 
			:visible="showPaymentModal" 
			:amount="tripData.price" 
			:orderId="orderId" 
			@close="closePaymentModal" 
			@refresh="fetchTripDetails" 
		/>
		<!-- 评价弹窗 -->
		<view class="rate-modal" v-if="showRateModal">
			<view class="rate-content">
				<text class="rate-title">请为本次行程评分</text>
				<view class="stars-container">
					<view v-for="i in 5" :key="i" @click="setRating(i)" class="star">
						<image :src="i <= currentRating ? '../../static/star-filled.png' : '../../static/star-empty.png'"
							class="star-icon" />
					</view>
				</view>

				<view class="rate-buttons">
					<button class="cancel-button" @click="cancelRating">取消</button>
					<button class="submit-button" @click="submitRating" :disabled="isSubmittingRating">提交评价</button>
				</view>
			</view>
		</view>

		<!-- 地图容器 -->
		<map id="uni-map" class="map-container" :longitude="centerLng" :latitude="centerLat" :markers="markers"
			:polyline="polyline" :scale="14" v-if="!isLoading"></map>
    <view v-else class="loading-placeholder">地图加载中...</view>

		<!-- 行程详情 -->
    <view v-if="!isLoading && tripData.id" class="order-scroll" scroll-y="true" >
			<view class="order-info"> <!-- 移除 v-for，因为只显示一个行程 -->
				<view class="order-card">
					<view class="order-header">
						<text>{{ tripData.date }}</text>
						<view class="button-container">
						  <!-- “评价”按钮：只有在 state 为 '待评价' 时显示 -->
						  <button v-if="tripData.state === 'to-review'" class="rate-button" @click="handleRateClick">评价</button>
						  <!-- “付款”按钮：只有在 state 为 '待付款' 时显示 -->
						  <button v-if="tripData.state === 'to-pay'" class="rate-button" @click="handlePayClick">付款</button>
						  <!-- 状态/操作按钮，动态映射状态 -->
						  <button class="state-button" :class="'status-' + tripData.state">
							{{ getStatusText(tripData.state) }}
						  </button>
						</view>
					</view>
					<view class="order-details">
						<view class="start-point">
							<image src="../../static/start.png" class="icon" style="height:20px;width:20px" />
							<text class="order-text">{{ tripData.startPoint }}</text>
						</view>
						<view class="departure-point">
							<image src="../../static/dest.png" class="icon" style="height:20px;width:20px" />
							<text class="order-text">{{ tripData.endPoint }}</text>
						</view>
					</view>
					<view class="separator" />
					<view class="order-summary">
						<view class="summary-content">
							<image :src="tripData.userAvatar" class="user-avatar" @error="handleAvatarError"/> <!-- 添加错误处理 -->
							<view class="car-info">
								<view class="car-type-summary">
									<text class="car-type">{{ tripData.carType }}</text>
								</view>
								<view class="order-count-summary">
									<text class="order-count">接单{{ tripData.orderCount }}次</text>
								</view>
							</view>
							<view class="price-info">
								<text class="price-text" style="color:#003366;font-weight:bold;">预估{{ tripData.price }}元</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
    <view v-else-if="isLoading" class="loading-placeholder">
      行程信息加载中...
    </view>
     <view v-else class="loading-placeholder">
      加载行程信息失败或无信息。
    </view>
	</div>
</template>

<script>
	import NavigationBar from '../../components/NavigationBar.vue';
	import PaymentModal from '../../components/PaymentModal.vue';
	import { fetchTripDetail, submitTripRating} from '@/api/order.js';

	export default {
		components: {
			NavigationBar,
			PaymentModal
		},
		data() {
			return {
        isLoading: true, // 加载状态
				mapContext: null,
				centerLng: 121.214345, // 默认中心点
				centerLat: 31.285985, // 默认中心点
        orderId: null, // 当前页面显示的订单ID
				tripData: { // 用于存储从 API 获取的行程数据
          id: null,
          date: '',
          startPoint: '',
          endPoint: '',
          price: 0,
          carType: '',
          orderCount: 0,
          userAvatar: '', // 默认头像
          state: '',
          driverUserId: null // 添加司机ID，用于评价
        },
				showPaymentModal: false,
				showRateModal: false,
				currentRating: 0, // 当前评分
        ratingComment: '', // 评价评论 (可选)
        isSubmittingRating: false, // 防止重复提交评价
				markers: [],
				polyline: []
			};
		},
		onLoad(options) {
			if (options && options.id) {
				this.orderId = parseInt(options.id);
				console.log('接收到的参数 id (赋值给 orderId):', this.orderId);
				this.fetchTripDetails();
			} else {
				console.error('未接收到有效的 id 参数！');
				uni.showToast({ title: '无法加载行程信息', icon: 'error' });
				this.isLoading = false;
			}
		},
		mounted() {
			this.initMap();
		},
		methods: {
			  // 状态映射方法
			getStatusText(state) {
				const statusMap = {
				pending: '待审核',
				completed: '已完成',
				rejected: '已拒绝',
				'not-started': '未开始',
				'in-progress': '进行中',
				'to-pay': '待付款',
				'to-review': '待评价',
				};
				return statusMap[state] || '未知状态';
			},
			// 1. 获取行程详情
			fetchTripDetails() {
				if (!this.orderId) return;
				this.isLoading = true;

				fetchTripDetail(this.orderId)
					.then((res) => {
					console.log('行程详情获取成功:', res);
					this.tripData = res.data;
					console.log(this.tripData);
					this.drawRoute();
					})
					.catch((err) => {
					console.error('获取行程详情失败:', err);
					uni.showToast({ title: '加载失败，请重试', icon: 'none' });
					this.tripData = {};
					})
					.finally(() => {
					this.isLoading = false;
					});
				},

			initMap() {
        // 确保在 DOM 准备好之后创建 map context
        this.$nextTick(() => {
          this.mapContext = uni.createMapContext('uni-map', this); // 注意添加 this
           if (!this.mapContext) {
              console.error("创建 map context 失败");
           }
        });
			},

      // --- 2. 绘制地图路线 (依赖 API 数据) ---
			async drawRoute() {
			// 确保有起点和终点信息
			console.log(this.tripData.startPoint,this.tripData.endPoint);
			if (!this.tripData || !this.tripData.startPoint || !this.tripData.endPoint) {
			  console.warn("缺少起点或终点信息，无法绘制路线");
			  return;
			}

				const { startPoint, endPoint } = this.tripData;
				console.log('绘制路线起点:', startPoint);
				console.log('绘制路线终点:', endPoint);

				// 使用高德 API 将地址转换为经纬度
				const [startPos, endPos] = await Promise.all([
					this.transFormAddress(startPoint),
					this.transFormAddress(endPoint)
				]);

				if (!startPos || !endPos) {
					console.error('地址解析失败，无法绘制路线');
          uni.showToast({ title: '地址解析失败', icon: 'none' });
					return;
				}
				console.log('起点坐标:', startPos);
				console.log('终点坐标:', endPos);

        // --- 更新地图中心点和标记 ---
				this.centerLng = startPos[0]; // 以起点为中心
				this.centerLat = startPos[1];
				this.markers = [{
						id: 1,
						latitude: startPos[1],
						longitude: startPos[0],
						title: '起点',
						iconPath: '../../static/start.png', // 确保路径正确
						width: 25,
						height: 25
					},
					{
						id: 2,
						latitude: endPos[1],
						longitude: endPos[0],
						title: '终点',
						iconPath: '../../static/dest.png', // 确保路径正确
						width: 25,
						height: 25
					}
				];
         console.log('更新 markers:', this.markers);

				// 调用高德 API 获取驾车路径规划
				const route = await this.getDrivingRoute(startPos, endPos);
				if (route && route.paths && route.paths.length > 0 && route.paths[0].steps) {
          console.log("获取到高德路线规划:", route);
					let pointsArr = [];
          // 解析 polyline 点
          route.paths[0].steps.forEach(step => {
              if (step.polyline) {
                  const stepPoints = step.polyline.split(';');
                  stepPoints.forEach(pointStr => {
                      if (pointStr) {
                          const coords = pointStr.split(',');
                          if (coords.length === 2) {
                              pointsArr.push({
                                  longitude: parseFloat(coords[0]),
                                  latitude: parseFloat(coords[1])
                              });
                          }
                      }
                  });
              }
          });

					if (pointsArr.length > 0) {
            this.polyline = [{
              points: pointsArr,
              color: '#007AFF', // 蓝色路线
              width: 6,
              // dottedLine: true // 实线通常更清晰
            }];
             console.log('更新 polyline 点数:', pointsArr.length);
          } else {
            console.warn("解析出的路线点为空");
            this.polyline = [];
          }

				} else {
          console.error("高德路线规划失败或无有效路径:", route);
           this.polyline = [];
        }
			},


	getDrivingRoute(startPos, endPos) {
        return new Promise((resolve, reject) => {
					uni.request({
						url: 'https://restapi.amap.com/v3/direction/driving',
						data: {
							origin: startPos.join(','),
							destination: endPos.join(','),
							key: '9979fdc383e13ee57c582bc869dbd690' // !!! 替换成你自己的 Key !!!
						},
						success: (res) => {
							console.log('高德驾车路线API响应:', res.data);
							if (res.data.status === '1' && res.data.route) {
								resolve(res.data.route);
							} else {
								console.error('驾车路径规划失败:', res.data.info || '未知错误');
								resolve(null); // 返回 null 而不是 reject，让调用处继续执行
							}
						},
						fail: (err) => {
							console.error('驾车路径规划请求失败:', err);
							resolve(null);
						}
					});
				});
			},
			transFormAddress(address) {
        return new Promise((resolve, reject) => {
					uni.request({
						url: 'https://restapi.amap.com/v3/geocode/geo',
						data: {
							address: address,
							key: '9979fdc383e13ee57c582bc869dbd690', // !!! 替换成你自己的 Key !!!
							output: 'JSON'
						},
						success: (res) => {
              console.log(`地址解析 "${address}" 响应:`, res.data);
							if(res.data && res.data.info === 'OK' && res.data.geocodes && res.data.geocodes.length > 0) {
								let { location } = res.data.geocodes[0];
								let addrArr = location.split(',')
								resolve([parseFloat(addrArr[0]), parseFloat(addrArr[1])]); // 确保是数字
							} else {
                console.error(`地址解析失败 "${address}":`, res.data.info || '无结果');
                resolve(null);
              }
						},
						fail: (err) => {
							console.error(`地址解析请求失败 "${address}":`, err);
							resolve(null);
						}
					});
				});
			},
      // --- (旧的 geocodeAddress 方法不再需要，因为我们从 transFormAddress 获取坐标) ---

      // --- 3. 处理按钮点击 ---
	  handlePayClick() {
		if (!this.orderId) {
			console.error('订单ID丢失，无法打开支付弹窗');
			uni.showToast({ title: '订单ID丢失', icon: 'error' });
			return;
		}
		this.showPaymentModal = true; // 显示支付弹窗
		},
      handleRateClick() {
        console.log("评价按钮点击");
        this.showRatingModal();
      },

      // --- 4. 评价相关方法 ---
			showRatingModal() {
        console.log("显示评价弹窗");
				this.showRateModal = true;
				this.currentRating = 0; // 重置评分
        this.ratingComment = ''; // 重置评论
			},
			setRating(rating) {
				console.log("设置评分:", rating);
        // 点击已选中的星星取消选中，否则设置为新值
        this.currentRating = (this.currentRating === rating) ? 0 : rating;
			},
			cancelRating() {
        console.log("取消评价");
				this.showRateModal = false;
			},
			submitRating() {
			  if (this.currentRating === 0) {
				uni.showToast({ title: '请选择星级', icon: 'none' });
				return;
			  }
			  if (!this.orderId) {
				uni.showToast({ title: '无法提交评价，订单ID丢失', icon: 'error' });
				return;
			  }
			  if (this.isSubmittingRating) return; // 防止重复提交
			
			  this.isSubmittingRating = true;
			
			  const payload = {
				rating_value: this.currentRating,
			  };
			
			  submitTripRating(this.orderId, payload)
				.then((res) => {
				console.log('评价提交成功:', res);
				uni.showToast({
					title: '评价成功！',
					icon: 'success',
				});
				this.showRateModal = false;
				this.fetchTripDetails(); // 评价成功后刷新行程数据
				})
				.catch((err) => {
				console.error('评价提交失败:', err);
				uni.showToast({ title: '评价失败，请重试', icon: 'none' });
				})
				.finally(() => {
				this.isSubmittingRating = false;
				});
			},

			// --- 5. 其他辅助方法 ---
			closePaymentModal() {
				this.showPaymentModal = false;
			},
      handleAvatarError(event) {
        console.warn("头像加载失败，使用默认头像");
        event.target.src = '../../static/user.jpeg'; // 确保默认头像路径正确
      }
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		overflow: hidden;
	}
  /* 添加 loading 样式 */
  .loading-placeholder {
    text-align: center;
    padding: 50px;
    color: #888;
    font-size: 14px;
  }

  /* 可选：评价评论输入框样式 */
  .comment-input {
      width: 100%;
      height: 80px;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 8px;
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: 14px;
      box-sizing: border-box; /* 防止 padding 撑开元素 */
  }

	.map-container {
		width: 100%;
		height: 300px;
		z-index: 1; /* 确保地图在某些元素下面（如有必要）*/
	}

	.order-scroll {
		width: 100%;
		/* height: calc(100vh - 400px - 50px); */ /* 视导航栏高度调整 */
		overflow-y: scroll;
    background-color: #f8f8f8; /* 给滚动区域一个背景色 */
	}

	.order-info {
		display: flex;
		flex-direction: column;
		padding: 10px; /* 给整个信息区域一些内边距 */
	}

	.order-card {
		background-color: #fff; /* 卡片背景设为白色 */
		display: flex;
		flex-direction: column;
		padding: 15px; /* 增加卡片内边距 */
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 稍微柔和的阴影 */
		margin-bottom: 10px;
    border: none; /* 移除边框，使用阴影 */
	}

	.order-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
    margin-bottom: 10px; /* 增加头部下方间距 */
    font-size: 14px;
    color: #666;
	}

  .button-container {
		display: flex;
		align-items: center;
	}

	.order-details {
		display: flex;
		flex-direction: column;
		margin-top: 10px; /* 增加与头部间距 */
	}

	.start-point,
	.departure-point {
		display: flex;
		align-items: center;
		margin-bottom: 8px; /* 增加点位间距 */
	}

	.order-text {
		font-size: 14px; /* 稍大字体 */
		margin-left: 8px;
    color: #333;
	}

  .icon {
    /* 可以为图标设置 flex-shrink: 0 防止被压缩 */
    flex-shrink: 0;
  }

	.price-text {
		font-size: 16px;
		/* margin-left: 20px; */ /* 通过布局控制，不一定需要 */
		color: #003366;
		font-weight: bold;
		/* align-self: flex-end; */ /* 通过父级 space-between 控制 */
	}

	.separator {
		height: 1px;
		background-color: #eee; /* 更浅的分隔线 */
		margin: 15px 0px; /* 上下间距，左右0 */
	}

	.order-summary {
		display: flex;
		align-items: center;
		margin-top: 5px;
	}

	.summary-content {
		display: flex;
		align-items: center;
		justify-content: space-between; /* 让内容分布在两侧 */
		width: 100%;
	}

	.user-avatar {
		width: 40px; /* 稍大头像 */
		height: 40px;
		border-radius: 50%;
		border: 1px solid #eee; /* 更淡的边框 */
		margin-right: 12px;
    flex-shrink: 0;
	}

	.car-info {
		display: flex;
		flex-direction: column;
    /* margin-left: -125px; */ /* 移除负 margin，让布局自然流动 */
    flex-grow: 1; /* 让车辆信息部分占据剩余空间 */
    margin-right: 10px; /* 与价格信息之间增加间距 */
	}

	.car-type {
		font-weight: bold;
		font-size: 14px; /* 稍大字体 */
    color: #333;
	}
  .car-type-summary {
    margin-bottom: 3px;
  }

	.order-count {
		font-size: 12px; /* 稍大字体 */
		color: #999;
	}

	.price-info {
		/* align-self: flex-end; */ /* 通过父级 space-between 控制 */
    text-align: right; /* 价格靠右对齐 */
    flex-shrink: 0; /* 防止价格被压缩 */
	}

	.join-button, .rate-button {
    /* 统一按钮样式 */
		padding: 5px 12px; /* 调整内边距 */
		font-weight: normal; /* 正常字重 */
		font-size: 12px; /* 稍大字体 */
		color: white;
		border: none;
		border-radius: 15px; /* 圆角按钮 */
    line-height: 1.5; /* 确保文字垂直居中 */
    margin-left: 8px; /* 按钮间距 */
    transition: background-color 0.2s ease; /* 过渡效果 */
	}

  .join-button {
    background-color: #007aff; /* 主题蓝 */
  }
  .join-button:active { /* 点击效果 */
     background-color: #0056b3;
  }

	.rate-button {
		background-color: #ff9500; /* 评价按钮颜色 */
	}
  .rate-button:active {
    background-color: #cc7a00;
  }

	.rate-modal {
		position: fixed;
		top: 50%;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6); /* 更深的遮罩 */
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
	}

	.rate-content {
		background-color: white;
		padding: 25px; /* 增加内边距 */
		border-radius: 12px; /* 更大的圆角 */
		width: 85%;
		max-width: 320px; /* 限制最大宽度 */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 弹窗阴影 */
	}

	.rate-title {
		font-size: 18px; /* 稍大标题 */
		font-weight: bold;
		margin-bottom: 25px; /* 增加间距 */
		display: block;
		text-align: center;
    color: #333;
	}

	.stars-container {
		display: flex;
		justify-content: center;
		margin-bottom: 25px; /* 增加间距 */
	}

	.star {
		margin: 0 6px; /* 增加星星间距 */
    cursor: pointer; /* 手型光标 */
	}

	.star-icon {
		width: 35px; /* 稍大星星 */
		height: 35px;
	}

	.rate-buttons {
		display: flex;
		justify-content: space-between;
    margin-top: 10px; /* 与上方内容间距 */
	}

	.cancel-button, .submit-button {
		flex: 1; /* 平分宽度 */
		padding: 0px; /* 增加按钮内边距 */
		font-size: 14px;
		border-radius: 8px;
		border: none;
		margin: 0 5px; /* 按钮间距 */
	}

	.cancel-button {
		background-color: #f0f0f0;
		color: #555;
    border: 1px solid #ddd; /* 给取消按钮一个边框 */
	}
  .cancel-button:active {
     background-color: #e0e0e0;
  }

	.submit-button {
		background-color: #007aff;
		color: white;
	}
   .submit-button:active {
     background-color: #0056b3;
  }
  .submit-button:disabled { /* 禁用状态 */
    background-color: #cce5ff;
    cursor: not-allowed;
  }
  .state-button {
		padding: 5px 12px;
		font-size: 12px;
		font-weight:bold;
		color: white;
		border: none;
		border-radius: 15px;
		line-height: 1.5;
		margin-left: 8px;
		transition: background-color 0.2s ease;
	}

/* 状态对应的颜色 */
.status-pending {
  background-color: #FF9500; /* 橙色 - 待审核 */
}

.status-completed {
  background-color: #4CD964; /* 绿色 - 已完成 */
}

.status-rejected {
  background-color: #FF3B30; /* 红色 - 已拒绝 */
}

.status-not-started {
  background-color: #8E8E93; /* 灰色 - 未开始 */
}

.status-in-progress {
  background-color: #5856D6; /* 紫色 - 进行中 */
}

.status-to-pay {
  background-color: #FFCC00; /* 亮黄色 - 待付款 */
}

.status-to-review {
  background-color: #5AC8FA; /* 蓝色 - 待评价 */
}
</style>