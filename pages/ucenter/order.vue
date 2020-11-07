<template>
  <article class="col-7 fl">
    <div class="u-r-cont">
      <section>
        <div>
          <section class="c-infor-tabTitle c-tab-title">
            <a href="javascript: void(0)" title="我的订单" class="current">订单列表</a>
          </section>
        </div>
        <div class="mt40">
          <section v-if="orderList.length === 0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam" >您还没有订单哦！</span>
          </section>

          <!-- 表格 -->
          <el-table v-if="orderList.length>0" :data="orderList" border fit highlight-current-row>
            <!-- 饿了么表格的使用：我们提供一个json集合(数组)给到el-table标签的table属性，它能自动为每个集合元素创建为表格的一行 -->
            <!-- 不需要我们foreach遍历集合，当前集合元素用scope.row表示，可以'.属性名'的方式获取元素的属性 -->
            <el-table-column label="课程信息" align="center" >
              <template slot-scope="scope">
                <div class="info" >
                  <div class="pic">
                    <img :src="scope.row.courseCover" alt="scope.row.courseTitle" width="100px">
                  </div>
                  <div class="title">
                    <a :href="'/course/'+scope.row.courseId">{{ scope.row.courseTitle }}</a>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="讲师名称" width="100" align="center">
              <template slot-scope="scope">
                {{ scope.row.teacherName }}
              </template>
            </el-table-column>
            <el-table-column label="价格" width="100" align="center" >
              <template slot-scope="scope">
                {{ scope.row.totalFee / 100 }}
              </template>
            </el-table-column>
            <el-table-column label="创建时间" width="180" align="center">
              <template slot-scope="scope">
                {{ scope.row.gmtCreate }}
              </template>
            </el-table-column>
            <el-table-column prop="status" label="订单状态" width="100" align="center" >
              <template slot-scope="scope">
                <el-tag :type="scope.row.status === 0 ? 'warning' : 'success'">{{ scope.row.status === 0 ? '未支付' : '已支付' }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column label="操作" width="150" align="center">
              <template slot-scope="scope" >
                <router-link v-if="scope.row.status === 0" :to="'/order/'+scope.row.id">
                  <el-button type="text" size="mini" icon="el-icon-edit">去支付</el-button>
                </router-link>
                <router-link v-if="scope.row.status === 1" :to="'/course/'+scope.row.courseId">
                  <el-button type="text" size="mini" icon="el-icon-edit">去学习</el-button>
                </router-link>
                <span>&nbsp;</span>
                <el-button type="text" size="mini" icon="el-icon-delete" @click="removeById(scope.row.id)">删除订单</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import orderApi from '~/api/order'
export default {
  data() {
    return {
      orderList: []
    }
  },

  mounted() {
    this.fetchOrderList()
  },

  methods: {
    fetchOrderList() {
      orderApi.getList()
        .then(response => {
          this.orderList = response.data.items
          // this.$message({ type: 'success', message: response.message })
          // this.$router.go(0)
          // this.$forceUpdate()
        })
    },

    // removeById(orderId) {
    //   this.$confirm('确认要删除当前订单吗?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => { orderApi.removeById(orderId) }).then(response => {
    //     this.$message('删除成功')
    //     this.fetchOrderList()
    //     this.$forceUpdate
    //   })
    //     .catch(error => {
    //       if (error === 'cancel') {
    //         this.$message({
    //           message: '取消删除'
    //         })
    //       }
    //     })
    // }

    // 根据id删除数据
    removeById(orderId) {
      this.$confirm('确认要删除当前订单吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => { orderApi.removeById(orderId) }).then((response) => {
          this.$message('删除成功')
          orderApi.getList().then(response => {
            this.orderList = response.data.items
            this.$forceUpdate()
          })
        })
        .catch(error => {
          if (error === 'cancel') {
            this.$message({
              message: '取消删除'
            })
          }
        })
    }

  }
}

</script>
