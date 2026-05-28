// map/index.js
import UniMap from '../uniCloud-aliyun/cloudfunctions/common/uni-map-common/index.js';

export async function getDrivingRoute(from, to) {
  try {
    const uniMap = new UniMap({
      provider: 'amap', // 使用高德地图
      key: 'YOUR_AMAP_KEY' // 替换为你的高德地图Key
    });

    const result = await uniMap.driving({
      mode: 'driving',
      from: from, // 起点坐标，格式为 "lat,lng"
      to: to // 终点坐标，格式为 "lat,lng"
    });

    if (result.errCode === 0) {
      return result.result.routes; // 返回路线数据
    } else {
      throw new Error(result.errMsg);
    }
  } catch (error) {
    console.error('获取路线失败:', error);
    throw error;
  }
}