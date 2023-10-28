<template>
  <div class="">
    <div class="flex justify-between w-full p-2">
      <p class="text-3xl font-1 font-semibold p-2">Passwords</p>
      <NuxtLink to="/passwords/create">
      
           <v-btn block rounded="xl" size="x-large" class="!bg-zinc-800 text-white">Add Password</v-btn>
      </NuxtLink>
    </div>

<v-divider
  :thickness="5"
  class="border-opacity-100 mt-2"

></v-divider>
    <v-list>
    
      <v-list-item v-for="p in passwords" :key="p.title" class="!p-0 !m-0">
        <Nuxt-link :to="`/passwords/${p.id}`">
          <v-btn block rounded="0" size="x-large" class="!justify-between !p-8">
            <div class="flex space-x-2 items-center">
              <v-avatar color="grey-lighten-1">
                <v-icon color="white">mdi-folder</v-icon>
              </v-avatar>
              <span class="font-1"> {{ p.title }}</span>
            </div>
          </v-btn>
        </Nuxt-link>
      </v-list-item>
    </v-list>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/passwords/get");
const passwords = data?.value;
</script>

<style></style>
