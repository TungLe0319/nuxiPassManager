<template>
<div class=" hero-image" >
  <div class=" text-5xl font-1 font-bold text-center py-10">
    WELCOME TO OUR NORDPASS CLONE
  </div>


  <v-sheet
    border="md"
    class="pa-6  mx-auto"
    
    max-width="800"
  >
    <h4 class="text-h5 font-weight-bold mb-4">Your Privacy</h4>

    <p class="mb-8">
      This app determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).

      <br>
      <br>

      Please read our <a href="#" class="text-red-accent-2">Privacy Policy</a> to learn about our privacy practices or click "Your Preferences" to exercise control over your data.
    </p>

  
  </v-sheet>

</div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'NordPass Clone - Secure Password Management',
  description: 'Manage and secure your passwords with the NordPass Clone. Keep your online accounts safe and easily accessible.',
  ogTitle: 'NordPass Clone - Secure Password Management',
  ogDescription: 'Safeguard your passwords and simplify password management with the NordPass Clone.',
  ogImage: '/og-image.png', // Provide the URL of your Open Graph image
  ogUrl: 'https://www.example.com/nordpass-clone', // Your application's URL
  twitterTitle: 'NordPass Clone - Password Security and Management',
  twitterDescription: 'Protect your passwords and simplify password management with the NordPass Clone.',
  twitterImage: '/twitter-image.png', // Provide the URL of your Twitter Card image
  twitterCard: 'summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png', // Your application's favicon
    }
  ]
});

</script>

<style>
.hero-image{
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed; 
}


</style>


