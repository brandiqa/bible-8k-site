<template>
  <header class="py-8 bg-gray-800">
    <div class="container px-8 mx-auto mb-1 text-white">
      <h1 class="text-4xl text-white font-bold-">Contact</h1>
      <p class="mt-2 text-lg">
        React out if you would like to participate or you have any questions
      </p>
    </div>
  </header>
  <div class="container px-8 mx-auto my-12">
    <contact-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from '../components/ContactForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    ContactForm,
  },
})
</script>
