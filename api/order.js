import request from '~/utils/request'

export default {
  // 创建订单
  createOrder(courseId) {
    return request({
      url: `/api/trade/order/auth/save/${courseId}`,
      method: 'post'
    })
  },

  getById(orderId) {
    return request({
      url: `/api/trade/order/auth/get/${orderId}`,
      method: 'get'
    })
  },

  isBuy(courseId) {
    return request({
      url: `/api/trade/order/auth/is-buy/${courseId}`,
      method: 'get'
    })
  },

  getList() {
    return request({
      url: '/api/trade/order/auth/list',
      method: 'get'
    })
  },

  removeById(courseId) {
    return request({
      url: `/api/trade/order/auth/remove/${courseId}`,
      method: 'delete'
    })
  }

}
