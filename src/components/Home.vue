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
      <el-aside :width =" show? '64px':'200px'">
          <!-- 左侧导航部分 -->
          <div class="toggle-button" @click="isShow">|||</div>
        <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409Eff"
      unique-opened
      :collapse="show"
      :collapse-transition="false"
      router>
      <!-- 一级菜单 -->
      <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
          <!-- 一级菜单模板区域 -->
        <template slot="title">
            <!-- 图标 -->
          <i :class="iconlists[item.id]"></i>
          <span>{{item.authName}}</span>
        </template> 
        <!-- 二级菜单 -->
        <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id">
           <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <span>{{subItem.authName}}</span>
        </template> 

        </el-menu-item>
      </el-submenu>
    
    </el-menu>
      </el-aside>
      <!-- 右侧布局 -->
      <el-main>
          <router-view></router-view>
      </el-main>
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
         iconlists:{
             125:'iconfont icon-user',
             103:'iconfont icon-tijikongjian',
             101:'iconfont icon-shangpin',
             102:'iconfont icon-danju',
             145:'iconfont icon-baobiao'
         },
         show:false
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
    },
    isShow(){
      this.show = !this.show
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
    .el-menu {
        border:0px;
    }
}
.el-main{
    background: #eaedf1;
}
.container{
    height: 100%;
}
.iconfont{
    margin-right: 10px;
}
.toggle-button{
    line-height: 24px;
    color: #fff;
    font-size: 10px;
    background: #4a5064;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>