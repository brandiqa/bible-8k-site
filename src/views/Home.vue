<template>
  <header class="py-8 bg-gray-800">
    <div class="container px-8 mx-auto mb-1 text-white lg:w-screen-md">
      <h1 class="text-3xl font-semibold md:text-4xl">
        Hi! My name is <span class="text-cyan-400">Michael</span>.
      </h1>
      <p class="mt-2 text-lg">
        Am working on producing
        <span class="text-lime-400">
          cinematically beautiful CG animated series
        </span>
        on the <span class="font-semibold text-teal-400">Bible</span> for
        <span class="font-bold">young adults</span>.
      </p>
    </div>
  </header>
  <div>
    <div class="content">
      <h2 class="title">Why</h2>
      <p class="text-lg text-center text-white">
        Bible stories are fundamental to our growth as Christians. It is our
        duty raise our future generations under
        <span class="text-lime-400">God's Word</span>.
      </p>
      <p>
        Animation is a powerful story-telling medium that connects emotionally
        with audiences quite differently than live action films. Using modern
        art skills, performance acting and technology, we can deliver an
        immersive, more realistic presentation of the world that was written
        about in the Bible.
      </p>
      <p>
        As 21st century artists, we have the ability to re-create ancient worlds
        and to re-imagine historical figures in order to provide a visual
        context for the written scripture. Understanding the Bible requires time
        and meditation. The works produced by this project will simply be a form
        of Bible study for those wishing to delve further.
      </p>
    </div>

    <hr />

    <div class="alt">
      <div class="content">
        <h2 class="title">Plan</h2>
        <p class="text-gray-900 subtitle">
          The first step is to connect &amp; enlist members interested in making
          this project a
          <span class="font-bold">reality</span>.
        </p>
        <p>The following experienced and skilled personnel are needed:</p>
        <ul class="list-disc">
          <li>Animation Director</li>
          <li>Story/Script Writer</li>
          <li>Storyboard Artist</li>
          <li>Film Editor</li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="content">
      <h2 class="title">Funding</h2>
      <p>
        A crowdfunding campaign will be launched once we have a big enough
        community interested in making this project a reality. Once this goal is
        met, a budget will be prepared along with a 90 second trailer to help
        promote the production of the Bible animation series.
      </p>
    </div>
  </div>
  <div class="px-4 py-6 text-center bg-teal-400">
    <div class="mb-2 text-2xl font-bold text-gray-900">
      Want to Participate?
    </div>
    <div class="container mx-auto text-lg text-gray-800">
      <p>
        If you would like to get involved in the project or just have a
        conversation, you can send me an email directly by clicking the button
        below.
      </p>
      <button
        class="mt-8 bg-gray-900 btn text-lime-400 hover:bg-lime-500 hover:text-gray-900"
      >
        <router-link to="/contact">Reach Out</router-link>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  @apply my-12 w-1/3 mx-auto;
}
// .blok {
//   @apply p-4;
//   .title {
//     @apply text-2xl font-bold text-white text-center;
//   }
//   p {
//     @apply mt-4;
//   }
// }

.content {
  @apply container mx-auto md:w-screen-md p-4;
  .title {
    @apply text-2xl font-bold text-white text-center;
  }
  .subtitle {
    @apply text-lg text-center;
  }
  p {
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
