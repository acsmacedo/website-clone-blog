<template>
  <nav class="menu">
    <div class="menu__container">
      <div class="menu__logo">
        <a href="#">Anderson Macedo</a>
      </div>
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

const menu = document.getElementsByClassName('menu');
document.addEventListener('scroll', function() {
  menu.forEach(element => {
    if((window.innerHeight - 50) < window.scrollY) {
      element.classList.add('menu-fixed');
    } else {
      element.classList.remove('menu-fixed');
    }
  })
})

</script>