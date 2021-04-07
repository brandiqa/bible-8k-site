<template>
  <div class="p-2 my-4 rounded-sm" :class="type">
    <span class="font-bold"> {{ title }} :</span> {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Alert',
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.error {
  @apply text-red-800 bg-red-100;
}

.info {
  @apply text-cyan-800 bg-cyan-100;
}

.success {
  @apply text-lime-800 bg-lime-100;
}
</style>
