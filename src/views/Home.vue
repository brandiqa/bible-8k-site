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
    <div class="py-8 content">
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
        immersive, stylized presentation of the world that was written about in
        the Bible.
      </p>
      <p>
        As 21st century artists, we have the ability to richly re-create ancient
        worlds and to re-imagine historical figures in order to provide visual
        context for the written scripture. Understanding the Bible requires time
        and meditation. The works produced by this project will simply be a form
        of Bible study for those wishing to delve further.
      </p>
    </div>

    <hr />

    <div class="py-8 alt">
      <div class="content">
        <h2 class="title">Plan</h2>
        <p class="text-gray-900 subtitle">
          The <span class="font-bold">first step</span> is to
          <span class="font-bold">find volunteers</span> who would be interested
          in
          <span class="font-bold">
            <a
              href="https://www.investopedia.com/terms/b/bootstrap.asp"
              target="_blank"
              rel="“nofollow”"
            >
              bootstrapping
            </a>
          </span>
          this project and making it a <span class="font-bold">reality</span>.
        </p>
        <div class="ml-8 text-gray-800">
          <p>
            We need to start filling the following roles with experienced
            personnel:
          </p>
          <ul class="mt-2 list-disc">
            <li>Historians</li>
            <li>Animation Director</li>
            <li>Film Editor</li>
            <li>Story/Script writers</li>
            <li>Concept artists</li>
          </ul>
        </div>
        <p class="text-lg text-gray-900">
          The <span class="font-bold">second step</span> is to start early
          <span class="font-bold">pre-production</span>, and come up with an
          <span class="font-bold">initial budget</span>.
        </p>
        <div class="ml-8 text-gray-800">
          <p>
            We need to select the first Bible story to animate, allocate a
            production time-frame and develop the following assets which
            include:
          </p>
          <ul class="my-2 list-disc">
            <li>
              Animation budget for pre-production, production, post-production
              &amp; distribution
            </li>
            <li>Script, Storyboard and Animatics</li>
            <li>Film Look Development</li>
          </ul>
        </div>
        <p class="text-lg text-gray-900">
          The <span class="font-bold">third step</span> is to raise
          <span class="font-bold">funding</span> which has been outlined below.
        </p>
      </div>
    </div>

    <div class="py-8 content">
      <h2 class="title">Funding</h2>
      <p class="subtitle">
        The main source of funding we'll look at is
        <span class="font-bold text-lime-400">crowdfunding</span>.
      </p>
      <p>
        A campaign will be launched to grow interest and build an online
        community of members who are interested in watching a
        <span class="font-bold">polished animated Bible story</span> developed
        for young adults.
      </p>
      <p>
        With the help of additional volunteers, we can develop a
        <span class="font-bold"> 90 second trailer</span> to help popularize the
        project.
      </p>
      <p>
        Once we have a big enough community and our initial target budget has
        been raised, we can hire additional artists, actors, composers and other
        stakeholders required to develop, produce and distribute our first
        animated Bible story.
      </p>
    </div>
  </div>

  <hr />

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

.content {
  @apply container mx-auto md:w-screen-md px-4;
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
