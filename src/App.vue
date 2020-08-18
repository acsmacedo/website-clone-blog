<template>
  <div id="app">
    <NsaMenu />
    <router-view></router-view>
    <NsaForm />
    <NsaFooter />
  </div>
</template>

<script>
import NsaMenu from './components/geral/NsaMenu'
import NsaForm from './components/geral/NsaForm'
import NsaFooter from './components/geral/NsaFooter'

export default {
  components: {
    NsaMenu,
    NsaForm,
    NsaFooter
  }
}
</script>

<style lang="scss">

</style>
