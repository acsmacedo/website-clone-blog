<template>
  <nav class="menu">
    <div class="menu__container">
      <div class="menu__logo">logo</div>
      <ul class="menu__links">
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
  
}
</script>