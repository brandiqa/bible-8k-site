<template>
  <header class="py-8 bg-gray-800">
    <div class="container px-8 mx-auto mb-1 text-white lg:w-screen-md">
      <h1 class="text-3xl font-semibold md:text-4xl">
        Hi! My name is <span class="text-cyan-400">Michael</span>.
      </h1>
      <p class="mt-2 text-lg">
        Am planning on producing
        <span class="text-lime-400">
          cinematically beautiful CG animated series
        </span>
        on the <span class="font-semibold text-teal-400">Bible</span> for
        <span class="font-bold">young adults</span>.
      </p>
    </div>
  </header>
  <div>
    <div class="py-8 content">
      <h2 class="title">Why</h2>
      <h3 class="text-lg text-center text-white">
        Bible stories are fundamental to our growth as Christians. It is our
        duty to raise our future generations under
        <span class="text-lime-400">God's Word</span>.
      </h3>
      <p>
        Animation is a powerful story-telling medium that connects emotionally
        with audiences quite differently than live action films. Using modern
        art skills, dramatized acting and the latest CG &amp; audio technology,
        we can deliver an immersive, stylized presentation of events recorded in
        the Bible that occurred many years ago.
      </p>
      <p>
        As 21st century artists, we have the ability to richly re-create ancient
        worlds and to re-imagine historical figures in order to provide a visual
        and auditory context for the written scripture. Understanding the Bible
        properly requires you to read from the start till the last book.
      </p>
      <p>
        Using CG technology, we can develop the context necessary to understand
        the environment and challenges faced by people during those historical
        times. This hopefully will allow us Christians to make sense of many of
        the scriptures that are unfamiliar to us.
      </p>
    </div>

    <hr />

    <div class="py-8 alt">
      <div class="content">
        <h2 class="title">Plan</h2>
        <ul class="mt-4 text-lg">
          <li>
            1. Get <span class="font-bold">training</span> in
            <span class="font-semibold"
              >film editing, script writing, storyboarding</span
            >
            and <span class="font-semibold">developing animatics</span>
          </li>
          <li>
            2. <span class="font-bold">Network</span> with like-minded artists
          </li>
          <li>
            3. Start a <span class="font-bold">blog</span> to keep
            <span class="font-semibold">track of progress</span>
          </li>
          <li>
            4. <span class="font-bold">Update plan</span> once the necessary
            skills have been acquired
          </li>
        </ul>
      </div>
    </div>

    <div class="py-8 content">
      <h2 class="title">Funding</h2>
      <h3 class="subtitle">
        The main source of funding being considered for will be
        <span class="font-bold text-lime-400">crowdfunding</span>.
      </h3>
      <p>
        For film makers, crowdfunding is probably the best way to raise funds
        that guarantees freedom of creativity without interference from
        investors and institutions.
      </p>
      <p>
        By building and engaging with a community early, we can deliver content
        that speaks to the minds and hearts of our audiences.
      </p>
      <p>
        Plans for crowdfunding will be developed once there's a guarantee that
        the required
        <span class="italic font-semibold text-white"
          >quality standards and production values</span
        >
        for the project can be achieved.
      </p>
    </div>
  </div>

  <hr />

  <div class="py-8 alt">
    <div class="text-center content">
      <h2 class="title">Want to Participate?</h2>
      <p class="text-xl text-gray-900">
        If you would like to get involved in this project in any way, you can
        connect with me via email directly by clicking the button below.
      </p>
      <button
        class="mt-8 bg-gray-900 btn text-lime-400 hover:bg-lime-500 hover:text-gray-900"
      >
        <router-link to="/contact">Connect with Michael</router-link>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  @apply mb-8 w-1/3 mx-auto;
}

.content {
  @apply container mx-auto md:w-screen-md px-4;
  .title {
    @apply text-2xl font-bold text-white text-center;
  }
  .subtitle {
    @apply text-lg text-center;
  }
  p,
  h3 {
    @apply mt-4;
  }
}

.alt {
  @apply bg-teal-400 text-gray-800;
  .title {
    @apply text-gray-900;
  }
}

li {
  @apply ml-8;
}
</style>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `Bible in 8K`,
      description: `Bible stories are fundamental to our growth as Christians. The Bible in 8K is a project set on creating cinematically beautiful CG animated series on the Bible for young adults.  We intend to produce and deliver an episodic series with high production values supporting multiple languages.`,
      keywords: `animated bible stories, cg bible stories, bible in 8k`,
      url: `https://bible-8k-site.pages.dev/`,
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
          name: `keywords`,
          content: computed(() => siteData.keywords),
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
