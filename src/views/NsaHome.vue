<template>
  <div>
    <NsaHomeHeader />
    <NsaAboutText />
    <NsaHomePost />
    <NsaProjectHeader />
  </div>
</template>

<script>
import NsaHomeHeader from '../components/NsaHomeHeader'
import NsaAboutText from '../components/NsaAboutText'
import NsaHomePost from '../components/NsaHomePost'
import NsaProjectHeader from '../components/NsaProjectHeader'

export default {
  components: {
    NsaHomeHeader,
    NsaAboutText,
    NsaHomePost,
    NsaProjectHeader
  }
}
</script>