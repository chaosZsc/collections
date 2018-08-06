<template>
  <el-aside>
    <Logo />

    <el-menu
      default-active="home"
      background-color="#dce2f1"
    >
      <el-menu-item
        v-for="(item, index) in funs"
        :key="index"
        :index="item.key"
        style="padding: 0"
      >
        <router-link :to="item.path">
          <i :class="[item.icon, 'iconfont-menu']" />
          {{ item.title }}
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
import { init, indexedDBAbility, funs } from '@/store/base'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  components: {
    Logo
  },
  computed: {
    ...mapGetters({ indexedDBAbility, funs })
  },
  methods: {
    ...mapActions({ init })
  },
  mounted() {
    this.init()
  },
})
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #dce2f1;
}
.el-menu {
  border: none;
  &-item {
    a {
      display: block;
      padding: 0 20px;
    }
  }
  .is-active {
    background-color: #ffffff;
  }
}
</style>
