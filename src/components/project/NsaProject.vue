<template>
  <div>
    <div style="margin-top: 62px;"></div>
    <NsaProjectHeader />
    <NsaAboutText />

  </div>
</template>

<script>
import NsaProjectHeader from './NsaProjectHeader'
import NsaAboutText from '../about/NsaAboutText'

export default {
  components: {
    NsaProjectHeader,
    NsaAboutText
  }
}
</script>