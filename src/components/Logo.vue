<template>
  <div class="logo">
    <img src="../assets/logo.png">
    <h1>Collections</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    height: 50px;
    padding: 10px 20px;
    img {
      width: 50px;
    }
    h1 {
      margin-left: 12px;
      font-size: 24px;
      font-weight: bold;
      color: $font-b1;
    }
  }
</style>
