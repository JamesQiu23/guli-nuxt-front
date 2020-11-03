import request from '~/utils/request'

export default {
  // 查询所有的父科目分类
  getSubjectNestedList() {
    return request({
      url: '/api/edu/subject/nested-list',
      method: 'get'
    })
  },

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
  },

  // 获取加密视频的播放凭证
  getPlayAuth(videoSourceId) {
    return request({
      url: `/api/vod/media/get-play-auth/${videoSourceId}`,
      method: 'get'
    })
  },

  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/edu/course/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  }

}
