<template>
  <div v-if="data">
    <div
      class="w-full flex justify-center pt-24 h-screen max-h-screen bg-zinc-200"
    >
      <div class="flex flex-col w-full px-40">
        <div class="flex flex-col space-y-2">
          <div class="text-5xl font-1 text-center my-5 flex justify-start">
            <v-btn
              @click="() => router.go(-1)"
              class="rounded-full bg-zinc-800 text-white"
              size="x-large"
              ><v-icon>mdi-arrow-left</v-icon></v-btn
            >
          </div>

          <v-card>
            <v-toolbar color="secondary">
              <v-btn variant="text" icon="mdi-menu"></v-btn>

              <v-toolbar-title>
                <div class="text-5xl font-1 r">
                  {{ data?.title }}
                </div>
              </v-toolbar-title>

              <v-spacer></v-spacer>

             

              <v-btn variant="text" icon="mdi-view-module"></v-btn>
            </v-toolbar>

            <v-list lines="two">
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="grey-lighten-1">
                    <v-icon color="white">mdi-email</v-icon>
                  </v-avatar>
                </template>

                <div class="card">
                  <div class="card-label font-1">Email</div>
                  <div class="card-value font-2">{{ data.email }}</div>
                </div>

                <template v-slot:append>
                  <v-btn
                    color="grey-lighten-1"
                    icon="mdi-clipboard"
                    variant="text"
                    @click="copyToClipboard(data.email)"
                  ></v-btn>
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="grey-lighten-1">
                    <v-icon color="white">mdi-lock</v-icon>
                  </v-avatar>
                </template>

                <div class="password-card relative">
                  <div class="card-label font-1">Password</div>
                  <div
                    class="card-value text-center items-center flex font-bold"
                    v-if="!revealPassword"
                  >
                    ******
                  </div>
                  <div class="card-value font-2" v-else>
                    {{ data.password }}
                  </div>
                </div>

                <template v-slot:append>
                  <v-btn
                    @click="toggleRevealPassword"
                    color="grey lighten-1"
                    :icon="!revealPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    variant="text"
                  ></v-btn>
                </template>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="grey-lighten-1">
                    <v-icon color="white">mdi-web</v-icon>
                  </v-avatar>
                </template>

                <div class="card">
                  <div class="card-label font-1">Website</div>
                  <div class="card-value font-2">{{ data.website }}</div>
                </div>

                <template v-slot:append>
                  <v-btn
                    color="grey-lighten-1"
                    icon="mdi-clipboard"
                    variant="text"
                    @click="copyToClipboard(data.email)"
                  ></v-btn>
                </template>
              </v-list-item>

              <v-divider inset></v-divider>
            </v-list>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { data } = await useFetch(`/api/passwords/${route.params.id}`);
const revealPassword = ref(false);
import { subtle, randomUUID, getRandomValues } from "uncrypto";


function toggleRevealPassword() {
  revealPassword.value = !revealPassword.value;
}



function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}






</script>

<style lang="scss" scoped>
.card-container {
  @apply shadow bg-white rounded-md w-full;
}
.card {
  @apply p-2 flex  space-x-2 border-b py-4 hover:bg-zinc-100 transition-all duration-200;
}
.password-card {
  @apply p-2 flex  space-x-2 border-b py-4 hover:bg-zinc-100 transition-all duration-200;

  &:hover {
    button {
      display: inline;
    }
  }
}
.card-label {
  @apply w-1/4  font-medium text-sm text-zinc-500;
}
.card-value {
  @apply w-3/4 text-start text-sm;
}
</style>
