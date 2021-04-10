<template>
  <page-header title="Scheduled Releases" subtitle="List of episodes" />
  <div class="container px-8 mx-auto my-12">
    <h2 class="text-2xl font-bold">Season 1 - Draft</h2>
    <ul class="mt-4">
      <li><span class="font-bold">S01E00 -</span> Prologue</li>
      <li><span class="font-bold">S01E01 -</span> Beginning of Time</li>
      <li><span class="font-bold">S01E02 -</span> Adam and Eve</li>
      <li><span class="font-bold">S01E03 -</span> Cain kills Abel</li>
      <li><span class="font-bold">S01E04 -</span> Noah's Ark</li>
      <li><span class="font-bold">S01E05 -</span> Job</li>
      <li><span class="font-bold">S01E06 -</span> Abram</li>
      <li>
        <span class="font-bold">S01E07 -</span> Destruction of Sodom and
        Gomorrah
      </li>
      <li><span class="font-bold">S01E08 -</span> Isaac</li>
      <li><span class="font-bold">S01E09 -</span> Esau and Jacob</li>
      <li><span class="font-bold">S01E10 -</span> Jacob</li>
      <li><span class="font-bold">S01E11 -</span> Joseph pt 1</li>
      <li><span class="font-bold">S01E12 -</span> Joseph pt 2</li>
    </ul>
    <p class="mt-8 text-lg text-white">
      Description per episode will be added soon
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'

export default defineComponent({
  components: { PageHeader },
  setup() {},
})
</script>
