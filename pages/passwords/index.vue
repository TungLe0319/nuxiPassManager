<template>
  <div class="overflow-y-scroll max-h-screen">
    <div class="flex justify-between w-full">
      <p class="text-3xl font-1 font-semibold p-2">Passwords</p>
      <NuxtLink to="/passwords/create">
        <v-btn flat rounded="0" size="large" class=" ">Add Password</v-btn>
      </NuxtLink>
    </div>

    <v-list>
      <v-list-item v-for="p in passwords" :key="p.title" class="!p-0 !m-0">
        <Nuxt-link :to="`/passwords/${p.id}`">
          <v-btn block rounded="0" size="x-large" class="!justify-between !p-8">
            <div class="flex space-x-2 items-center">
              <v-avatar color="grey-lighten-1">
                <v-icon color="white">mdi-folder</v-icon>
              </v-avatar>
              <span> {{ p.title }}</span>
            </div>
          </v-btn>
        </Nuxt-link>
      </v-list-item>
    </v-list>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/passwords/get");
const handleClick = () => {};
const passwords = data?.value;
</script>

<style></style>
