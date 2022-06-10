<template>
  <!-- <header>
    <navbar />
  </header> -->
  <main class="flex-grow">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './App.css'
// import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    // Navbar,
    Footer,
  },
})
</script>
