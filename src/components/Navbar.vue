<template>
  <nav class="flex justify-between p-4 container mx-auto">
    <div>
      <img
        class="inline mr-2"
        src="../assets/logo.png"
        alt="Bible in 8K logo"
        width="30"
      />
      <a
        class="font-bold text-lg md:text-2xl md:tracking-wide text-teal-500 align-middle"
        href="/"
        >Bible in 8K</a
      >
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/episodes">Episodes</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="hidden md:block"></div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  @apply focus:outline-none focus:b-2 border-lime-400;
}
.links {
  a {
    @apply text-cyan-100 tracking-wide pb-4 w-18 md:mr-4 text-center inline-block hover:text-teal-400 hover:border-teal-400 hover:border-b-2;
  }
  .router-link-exact-active {
    @apply hidden md:inline-block text-cyan-300 font-semibold border-cyan-300 border-b-2;
  }
}
</style>
