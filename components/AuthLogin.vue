<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>

<template>
  <div>
    <div class=" justify-center items-center" v-if="!session?.user">
      <!-- <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a> -->
      <button class="font-1" @click="signIn(`google`)">Sign In</button>
    </div>
    <div class="p-1" v-else>
      <div class="flex flex-col items-center justify-center space-x-2">
        <v-avatar
          :image="(session?.user?.image as string)"
          alt="user"
          size="80"
          class="shadow-md"
        >
        </v-avatar>

        <span class="truncate font-1 text-sm mt-2">{{ session.user.email }}</span>
      </div>
      <div class="flex items-center justify-center my-4">
        <v-icon icon="mdi-lock"  class="text-zinc-500"></v-icon>
        <span  class="truncate font-1 text-sm mt-2">{{ status }}</span>
      </div>

      <div
    v-ripple
    class="text-center  bg-red-400 rounded-sm"
  >
   <button      class="font-1" @click="signOut()">Sign Out</button>
  </div>


    
    </div>
  </div>
</template>
