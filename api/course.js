import request from '~/utils/request'

export default {
  courseList(courseQuery) {
    return request({
      url: '/api/edu/course/courseList',
      method: 'get',
      params: courseQuery
    })
  }
}
