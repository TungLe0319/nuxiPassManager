<template>
  <div class="side-bar-container flex flex-col justify-between">
    <div class="">
      <AuthLogin />
      <div class="flex flex-col font-1">
        <v-item-group selected-class="bg-emerald-400">
          <v-container>
            <v-row>
              <v-col class="!p-0" cols="12">
                
                <nuxt-link to="/passwords">
                  <v-item v-slot="{ isSelected, selectedClass, toggle }">
                    <v-card
                      :class="['d-flex align-center', selectedClass]"
                      dark
                      flat
                      rounded="0"
                      @click="toggle"
                    >
                      <div
                        class="font-1 p-1 w-full flex items-center space-x-3"
                      >
                        <v-icon
                          icon="mdi-lock"
                          :class="isSelected ? 'text-white' : ' text-zinc-500'"
                        ></v-icon>
                        <span> Passwords</span>
                      </div>
                    </v-card>
                  </v-item>
                </nuxt-link>
              </v-col>

              <v-col class="!p-0" cols="12">
                <nuxt-link to="/">
                  <v-item v-slot="{ isSelected, selectedClass, toggle }">
                    <v-card
                      :class="['d-flex align-center', selectedClass]"
                      dark
                      flat
                      rounded="0"
                      @click="toggle"
                    >
                      <div
                        class="font-1 p-1 w-full flex items-center space-x-3"
                      >
                        <v-icon
                          icon="mdi-home"
                          :class="isSelected ? 'text-white' : ' text-zinc-500'"
                        ></v-icon>
                        <span> Home</span>
                      </div>
                    </v-card>
                  </v-item>
                </nuxt-link>
              </v-col>

              <hr class="bg-black my-3 w-full" />

              <div class="font-1 text-sm text-zinc-500 mb-3">Folders</div>

              <v-col class="!p-0" cols="12" v-for="f in folders" :key="f?.id">
                <nuxt-link to="/">
                  <v-item v-slot="{ isSelected, selectedClass, toggle }">
                    <v-card
                      :class="['d-flex align-center', selectedClass]"
                      dark
                      flat
                      rounded="0"
                      @click="toggle"
                    >
                      <div
                        class="font-1 p-1 w-full flex items-center space-x-3"
                      >
                        <v-icon
                          icon="mdi-folder"
                          :class="isSelected ? 'text-white' : ' text-zinc-500'"
                        ></v-icon>
                        <span> {{ f.id }}</span>
                      </div>
                    </v-card>
                  </v-item>
                </nuxt-link>
              </v-col>
            </v-row>
            
          </v-container>
        </v-item-group>
        
      </div>
    </div>


    
          <div class="pa-2">
            <v-btn block class="bg-zinc-800 text-white">
              Logout
            </v-btn>
          </div>
       
  </div>
</template>
<script setup lang="ts">
import AuthLogin from "./AuthLogin.vue";
const data = await useFetch("/api/folders/get");
const folders = data.data.value;
</script>

<style lang="scss" scoped>
.side-bar-container {
  @apply max-h-screen h-screen border-r-2;
}
</style>
