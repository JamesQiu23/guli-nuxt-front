import request from '~/utils/request'

export default {

  // 获取banner位(幻灯片位置)的广告
  getTopBannerAdList() {
    return request({
      baseURL: 'http://localhost:8026',
      url: '/api/cms/ad/list/1',
      method: 'get'
    })
  },

  // 获取热门讲师和热门课程
  getIndexData() {
    return request({
      baseURL: 'http://localhost:8023',
      url: '/api/edu/index/index',
      method: 'get'
    })
  }
}
