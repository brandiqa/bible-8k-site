<template>
  <h1>Contact</h1>
  <contact-form />
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
