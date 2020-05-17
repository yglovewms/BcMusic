<template>
  <div>
    <div id="nav-menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#e4e4e4"
        text-color="#333333"
        active-text-color="#f9a7a7">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2" >版权交易</el-menu-item>
        <el-menu-item index="3" >我的音乐</el-menu-item>
        <el-menu-item index="4" >授权查询</el-menu-item>
        <el-menu-item index="5" >注册</el-menu-item>
        <el-menu-item index="6">登录</el-menu-item>
      </el-menu>
    </div>
    <div><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Navmenu",
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

  // var Ctor = Vue.extend(Main)
  // new Ctor().$mount('#app')
</script>

<style scoped>
  .el-menu-demo{
    color:#f9a7a7;
  }

</style>
