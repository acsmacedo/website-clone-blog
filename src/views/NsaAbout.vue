<template>
  <div class="about">
    <NsaAboutHeader />
    <NsaAboutText />
    <NsaAboutInfo />
  </div>
</template>

<script>
import NsaAboutHeader from '../components/about/NsaAboutHeader'
import NsaAboutText from '../components/about/NsaAboutText'
import NsaAboutInfo from '../components/about/NsaAboutInfo'

export default {
  components: {
    NsaAboutHeader,
    NsaAboutText,
    NsaAboutInfo
  }
}
</script>