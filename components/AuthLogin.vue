<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>

<template>
  <div>
    <div class="p-2 justify-center items-center " v-if="!session?.user">
      <!-- <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a> -->
      <button class="font-1" @click="signIn(`google`)"> Sign In</button>
    </div>
    <div class="p-2" v-else>
      <div class="flex items-center justify-center space-x-2">
        <v-avatar>
          <v-img :src="(session?.user?.image as string)" alt="user"></v-img>
        </v-avatar>

        <span class="truncate">{{ session.user.email }}</span>
      </div>
      <div class="flex items-center justify-center">
        <v-icon icon="mdi-lock" color="black"></v-icon>
        <span>{{ status }}</span>
        
      </div>
        <button  class="font-1" @click="signOut()">Sign Out</button>
    </div>
  </div>
</template>
