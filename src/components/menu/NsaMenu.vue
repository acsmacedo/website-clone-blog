<template>
  <nav class="menu">
    <div class="menu__container">
      <div class="menu__logo">
        <a href="https://github.com/acsmacedo" target="_blank">Anderson Macedo</a>
      </div>
      <div class="menu__icon" v-on:click="open"><i class='bx bx-menu'></i></div>
      <ul class="menu__links" v-on:click="close">
        <router-link :to="{ name: 'Home' }">home</router-link>
        <router-link :to="{ name: 'About' }">about</router-link>
        <router-link :to="{ name: 'Blog' }">blog</router-link>
        <router-link :to="{ name: 'Project' }">project</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    open() {
      let menu = document.querySelector('.menu__colapse');
      let overlay = document.querySelector('.overlay');
      menu.style.display = 'flex';
      overlay.style.display = 'block';
    },
    close() {
      let menu = document.querySelector('.menu__colapse');
      let overlay = document.querySelector('.overlay');
      menu.style.display = 'none';
      overlay.style.display = 'none';
    }
  }
}


</script>