<template>
  <div class="home">
    <NsaHomeHeader />
    <NsaAboutHeader />
    <NsaHomePost />
    <NsaProjectHeader />
  </div>
</template>

<script>
import NsaHomeHeader from '../components/NsaHomeHeader'
import NsaAboutHeader from '../components/about/NsaAboutHeader'
import NsaHomePost from '../components/NsaHomePost'
import NsaProjectHeader from '../components/NsaProjectHeader'

export default {
  components: {
    NsaHomeHeader,
    NsaAboutHeader,
    NsaHomePost,
    NsaProjectHeader
  }
}
</script>