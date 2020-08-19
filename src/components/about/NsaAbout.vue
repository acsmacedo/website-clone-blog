<template>
  <div class="about">
    <div style="margin-top: 62px;"></div>
    <NsaAboutHeader />
    <NsaAboutText />
  </div>
</template>

<script>
import NsaAboutHeader from './NsaAboutHeader'
import NsaAboutText from './NsaAboutText'

export default {
  components: {
    NsaAboutHeader,
    NsaAboutText
  }
}
</script>