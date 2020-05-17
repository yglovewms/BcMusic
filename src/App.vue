<template>
  <div id="app">
<!--    <nav-menu><home></home></nav-menu>-->
<!--    <AuthorizationResult></AuthorizationResult>-->
  </div>
</template>

<script>
  import NavMenu from "./components/navmenu/NavMenu";
  import Home from "./view/Home";
  import AuthorizationSearch from "./components/authorization/AuthorizationSearch";
  import AuthorizationResult from "./components/authorization/AuthorizationResult";
export default {
  name: 'App',
  components:{
    // AuthorizationResult,
    // AuthorizationSearch,
    // NavMenu,
    // Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
