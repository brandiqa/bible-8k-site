<template>
  <page-header
    title="Contact"
    subtitle="React out if you would like to participate or discuss about the project."
  />
  <div class="container px-8 mx-auto my-12">
    <contact-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import PageHeader from '../components/PageHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    ContactForm,
    PageHeader,
  },
})
</script>
