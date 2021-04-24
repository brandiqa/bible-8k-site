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
        requires time, deliberation and meditation. The works produced by this
        project will simply be a study resource for anyone wishing to learn
        about Christianity.
      </p>
    </div>

    <hr />

    <div class="py-8 alt">
      <div class="content">
        <h2 class="title">Plan</h2>
        <p class="text-lg text-gray-900">
          <span class="font-bold">STEP 1:</span> We need to
          <span class="font-bold">find volunteers</span> who would be interested
          in
          <span class="font-bold">
            <a
              href="https://www.investopedia.com/terms/b/bootstrap.asp"
              target="_blank"
              rel="nofollow noreferrer"
            >
              bootstrapping
            </a>
          </span>
          this project and making it a <span class="font-bold">reality</span>.
        </p>
        <p class="text-lg text-gray-900">
          <span class="font-bold">STEP 2:</span> Develop an
          <span class="font-bold">animation pipeline</span> suitable for
          <span class="font-bold">remote production teams</span> by working on
          <span class="font-bold">animated short films</span>.
        </p>
        <p class="ml-4 text-gray-700 font=semibold">
          By working on multiple animated shorts, the newly formed team will be
          able level up their skills in preparation for achieving high
          production values when developing and producing the animated Bible
          series.
        </p>
        <p class="text-lg text-gray-900">
          <span class="font-bold">STEP 3:</span> Build an
          <span class="font-bold">online community of fans</span> that would
          benefit from watching the upcoming
          <span class="font-bold">animated Bible series</span> for young adults.
        </p>
      </div>
    </div>

    <div class="py-8 content">
      <h2 class="title">Funding</h2>
      <h3 class="subtitle">
        The main source of funding we'll look at is
        <span class="font-bold text-lime-400">crowdfunding</span>.
      </h3>
      <p>
        For film makers, crowdfunding is probably the best way to raise funds
        that guarantees freedom of creativity without interference from
        investors and institutions.
      </p>
      <p>
        By building and engaging with a community early, we hope to deliver
        content that speaks to the minds and hearts of our audiences.
      </p>
      <p>
        Plans for crowdfunding will be revealed once all
        <span class="italic font-semibold text-white">3 STEPS in the PLAN</span>
        have been attained.
      </p>
    </div>
  </div>

  <hr />

  <div class="py-8 alt">
    <div class="text-center content">
      <h2 class="title">Want to Participate?</h2>
      <p class="text-xl text-gray-900">
        If you would like to get involved in this project in any way, you can
        send me an email directly by clicking the button below.
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
  @apply my-12 w-1/3 mx-auto;
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
