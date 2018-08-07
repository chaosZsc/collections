<template>
  <el-container>
    <el-header style="height: 70px">
      <Header />
    </el-header>

    <el-main>
      <router-view v-if="isReady" />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

const MainContainer = Vue.extend({
  name: 'MainContainer',

  components: {
    Header
  },

  data () {
    return {
      isReady: false
    }
  },

  mounted () {
    if (document.querySelector('.el-main')) this.isReady = true
  }
})

export default MainContainer
</script>

<style lang="scss" scoped>
.el {
  &-header {
    border-bottom: 1px solid $color-side;
  }

  &-main {
    overflow-y: scroll;
  }
}
</style>
