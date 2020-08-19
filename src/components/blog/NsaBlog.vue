<template>
  <section class="blog">
    <div style="margin-top: 62px;"></div>
    <NsaTitle 
      title="Last News"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."
    />
    <div class="blog__items">
      <NsaPreviewPost v-for="post in showPost"
        :key="blogPost[post - 1 ].id"
        :img="blogPost[post - 1].img"
        :imgInfo="blogPost[post - 1].imgInfo"
        :title="blogPost[post - 1].title"
        :text="blogPost[post - 1].text"
        :href="`/blog/${blogPost[post - 1].id}`"
      />
    </div>
    <button v-on:click="plusShowPost">More</button>
  </section>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import NsaPreviewPost from '../base/NsaPreviewPost'
import NsaTitle from '../base/NsaTitle'

export default {
  components: {
    NsaPreviewPost,
    NsaTitle
  },
  computed: {
    ...mapGetters(['blogPost']),
    ...mapState(['showPost', 'y'])
  },
  methods: {
    ...mapMutations(['plusShowPost'])
  } 
}
</script>