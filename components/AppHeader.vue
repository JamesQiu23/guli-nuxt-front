<template>
  <!-- 公共头 -->
  <header id="header">
    <section class="container">
      <h1 id="logo">
        <a href="#" title="谷粒学院">
          <img src="~/assets/img/logo.png" width="100%" alt="谷粒学院">
        </a>
      </h1>
      <div class="h-r-nsl">
        <ul class="nav">
          <router-link to="/" tag="li" active-class="current" exact>
            <a>首页</a>
          </router-link>
          <router-link to="/course" tag="li" active-class="current">
            <a>课程</a>
          </router-link>
          <router-link to="/teacher" tag="li" active-class="current">
            <a>名师</a>
          </router-link>
          <router-link to="/article" tag="li" active-class="current">
            <a>文章</a>
          </router-link>
          <router-link to="/question" tag="li" active-class="current">
            <a>问答</a>
          </router-link>
        </ul>
        <!-- / nav -->
        <ul class="h-r-login">
          <li v-if="!userInfo" id="no-login">
            <a href="/login" title="登录">
              <em class="icon18 login-icon">&nbsp;</em>
              <span class="vam ml5">登录</span>
            </a>
            |
            <a href="/register" title="注册">
              <span class="vam ml5">注册</span>
            </a>
          </li>
          <li v-if="userInfo" id="is-login-one" class="mr10">
            <a id="headerMsgCountId" href="#" title="消息">
              <em class="icon18 news-icon">&nbsp;</em>
            </a>
            <q class="red-point">&nbsp;</q>
          </li>
          <li v-if="userInfo" id="is-login-two" class="h-r-user">
            <a href="/ucenter" title>
              <img
                :src="userInfo.avatar"
                width="30"
                height="30"
                class="vam picImg"
                alt>
              <span id="userName" class="vam disIb">{{ userInfo.nickname }}</span>
            </a>
            <a href="javascript:void(0);" title="退出" class="ml5" @click="logout()">退出</a>
          </li>
          <!-- /未登录显示第1 li；登录后显示第2，3 li -->
        </ul>
        <aside class="h-r-search">
          <form action="#" method="post">
            <label class="h-r-s-box">
              <input type="text" placeholder="搜索课程" name="queryCourse.courseName" value>
              <button type="submit" class="s-btn">
                <em class="icon18">&nbsp;</em>
              </button>
            </label>
          </form>
        </aside>
      </div>
      <aside class="mw-nav-btn">
        <div class="mw-nav-icon"/>
      </aside>
      <div class="clear"/>
    </section>
  </header>
  <!-- /公共头 -->
</template>

<script>
import loginApi from '~/api/login'
import cookie from 'js-cookie'
export default {
  data() {
    return {
      userInfo: null
    }
  },
  mounted() {
    // 微信登录url token获取
    const token = this.$route.query.token
    if (token) {
      // 登录成功后将token写入cookie
      cookie.set('guli_token', token, {
        domain: 'localhost',
        expires: 1 // 1天：如果是数值则单位为天，也可以是Date类型，表示有效期至Date指定时间
      })
      // 跳转页面：擦除url中的token
      // 注意：window对象在created方法中无法被访问，因此要写在mounted中
      window.location.href = '/'
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 如果cookie中token都没有，则不显示也无法显示登录的账户信息
    getUserInfo() {
      if (!cookie.get('guli_token')) {
        return
      }
      // 如果token存在但token还没发给后端解析用于发给我们数据，则不执行这里；
      // 执行这里是当token存在且也向发送请求解析了，获取到了token中存储的个人信息时，执行这里直接显示用户信息；
      if (cookie.get('guli_user')) {
        this.userInfo = JSON.parse(cookie.get('guli_user'))
        return
      }
      // 如果token存在且token没被后端解析过，则根据token解析用户登录信息
      loginApi.getLoginInfo()
        .then(response => {
          this.userInfo = response.data.userInfo // 渲染页面
          cookie.set('guli_user', this.userInfo, {
            domin: 'localhost',
            expires: 1 // 1天：如果是数值则单位为天，也可以是Date类型，表示有效期至Date指定时间
          })
        })
    },
    // 退出登录
    logout() { // 将cookie的内容清空即为注销
      cookie.remove('guli_token')
      cookie.remove('guli_user')

      // cookie.set('guli_token', '', { domain: 'localhost' })
      // cookie.set('guli_user', '', { domain: 'localhost' })
      // 跳转页面
      window.location.href = '/'
    }
  }
}
</script>
