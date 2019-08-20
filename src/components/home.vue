<template>
  <div id="home">
    <!-- <el-carousel :interval="5000" height="7rem" arrow="always">
      <el-carousel-item v-for="(img,index) in carousel" :key="index">
        <img v-bind:src="img.url">
      </el-carousel-item>
    </el-carousel> -->
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_02.jpg" alt=""></el-col>
    </el-row>
     <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_03.jpg" alt=""></el-col>
    </el-row>
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_05.jpg" alt=""></el-col>
    </el-row>
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_07.jpg" alt=""></el-col>
    </el-row>
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_08.jpg" alt=""></el-col>
    </el-row>
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_11.jpg" alt=""></el-col>
    </el-row>
      <el-row class="productInfo">
        <el-col :span="24" style="position:relative;">
          <div class="changeImg" ref="changeBox1" @click="changeImg"></div>
          <div class="changeImg2" ref="changeBox2" @click="changeImg"></div>
          <img src="../assets/home/web_12.jpg" alt="">
          <img v-if="isChange" class="lunbo1" src="../assets/home/lunbo1.png" alt="">
          <img v-if="!isChange" class="lunbo2" src="../assets/home/lunbo2.png" alt="">
        </el-col>

    </el-row>
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_13.jpg" alt=""></el-col>
    </el-row>
    <el-row class="productInfo">
        <el-col :span="24"><img src="../assets/home/web_14.jpg" alt=""></el-col>
    </el-row>
    <el-row class="clothBottom">
         <div>
            服务热线：13636261118           
        </div>
        <div>
          销售电话：13636261118马经理、13035270335王经理
        </div>
        <div>
          QQ：1427058783
        </div>
        <div>
          传真:（0719）-8026373
        </div>
        <div>
           邮箱:1427058783@qq.com
        </div>
        <div>
          地址：湖北省十堰市张湾区友谊巷8号（宏福公寓铁道边）
        </div>
    </el-row>
  </div> 

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      carousel:[
        {url:require('../assets/home/web_02.jpg')},
        {url:require('../assets/home/lunbo1.png')},
        {url:require('../assets/home/lunbo2.png')}
      ],
      isChange:true
    }
  },
  methods:{
    changeImg:function(){
      if(this.isChange){
          this.isChange = false;

          this.$refs.changeBox2.style.background = "white"
          this.$refs.changeBox1.style.background = "#9699AE"
          return;
      }
       if(!this.isChange){
          this.isChange = true;
          this.$refs.changeBox1.style.background = "white"
          this.$refs.changeBox2.style.background = "#9699AE"
          return;
      }
      
    }
  }
}
</script>


<style>
@import "../components/home.css";
</style>
