<template>
  <div class="p-4 flex justify-center items-center b h-screen">
    <form class="max-w-3xl mx-auto w-full p-5" @submit.prevent="createPassword">
      <div class="flex flex-col space-y-8">
        <div class="">
          <label for="title" class="block font-medium text-sm text-gray-700"
            >Title</label
          >
          <input
            id="title"
            type="text"
            class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="passwordData.title"
            required
          />
          <span class="test-xs mt-2 font-2">* Required</span>
        </div>

    

        <div class="">
          <label for="password" class="block font-medium text-sm text-gray-700"
            >Password</label
          >
          <input
            id="password"
            type="password"
            class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="passwordData.password"
            required
          />
        </div>

        <div class="">
          <label for="website" class="block font-medium text-sm text-gray-700"
            >Website</label
          >
          <input
            id="website"
            type="url"
            class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="passwordData.website"
            required
          />
        </div>

        <div class="">
          <label for="note" class="block font-medium text-sm text-gray-700"
            >Note</label
          >
          <textarea
            id="note"
            class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="passwordData.note"
            required
          ></textarea>
        </div>
      </div>

      <v-btn type="submit" class="mt-2 !bg-zinc-800 text-white">Submit</v-btn>
    </form>
  </div>
</template>
<script setup lang="ts">
const { session } = useAuth();
// definePageMeta({ middleware: ["auth"] });

const valid = ref(true);
const passwordData = ref({
  title: "Testing",
  password: "1234123412341324",
  website: "https://www.google.com",
  note: "PASSWORD FOR GOOGLE PLEASE",
});

async function createPassword() {
  try {
    // console.log(passwordData.value);

    const res = await useFetch("/api/passwords/post", {
      method: "post",
      body: passwordData,
    });
    console.log(res.data.value);
  } catch (error) {
    // logger.error(error)
  }
}
</script>

<style lang="scss" scoped>
input,
textarea {
  @apply shadow-md;
}
</style>
