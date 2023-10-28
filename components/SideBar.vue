<template>
  <div class="side-bar-container">
    <v-card class="mx-auto">
      <v-layout>
        <v-navigation-drawer permanent absolute>
          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              title="John Leider"
              subtitle="john@google.com"
            >
              <template v-slot:append>
                <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
              </template>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list :lines="false" density="compact" nav>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
              link
              :href="`${item.link}`"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main class="h-screen"></v-main>
      </v-layout>
    </v-card>
  </div>
</template>
<script setup lang="ts">
const items = [
  { text: "Passwords", icon: "mdi-folder", link: "passwords" },
  { text: "Shared with me", icon: "mdi-account-multiple", link: `/` },
  { text: "Starred", icon: "mdi-star", link: "" },
  { text: "Recent", icon: "mdi-history" },
  { text: "Offline", icon: "mdi-check-circle", link: "" },
  { text: "Uploads", icon: "mdi-upload" },
  { text: "Backups", icon: "mdi-cloud-upload", link: "" },
];
</script>

<style lang="scss" scoped>
.side-bar-container {
  @apply  text-white bg-zinc-700 max-h-screen h-screen;
}
</style>
