import { get, post } from '@/utils/request.js';

// 发布订单
export const publishOrder = (orderData) => {
  return post('/orders', orderData);
};

// 支付订单
export const payOrder = (orderId) => {
  return post(`/orders/${orderId}/paid`);
};

// 获取行程详情
export const fetchTripDetail = (orderId) => {
  return get(`/orders/${orderId}`);
};

// 提交评价
export const submitTripRating = (orderId, payload) => {
  return post(`/orders/${orderId}/rate`, payload);
};

export const fetchCalendarTrips = (year, month, userId) => {
  return get(`/orders/calendar/${userId}`, { 
    params: { year, month }
  }).then(response => {
    return response.data.map(trip => ({
      id: trip.order_id,
      order_id: trip.order_id,
      start_time: trip.start_time,
      start_loc: trip.start_loc,
      dest_loc: trip.dest_loc,
      date: trip.start_time,
      startPoint: trip.start_loc,
      endPoint: trip.dest_loc,
      price: trip.price,
      car_type: trip.car_type,
      carType: trip.car_type || '未指定车型',
      status: trip.status,
      userAvatar: trip.initiator.avatar || '../../static/user.jpeg',
      orderCount: trip.participants_count || 0,
      initiator: trip.initiator
    }));
  });
};

export function fetchUserTrips(userId) {
  return get( `/orders/user/${userId}/trips`);
}

// 获取管理后台订单列表
export const fetchManagedOrders = (params) => {
	console.log(params.status||'all');
  return get('/orders/manage/list', { 
    params: {
      status: params.status || 'all',
      type: params.type || 'all',
      year: params.year || '',
      month: params.month || ''
    }
  }).then(response => {
	  console.log(response.data);
    return response.data.map(order => ({
      id: order.id,
      date: order.date,
      startPoint: order.startPoint,
      endPoint: order.endPoint,
      price: order.price,
      carType: order.carType || '未指定车型',
      status: order.status,
      publisher: order.publisher,
      userAvatar: order.userAvatar || '../../static/user.jpeg',
      rejectReason: order.rejectReason
    }));
  });
};

// 审核通过订单
export const approveOrder = (orderId) => {
  return post(`/orders/manage/${orderId}/approve`);
};

// 拒绝订单
export const rejectOrder = (orderId, reason) => {
  return post(`/orders/manage/${orderId}/reject`, { reason });
};



