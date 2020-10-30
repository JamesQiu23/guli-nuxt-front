import request from '~/utils/request'

export default {
  // 查询所有的父科目分类
  getSubjectNestedList() {
    return request({
      url: '/api/edu/subject/nested-list',
      method: 'get'
    })
  }

}
