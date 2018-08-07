<template>
  <div id="app">
    <el-container id="container">
      <SideBar />
      <MainContainer />
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '@/components/SideBar.vue'
import MainContainer from '@/components/MainContainer.vue'

const App = Vue.extend({
  name: 'App',

  components: {
    SideBar,
    MainContainer
  }
})

export default App
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
}
</style>
