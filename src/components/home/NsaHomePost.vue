<template>
  <section class="home__post">
    <NsaTitle 
      title="Last news"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."
    />
    <div class="home__post__items">
      <NsaPreviewPost v-for="post in 3"
        :key="blogPost[post - 1 ].id"
        :img="blogPost[post - 1].img"
        :imgInfo="blogPost[post - 1].imgInfo"
        :title="blogPost[post - 1].title"
        :text="blogPost[post - 1].text"
        :href="`/blog/${blogPost[post - 1].id}`"
      />
    </div>
    
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import NsaPreviewPost from '../base/NsaPreviewPost'
import NsaTitle from '../base/NsaTitle'


export default {
  components: {
    NsaPreviewPost,
    NsaTitle,
    
  },
  computed: {
    ...mapGetters(['blogPost'])
  }
}
</script>