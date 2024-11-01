import instance from './instance';

export const novelApi = {
  // 获取小说列表
  getNovelList: (params) => {
    return instance.get('/api/novels', { params });
  },

  // 获取小说详情
  getNovelById: (id) => {
    return instance.get(`/novels/${id}`);
  },

  // 点赞小说
  likeNovel: (id) => {
    return instance.post(`/novels/${id}/like`);
  },

  // 创建小说
  createNovel: (data) => {
    return instance.post('/novels', data);
  },

  // 更新小说
  updateNovel: (id, data) => {
    return instance.put(`/novels/${id}`, data);
  },

  // 删除小说
  deleteNovel: (id) => {
    return instance.delete(`/novels/${id}`);
  }
}; 