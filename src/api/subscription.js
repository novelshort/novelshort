import instance from './instance';

export const subscriptionApi = {
  // 创建支付会话
  createCheckoutSession: (data) => {
    return instance.post('/subscription/create-checkout-session', data);
  },

  // 获取订阅计划列表
  getSubscriptionPlans: () => {
    return instance.get('/subscription/plans');
  },

  // 创建订阅计划（管理员）
  createSubscriptionPlan: (data) => {
    return instance.post('/subscription/plans', data);
  }
}; 