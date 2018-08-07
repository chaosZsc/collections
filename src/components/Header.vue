<template>
  <h2>{{ pathNames[path] }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
import { pathNames } from '@/store/base'
import { mapGetters } from 'vuex'

const Header = Vue.extend({
  name: 'Header',

  computed: {
    ...mapGetters({ pathNames }),

    path (): string {
      const { name } = this.$route
      return name!
    }
  }
})

export default Header
</script>

<style lang="scss" scoped>
h2 {
  font-size: 24px;
  line-height: 70px;
  font-weight: normal;
}
</style>
