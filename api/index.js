import request from '~/utils/request'

export default {

  // 获取banner位(幻灯片位置)的广告
  getTopBannerAdList() {
    return request({
      url: '/api/cms/ad/list/1',
      method: 'get'
    })
  },

  // 获取热门讲师和热门课程
  getIndexData() {
    return request({
      url: '/api/edu/index/index',
      method: 'get'
    })
  }
}
