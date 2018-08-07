<template>
  <el-aside width="240px">
    <Logo />

    <el-menu
      default-active="home"
      :router="true"
    >
      <el-menu-item
        v-for="(item, index) in funs"
        :key="index"
        :index="item.key"
        :disabled="index > 0 && !indexedDBAbility"
      >
        <i :class="[item.icon, 'iconfont']" />
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
import { init, indexedDBAbility, funs } from '@/store/base'
import { mapGetters, mapActions } from 'vuex'

const SideBar = Vue.extend({
  name: 'SideBar',

  components: {
    Logo
  },

  computed: {
    ...mapGetters({ indexedDBAbility, funs })
  },

  methods: {
    ...mapActions({ init })
  },

  mounted () {
    this.init()
  }
})

export default SideBar
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: $color-side;
}

.el-menu {
  border: none;
  &-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: $color-side;
    &:hover {
      background-color: $color-logo;
    }

    span {
      margin-left: 8px;
    }
  }

  .is-active {
    background-color: #ffffff;
  }

  .is-disabled {
    background-color: $color-side !important;
  }
}
</style>
