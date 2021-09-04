<template>
      <el-container class="container">
          <!-- 头部 -->
      <el-header>
          <div>
              <img src="~assets/heima.png">
              <span>电商后台管理系统</span>
          </div>
          <el-button type="info" @click="quit">退出</el-button>
      </el-header>
     <el-container>
         <!-- 左侧布局 -->
      <el-aside width="200px">
          <!-- 左侧导航部分 -->
        <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 一级菜单 -->
      <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
          <!-- 一级菜单模板区域 -->
        <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template> 
        <!-- 二级菜单 -->
        <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id">
           <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i>
          <span>{{subItem.authName}}</span>
        </template> 
        </el-menu-item>
      </el-submenu>
    
    </el-menu>
      </el-aside>
      <!-- 右侧布局 -->
      <el-main>Main</el-main>
      </el-container>
     </el-container>
  
</template>

<script>
export default {
    created(){
    this.getMenuList()
  },
  data(){
     return {
         menulist:null,
     }
  }, 
  methods:{
      quit(){
          window.sessionStorage.clear()
          this.$router.push('/login')
      },
      async getMenuList(){
      const {data: res} = await this.$http.get('menus')
      if(res.meta.status!==200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.el-header{
    background: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items:center;
    color:#fff;
    font-size:20px;
    >div{
        display: flex;
        align-items: center;
          span{
              margin-left: 15px;
          }
    }
}
.el-aside{
    background: #333744;
}
.el-main{
    background: #eaedf1;
}
.container{
    height: 100%;
}
</style>