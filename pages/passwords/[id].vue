<template>
  <div>
   
   {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/passwords')

</script>