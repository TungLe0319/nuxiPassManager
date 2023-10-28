<template>
  <div class="side-bar-container">
    <div class="p-2">
      <AuthLogin />
      <div class="flex flex-col font-1">
        <v-item-group selected-class="bg-orange-400">
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
                   <div class="font-1 p-1 w-full flex items-center ">
                        <v-icon
                          icon="mdi-folder"
                          :class="isSelected ? 'text-white' : ' text-zinc-500'"
                        ></v-icon>
                        Passwords
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
                      <div class="font-1 p-1 w-full flex items-center ">
                        <v-icon
                          icon="mdi-home"
                          :class="isSelected ? 'text-white' : ' text-zinc-500'"
                        ></v-icon>
                        Home
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
  </div>
</template>
<script setup lang="ts">
import AuthLogin from "./AuthLogin.vue";

</script>

<style lang="scss" scoped>
.side-bar-container {
  @apply max-h-screen h-screen border-r-2;
}
</style>
