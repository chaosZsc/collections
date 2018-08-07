<template>
  <div class="spinner" :style="{ height: `${containerHeight}px` }">
    <div class="spinner-rect" :style="rectStyle" />
    <div class="spinner-rect" :style="rectStyle" />
    <div class="spinner-rect" :style="rectStyle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const Spinner = Vue.extend({
  name: 'Spinner',

  props: {
    size: {
      type: Number,
      default: 16
    }
  },

  computed: {
    rectStyle (): { width: string, height: string } {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },

    containerHeight (): number {
      const el = document.querySelector('.el-main')
      return el ? el.getBoundingClientRect().height - 40 : 600
    }
  }
})

export default Spinner
</script>

<style lang="scss" scoped>
.spinner {
  box-sizing: border-box;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: $color-logo;
  &-rect {
    background-color: $color-logo;
    background-color: currentColor;
    width: 16px;
    height: 16px;
    margin: 2px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: spinner-bounce 1.2s ease-in-out 0s infinite both;
    animation: spinner-bounce 1.2s ease-in-out 0s infinite both;
    &:nth-child(1) {
      -webkit-animation-delay: -.32s;
      animation-delay: -.32s;
    }

    &:nth-child(2) {
      -webkit-animation-delay: -.16s;
      animation-delay: -.16s;
    }
  }
}

@keyframes spinner-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}

@-webkit-keyframes spinner-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
