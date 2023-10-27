<template>
  <div class="side-bar-container">
   
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item  to="\passwords\1 link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
  
  </div>
</template>
<script setup lang="ts">
const items = [
  {
    name: "Item #1",
    id: 1,
  },
  {
    name: "Item #2",
    id: 2,
  },
  {
    name: "Item #3",
    id: 3,
  },
];
</script>

<style scoped>
.side-bar-container {
  width: 25l0px;
}
</style>
