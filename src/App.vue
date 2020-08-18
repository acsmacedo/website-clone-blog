<template>
  <div id="app">
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
  }
}
</script>

<style lang="scss">

</style>
