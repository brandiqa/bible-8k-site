<template>
  <header class="py-8 bg-gray-800">
    <div class="container px-8 mx-auto mb-1 text-white lg:w-screen-md">
      <h1 class="text-3xl font-semibold md:text-4xl">
        Hi! My name is <span class="text-cyan-400">Michael</span>.
      </h1>
      <p class="mt-2 text-lg">
        Am working on independently producing a
        <span class="text-lime-400"
          >cinematic beautiful 3D animated series</span
        >
        on <span class="font-semibold text-teal-400">Bible stories</span> for
        mature audiences.
      </p>
    </div>
  </header>
  <div class="container p-4 mx-auto lg:w-screen-md">
    <div class="blok">
      <h2 class="title">Why</h2>
      <p class="text-lg text-center text-white">
        To create a <span class="font-semibold">binge-worthy</span> Christian
        show than can help
        <span class="font-semibold">strengthen our faith</span> further.
      </p>
      <p>
        For too long, Christian films have taken a backseat in creativity and
        originality. This project aims to re-tell Bible stories in a fresh, new
        way never seen before, starting with the
        <span class="font-semibold text-cyan-400">Book of Genesis!</span>
      </p>
      <p>
        Animation is a powerful medium for story-telling using artistic and
        creative expressions that can't often isn't seen with live-action film
      </p>
      <p>
        Digital artists today are able to re-create ancient kingdoms in stunning
        detail
      </p>
      <p>Real-time rendering technology allows</p>
      <p>
        If you were to read the Book of Genesis in one sitting, you probably can
        be done with it under 4 hours. However, without taking the time to
        reflect and meditate, the stories won't have any meaning for you. By
        animating the Bible into a series, we can expand the stories into
        lengthy meaningful episodes that you can connect with.
      </p>
      <p>
        The Computer Graphics Technology we have access today is more powerful
        and feature-rich than what was available just a few years ago. Together
        with incredible writers, artists, actors, composers, singers and sound
        engineers, we can re-imagine ancient worlds and characters with
        magnificent realism, detail and immersion.
      </p>
      <p class="text-lg text-white">
        Bible stories are fundamental to our growth as Christians. It is our
        duty to spread <span class="text-lime-400">God's Word</span> across the
        world to our current and future generations.
      </p>
    </div>

    <hr />

    <div class="blok">
      <h2 class="title">Plan</h2>
      <p>
        Build multiple remote teams that can work across continents to make this
        series a reality
      </p>
      <p>
        The goal is to produce
        <span class="font-bold">12 episodes </span> covering the
        <span class="font-bold">Book of Genesis</span> as accuratley as
        possible. Each episode will have an approximate runtime of 50 minutes.
        This will mark the <span class="font-bold">first season</span> of the
        show.
      </p>
      <h2 class="title">Story Development</h2>
      <p>
        The series will also address a number of issues often seen with
        Christian and other historical films. The series will do this by:
      </p>
      <ul class="mb-4 list-square">
        <li>Introducing diversity in main characters</li>
        <li>
          Re-creating ancient environments that are green and flowing(not always
          desert like)
        </li>
        <li>Potraying architectural buildings and statues that are colorful</li>
        <li>
          Re-imagining structures made of wood and fabric that turned to dust
          long ago
        </li>
      </ul>
    </div>

    <hr />

    <div class="blok">
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
  @apply my-12 w-3/4 mx-auto;
}
.blok {
  @apply px-4;
  .title {
    @apply text-2xl font-bold text-white text-center;
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
