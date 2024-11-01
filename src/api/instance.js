import axios from 'axios';
import { auth } from '@/firebase/config';

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 请求拦截器
instance.interceptors.request.use(
  async (config) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error getting auth token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 只返回响应数据部分
    return response.data;
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权错误
          console.error('Unauthorized:', error);
          break;
        case 403:
          // 处理禁止访问错误
          console.error('Forbidden:', error);
          break;
        case 404:
          // 处理未找到错误
          console.error('Not Found:', error);
          break;
        default:
          // 处理其他错误
          console.error('API Error:', error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance; 