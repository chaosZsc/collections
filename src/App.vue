<template>
  <div id="app">
    <el-container id="container">
      <SideBar />

      <el-container>
        <el-header style="height: 70px">
          header
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '@/components/SideBar.vue'

export default Vue.extend({
  components: {
    SideBar
  }
})
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#container {
  height: 100vh;
  min-width: 1000px;
  margin: 0 auto;
  // .el-aside {
  //   height: 100vh;
  //   background-color: #dce2f1;
  // }
  // .el-menu {
  //   border: none;
  //   &-item {
  //     a {
  //       display: block;
  //       padding: 0 20px;
  //     }
  //   }
  //   .is-active {
  //     background-color: #ffffff;
  //   }
  // }
}
</style>
