<template>
  <div class="side-bar-container">
   
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>

      <v-list-item href="\" link title="Home"></v-list-item>
      <v-list-item href="\passwords\1" link title="Passwords"></v-list-item>
    
      <v-list-item link title="List Item 3"></v-list-item>
  
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.side-bar-container {
@apply  w-60 text-white bg-zinc-700 max-h-screen h-screen  pr-1.5;

  
}
</style>
