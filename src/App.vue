<template>
  <div id="app">
    
    <div class="btn-up" v-on:click="up">
      <i class='bx bx-up-arrow-alt'></i>
    </div>
    <NsaMenu />
    <transition name="tra">
      <router-view></router-view>
    </transition>
    <NsaFooter />
  </div>
</template>

<script>
import NsaMenu from './components/menu/NsaMenu'
import NsaFooter from './components/footer/NsaFooter'

export default {
  components: {
    NsaMenu,
    NsaFooter
  },
  methods: {
    up() {
      window.scrollTo(0, 0);
    }
  }
}

document.addEventListener('scroll', function() {
  if(window.scrollY > (window.innerHeight - 60)) {
    document.querySelector('.btn-up').style.display = 'flex'; 
  } else {
    document.querySelector('.btn-up').style.display = 'none'; 
  }
})
</script>

<style lang="scss">
 .tra-enter, .tra-leave-to {
   opacity: 0;
  }
  
  .tra-enter-active { 
    transition: opacity 1s linear;
  }

  .tra-leave-active { 
    transition: opacity 0.5s ease-in;
  }
</style>
