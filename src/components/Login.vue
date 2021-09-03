<template>
   <div class="login_container"> 
       <div class="login_box">
         <div class="acatar_box">
           <img src="~assets/logo.png">
         </div>
       </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login_container{
      background: #2b4b6b;
      height: 100%;
  }
  .login_box{
    width:450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position: relative;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
      .acatar_box{
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: relative;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #eee;
          }
      }
  }
</style>