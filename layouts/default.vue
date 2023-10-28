<template>
  <div class="wrapper">
  <div class="side-bar">
      <SideBar></SideBar>
  </div>
  <div class="slot">
      <slot />
  </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  @apply flex w-full  max-h-screen h-screen;
}
.side-bar{
  @apply w-1/6
}
.slot{
  @apply  w-5/6
}
</style>
