<template>
  <div class="home" :style="{ height: `${containerHeight}px` }">
    <p v-if="indexedDBAbility" class="welcome">Welcome to Collections!</p>
    <p v-else class="sorry">Sorry, your browser can't support it!</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { indexedDBAbility } from '@/store/base'
import { mapGetters } from 'vuex'

const Home = Vue.extend({
  name: 'Home',

  computed: {
    ...mapGetters({ indexedDBAbility }),

    containerHeight (): number {
      const el = document.querySelector('.el-main')
      return el!.getBoundingClientRect().height - 40
    }
  }
})

export default Home
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 80px;
  }

  .welcome {
    color: $color-success;
  }

  .sorry {
    color: $font-b3;
  }
}
</style>
