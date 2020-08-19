<template>
  <section class="home__header">
    <div class="home__header__container">
      <h1>Hello! I'm Anderson Macedo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est voluptate aliquid nisi iure esse accusantium repellendus veritatis modi perspiciatis fuga, quia alias fugit exercitationem distinctio.</p>
      <a href="https://github.com/acsmacedo" target="_blank">Learn more</a>
    </div>
    <div class="home__header__scroll" v-on:click="scroll">
      <i class='bx bx-down-arrow-alt'></i>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scroll() {
      window.scrollTo(0, (window.innerHeight - 47));
    }
  }
}

</script>