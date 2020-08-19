<template>
  <div id="app">
    <div class="btn-up" v-on:click="up">
      <i class='bx bx-up-arrow-alt'></i>
    </div>
    <NsaMenu />
    <router-view></router-view>
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
  if(window.scrollY > window.innerHeight) {
    document.querySelector('.btn-up').style.display = 'flex'; 
  } else {
    document.querySelector('.btn-up').style.display = 'none'; 
  }
})
</script>

<style lang="scss">

</style>
