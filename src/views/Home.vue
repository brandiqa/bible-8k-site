<template>
  <div class="mt-96 flex flex-col justify-center items-center space-y-4">
    <h1 class="font-black text-white text-7xl">Project Cancelled</h1>
    <a
      class="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
      href="https://www.lighthousetrailsresearch.com/blog/?p=34462"
      target="_blank"
      rel="nofollow"
    >
      See why
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `Bible in 8K`,
      description: `This project has been cancelled.`,
      url: `https://www.biblein8k.com`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: computed(() => siteData.url),
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: computed(() => siteData.description),
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: '',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: computed(() => siteData.url),
        },
      ],
    })
  },
})
</script>
