<template>
  <div class="container mx-auto px-8">
    <h1 class="text-white font-bold- text-4xl">Contact</h1>
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
