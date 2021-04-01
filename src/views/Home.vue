<template>
  <header>
    <div class="container mx-auto lg:w-screen-md px-8 text-white">
      <h1 class="text-3xl md:text-4xl font-semibold">
        Hi! My name is <span class="text-cyan-400">Michael</span>,
      </h1>
      <p class="text-lg mt-2">
        Am working on creating
        <span class="text-lime-400">cinematically beautiful</span> animated
        series on
        <span class="text-teal-400 font-semibold">Bible stories</span>
      </p>
    </div>
  </header>
  <div class="container mx-auto p-4 lg:w-screen-md">
    <div class="blok">
      <h2 class="title">Why</h2>
      <p>
        Bible stories are fundamental to our growth as Christians. While we can
        read the Bible at any time, I believe its more profound if we can watch
        them through our television screens and cinema theatres.
      </p>
      <p>
        The level of computer graphic technology available to us today has
        improved dramatically over the last decade. We can now re-create ancient
        worlds and bring to life stories with realism that we have not seen
        before.
      </p>
      <p>
        Combined with cinematic story-telling, we can deliver high quality
        Christianity content that everyone can binge watch and build their faith
        at the same time.
      </p>
    </div>
    <div class="blok">
      <h2 class="title">Goal</h2>
      <p>
        The goal is to produce
        <span class="font-bold">12 episodes </span> covering the
        <span class="font-bold">Book of Genesis</span> as accuratley as
        possible. Each episode will have an approximate runtime of 50 minutes.
        This will mark the <span class="font-bold">first season</span> of the
        show.
      </p>
      <p>
        The series will also address a number of issues often seen with
        Christian and other historical films. The series will do this by:
      </p>
      <ul class="list-square mb-4">
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
  <div class="bg-teal-400 text-center px-4 py-6">
    <div class="text-2xl font-bold text-gray-900 mb-2">Want to Join?</div>
    <div class="container mx-auto text-gray-800 text-lg">
      <p>
        If you would like to get involved in the project or just have a
        conversation, you can send me an email directly by clicking the button
        below.
      </p>
      <button
        class="mt-8 font-semibold px-6 py-2 bg-lime-500 rounded shadow-md hover:bg-lime-400 hover:text-black"
      >
        <router-link to="/contact">Reach Out</router-link>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blok {
  @apply px-4 mt-6;
  .title {
    @apply text-xl font-semibold text-white text-center mb-2;
  }
  p {
    @apply mb-4;
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
