import instance from './instance';

export const bookshelfApi = {
  // 获取用户书架
  getBookshelf: () => {
    return instance.get('/bookshelf');
  },

  // 添加小说到书架
  addToBookshelf: (novelId) => {
    return instance.post(`/bookshelf/novels/${novelId}`);
  },

  // 从书架移除小说
  removeFromBookshelf: (novelId) => {
    return instance.delete(`/bookshelf/novels/${novelId}`);
  },

  // 更新阅读进度
  updateReadingProgress: (novelId, data) => {
    return instance.put(`/bookshelf/novels/${novelId}/progress`, data);
  },

  // 检查小说是否在书架中
  checkNovelInBookshelf: (novelId) => {
    return instance.get(`/bookshelf/novels/${novelId}/check`);
  }
}; 