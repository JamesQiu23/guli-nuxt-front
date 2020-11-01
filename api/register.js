import request from '~/utils/request'

export default {

  // 获取验证码
  sendMessage(phoneNum) {
    return request({
      baseURL: 'http://localhost:8027',
      url: `/api/sms/send/${phoneNum}`,
      method: 'get'
    })
  },

  // 用户注册
  register(registerForm) {
    return request({
      baseURL: 'http://localhost:8028',
      url: '/api/ucenter/member/register',
      method: 'post',
      data: registerForm
    })
  }
}
