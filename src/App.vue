<template>
  <div class="bg-blue-900 text-white p-8">
    <h1 class="text-xl font-semibold">Hello, I am Michael</h1>
  </div>
  <ContactForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from './components/ContactForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    ContactForm,
  },
})
</script>
