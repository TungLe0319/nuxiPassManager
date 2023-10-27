<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <slot />
  </div>
</template>

<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>

<style>

.wrapper{
  @apply flex
}
</style>
