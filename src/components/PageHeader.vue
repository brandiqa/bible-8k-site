<template>
  <header class="py-8 bg-gray-800">
    <div class="container px-8 mx-auto mb-1 text-white">
      <h1 class="text-4xl text-white font-bold-">{{ title }}</h1>
      <p class="mt-2 text-lg">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    subtitle: String,
  },
})
</script>
