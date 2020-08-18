<template>
  <section class="about__header">
    <NsaTitle 
      title="Key Features"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."
    />
    <div class="about__header__text">
      <NsaIconBox v-for="item in aboutIcon" 
        :key="item.id" 
        :title="item.title" 
        :text="item.text" 
        :icon="item.icon"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import NsaIconBox from '../base/NsaIconBox'
import NsaTitle from '../base/NsaTitle'

export default {
  components: {
    NsaIconBox,
    NsaTitle
  },
  computed: {
    ...mapState(['aboutIcon'])
  }
}
</script>