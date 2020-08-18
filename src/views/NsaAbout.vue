<template>
  <div>
    <NsaAboutHeader />
    <NsaAboutText />
    <NsaAboutInfo />
  </div>
</template>

<script>
import NsaAboutHeader from '../components/NsaAboutHeader'
import NsaAboutText from '../components/NsaAboutText'
import NsaAboutInfo from '../components/NsaAboutInfo'

export default {
  components: {
    NsaAboutHeader,
    NsaAboutText,
    NsaAboutInfo
  }
}
</script>