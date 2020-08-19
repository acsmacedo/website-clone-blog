<template>
  <div class="home">
    <NsaHomeHeader />
    <NsaAboutHeader />
    <div class="home__about">
      <NsaBtn link="/about" />
    </div>
    
    <NsaHomePost />

    <NsaProjectHeader />
    <div class="home__project">
      <NsaBtn link="/project" />
    </div>
  </div>
</template>

<script>
import NsaHomeHeader from './NsaHomeHeader'
import NsaAboutHeader from '../about/NsaAboutHeader'
import NsaHomePost from './NsaHomePost'
import NsaProjectHeader from '../project/NsaProjectHeader'
import NsaBtn from '../base/NsaBtn'

export default {
  components: {
    NsaHomeHeader,
    NsaAboutHeader,
    NsaHomePost,
    NsaProjectHeader,
    NsaBtn
  }
}
</script>