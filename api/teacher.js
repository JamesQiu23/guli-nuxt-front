import request from '~/utils/request'

export default {
  teacherList() {
    return request({
      url: '/api/edu/teacher/list',
      method: 'get'
    })
  },
  getById(id) {
    return request({
      url: `/api/edu/teacher/get/${id}`,
      method: 'get'
    })
  }
}

