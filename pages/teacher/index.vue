<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">名师团队</span>
        </h2>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section v-if="!items || items.length===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->

          <!-- /数据列表 开始-->
          <article v-else class="i-teacher-list">
            <ul class="of">
              <li v-for="item in items" :key="item.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/'+ item.id" title="item.name">
                      <img v-if="item.avatar" :src="item.avatar" alt="item.avator" width="142">
                      <img v-else src="https://my-oos-bucket01.oss-cn-shanghai.aliyuncs.com/avatar/avator/fbb89ceb3fb546139a0504a9f6f2f6e6.jpg" alt="item.name" width="142">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="'/teacher/'+ item.id" title="item.name" class="fsize18 c-666">{{ item.name }}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span v-if="item.level === 1" class="fsize14 c-999" >首席讲师</span>
                    <span v-if="item.level === 2" class="fsize14 c-999" >高级讲师</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">资深项目经理、技术讲师、SUN SCJP、SCWCD、原工信部移动云计算教育培训中心教学总监。 十年软件开发经验：参与完成辽宁某高校远程教学管理系统、慧文信息门户系统、日本麦卡尔超市管理系统、崎玉市外来人口登记系统、深海视频会议管理系统、仙台市宫城县日常事务系统等项目的设计和开发。 十年软件培训经验：曾在中国AOP全球外包排名第一的公司任Java、Oracle培训讲师、负责对公司员工新技术培训；曾任花旗银行特约JavaEE培训讲师；某部队研究所JavaEE培训；曾受聘为北航、厦门大学移动云计算专业教学主任， 并主讲Java、Android、iOS课程。</p>
                  </div>
                </section>
              </li>
            </ul>
            <div class="clear"/>
          </article>
          <!-- /数据列表 结束-->
        </div>
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>

<script>
import teacherApi from '~/api/teacher'

export default{
  async asyncData() {
    // 在页面加载前使用nuxt获取到讲师列表数据
    const response = await teacherApi.teacherList()
    return {
      // 讲师列表数据
      items: response.data.items
    }
  }
}

</script>
