import request from '~/utils/request'

export default {
  // 查询所有的父科目分类
  submitLogin(member) {
    return request({
      baseURL: 'http://localhost:8028',
      url: '/api/ucenter/member/login',
      method: 'post',
      data: member
    })
  },

  getLoginInfo() {
    return request({
      baseURL: 'http://localhost:8028',
      url: '/api/ucenter/member/auth/get-login-info',
      method: 'get'
    })
  }
}
