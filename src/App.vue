<template>
  <div id="app">
    <el-row class="homeHead">
        <el-col :span="8" class="logoBox">
          <span><img class="headLogo" src="./assets/home/DF LOGO.png"></span>
        </el-col>
       <el-col :span="14" class="headTitle">
          <el-col :span="6" class="titleBox" @click.native="toHome">首页</el-col>
          <el-col :span="6" class="titleBox" @click.native="toCloth">商品详情</el-col>
          <el-col :span="6" class="titleBox" @click.native="toAbout">关于我们</el-col>
          <el-col :span="6" class="titleBox">服装介绍</el-col>
       </el-col>
    </el-row> 

   <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      
    }

  },
  methods:{
    toHome:function () {
      this.$router.push({path:"/"})
    },
    toCloth:function () {
      this.$router.push({path:"/Cloth"})   
    },
    toAbout:function () {
      this.$router.push({path:"/About"})
    }
  }
}
</script>

<style>
  @import "./App.css"
</style>
