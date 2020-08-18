<template>
  <footer class="footer">
    <NsaFooterForm />
    <NsaFooterMedia />
    <NsaFooterMap />
    <NsaFooterCopy />
  </footer>
</template>

<script>
import NsaFooterForm from './NsaFooterForm'
import NsaFooterMedia from './NsaFooterMedia'
import NsaFooterMap from './NsaFooterMap'
import NsaFooterCopy from './NsaFooterCopy'

export default {
  components: {
    NsaFooterForm,
    NsaFooterMedia,
    NsaFooterMap,
    NsaFooterCopy
  }
}
</script>