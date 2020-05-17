<template>
  <!--放在data里面不行？-->
  <div id="app">
<!--    &lt;!&ndash;图片&ndash;&gt;-->
<!--    <div class="demo-image">-->
<!--      <el-image-->
<!--        style="width: 100%; height: 100%"-->
<!--        :src="img_01"-->
<!--        fit="fill"></el-image>-->
<!--    </div>-->
<!--    &lt;!&ndash;音乐授权查询选择框 margin:上，又，下，左&ndash;&gt;-->
<!--    <div class="" style="margin: 0 auto;">-->
<!--      <img :src="img_search" alt="" style="width: 100px;height: 150px;display: inline-block;vertical-align: middle;border:solid 10px #f00;">-->
<!--      <span style="font-family:Georgia,serif;font-size: 70px;display: inline-block;border:solid 10px #f00;margin: 50px;padding: 30px 0px">音乐授权信息查询</span>-->
<!--    </div>-->
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <img :src="img_01" >
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <!--flex可以让其不换行-->
        <!--两个用于居中-->
        <div class="grid-content-1 bg-purple" style="display: flex;align-items: center;justify-content: center">
          <div><img :src="img_search"></div>
          <div style="font-size: 100px;">音乐信息授权查询</div>
        </div>
      </el-col>
    </el-row>

    <!--左右间隔20-->
    <!--搜索框-->
    <el-row :gutter="10">
      <el-col :span="6" offset="1">
        <div class="grid-content-1 bg-purple">

        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content-1 bg-purple nav" style="background-color: red;display: flex">
<!--          <el-input v-model="song" placeholder="请输入歌曲名字" size="medium" style="width: 80%"></el-input>-->
          <input type="text" style="width: 80px;height: 80px">
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content-1 bg-purple"></div></el-col>
      <el-col :span="3" offset="1">
        <div class="grid-content-1 bg-purple">
          <el-button type="primary" icon="el-icon-search" style="width: 100%;height: 100%">搜索</el-button>
        </div>
      </el-col>
    </el-row>

    <!--为您提供-->
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content-1 bg-purple" style="display: flex;align-items: center;justify-content: center">
          <div style="font-size: 70px;">为您提供</div>
          <i class="el-icon-bottom" style="font-size: 70px"></i>
        </div>
      </el-col>
    </el-row>
<!--01-->
    <el-row :gutter="5">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div style="font-size: 120px;color: #f9a7a7;padding-top: 8%;padding-left: 20%;text-align: left">版权交易</div>
          <div style="font-size: 60px;margin-top: 5%;padding-left: 20%">
            <p align="left">介绍一下版权交易的功能是什么。强调意义</p>
            <p align="left">购买有哪些类型<p>
            <p align="left">说明该功能的作用，提供的便利，</p>
            <p align="left">强调意义</p>
          </div>
          <div style="margin-top: 5%;text-align: left;padding-left: 20%">
            <el-button style="width: 600px;height: 200px;font-size: 80px;color: #f9a7a7;">
              <i class="el-icon-right" style="font-size: 90px"></i>进入市场
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <img :src="img_02" alt="" style="width: 100%;height: 100%">
        </div>
      </el-col>
    </el-row>

    <!--02-->
    <el-row :gutter="5">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <img :src="img_02" alt="" style="width: 100%;height: 100%">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div style="font-size: 120px;color: #f9a7a7;padding-top: 8%;padding-left: 20%;text-align: left">版权交易</div>
          <div style="font-size: 60px;margin-top: 5%;padding-left: 20%">
            <p align="left">介绍一下版权交易的功能是什么。强调意义</p>
            <p align="left">购买有哪些类型<p>
            <p align="left">说明该功能的作用，提供的便利，</p>
            <p align="left">强调意义</p>
          </div>
          <div style="margin-top: 5%;text-align: left;padding-left: 20%">
            <el-button style="width: 600px;height: 200px;font-size: 80px;color: #f9a7a7;">
              <i class="el-icon-right" style="font-size: 90px"></i>进入市场
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--03-->
    <el-row :gutter="5">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div style="font-size: 120px;color: #f9a7a7;padding-top: 8%;padding-left: 20%;text-align: left">版权交易</div>
          <div style="font-size: 60px;margin-top: 5%;padding-left: 20%">
            <p align="left">介绍一下版权交易的功能是什么。强调意义</p>
            <p align="left">购买有哪些类型<p>
            <p align="left">说明该功能的作用，提供的便利，</p>
            <p align="left">强调意义</p>
          </div>
          <div style="margin-top: 5%;text-align: left;padding-left: 20%">
            <el-button style="width: 600px;height: 200px;font-size: 80px;color: #f9a7a7;">
              <i class="el-icon-right" style="font-size: 90px"></i>进入市场
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <img :src="img_02" alt="" style="width: 100%;height: 100%">
        </div>
      </el-col>
    </el-row>


    <!--04-->
    <el-row :gutter="5">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <img :src="img_02" alt="" style="width: 100%;height: 100%">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div style="font-size: 120px;color: #f9a7a7;padding-top: 8%;padding-left: 20%;text-align: left">版权交易</div>
          <div style="font-size: 60px;margin-top: 5%;padding-left: 20%">
            <p align="left">介绍一下版权交易的功能是什么。强调意义</p>
            <p align="left">购买有哪些类型<p>
            <p align="left">说明该功能的作用，提供的便利，</p>
            <p align="left">强调意义</p>
          </div>
          <div style="margin-top: 5%;text-align: left;padding-left: 20%">
            <el-button style="width: 600px;height: 200px;font-size: 80px;color: #f9a7a7;">
              <i class="el-icon-right" style="font-size: 90px"></i>进入市场
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>


    <el-row :gutter="5">
      <el-col :span="24">
        <div class="grid-content bg-purple" style="font-size: 60px">
          <p>公司地址：广东省广州市番禺区华南理工大学</p>
          <p>联系方式：110</p>
          <p>2020华南理工大学ibm实验室区块链组</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        /*不加无法访问*/
        img_01: require("../assets/img/home/01.jpg"),
        img_search: require("../assets/img/home/search.svg"),
        img_02: require("../assets/img/home/02.jpg"),
        song:'',
        author:'',
        user:'',
      }
    }
  }
</script>

<style scoped>
  /*间隔*/
  .el-row {
    margin-bottom: 20px;
  /*&:last-child {*/
  /*   margin-bottom: 0;*/
  /* }*/
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /*弧度*/
    border-radius: 10px;
    /*高度*/
    min-height: 1680px;
  }
  .grid-content-1{
    /*弧度*/
    border-radius: 10px;
    /*高度*/
    min-height: 300px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
