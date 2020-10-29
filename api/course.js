import request from '~/utils/request'

export default {

  getSubjectNestedList() {
    return request({
      url: '/api/edu/subject/nested-list',
      method: 'get'
    })
  },

  // 重新开始
  getById(id) {
    return request({
      url: `/api/edu/course/get/${id}`,
      method: 'get'
    })
  },
  getList(searchObj) {
    return request({
      url: '/api/edu/course/list',
      method: 'get',
      params: searchObj
    })
  }

}
