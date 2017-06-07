<template><!-- 里写html代码 -->
  <div id="app"><!-- 只能有一个根标签，但可嵌套 -->
   <!--  <img src="./assets/logo.png"> -->
    <router-view></router-view><!-- 路由 在router里 index.js --><!-- 默认放hello -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
