<template>
  <div>
    <h1>Hello, I am Michael</h1>
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
