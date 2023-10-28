<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>

<template>
  <div>
    <div v-if="!session?.user">
      <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
      <button @click="signIn(`google`)">JS Sign In</button>
      <button @click="signOut()">Sign Out</button>
    </div>
<div class=" p-2" v-else>
<div class="flex items-center justify-center space-x-2 ">
    <v-avatar>
      <v-img
       :src="session?.user?.image"
        alt="John"
      ></v-img>
    </v-avatar>

    <span class=" truncate">{{ session.user.email }}</span>

</div>
    <div class=" flex items-center justify-center">
       <v-icon icon="mdi-lock" color="black"></v-icon>
      <span>{{status}}</span></div>
     
</div>


  </div>
</template>
