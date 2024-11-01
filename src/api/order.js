import instance from './instance';

export const orderApi = {
  // 获取用户订单列表
  getUserOrders: (params) => {
    return instance.get('/orders', { params });
  },

  // 获取订单详情
  getOrderById: (id) => {
    return instance.get(`/orders/${id}`);
  },

  // 获取订单统计
  getOrderStats: () => {
    return instance.get('/orders/stats');
  }
}; 