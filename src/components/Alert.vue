<template>
  <div
    class="flex justify-between p-2 my-4 rounded-md border-l-6"
    :class="classes"
  >
    <span class="p-1">
      <span class="font-bold"> {{ title }} :</span> {{ message }}
    </span>
    <button class="p-1 rounded-md" v-on:click="dismiss">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>
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
  data() {
    return {
      classes: this.type,
    }
  },
  methods: {
    dismiss() {
      this.classes = `${this.type} hidden`
    },
  },
})
</script>

<style scoped>
.error {
  @apply text-red-800 bg-red-100 border-red-700;
}

.error button {
  @apply hover:bg-red-200;
}

.info {
  @apply text-cyan-800 bg-cyan-100 border-cyan-600;
}

.success {
  @apply text-lime-800 bg-lime-100 border-lime-700;
}
</style>
