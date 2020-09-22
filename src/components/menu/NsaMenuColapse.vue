<template>
  <nav>
    <ul class="menu__colapse" v-on:click="close">
      <router-link :to="{ name: 'Home' }">home</router-link>
      <router-link :to="{ name: 'About' }">about</router-link>
      <router-link :to="{ name: 'Blog' }">blog</router-link>
      <router-link :to="{ name: 'Project' }">project</router-link>
    </ul>
    <div class="overlay" v-on:click="close"></div>
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
