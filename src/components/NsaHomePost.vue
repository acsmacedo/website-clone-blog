<template>
  <section class="home__post">
    <NsaTitle 
      title="Key Features"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    />
    <div class="home__post__items">
      <NsaPreviewPost v-for="post in blogPost"
        :key="post.id"
        :img="`../../${post.img}`"
        :imgInfo="post.imgInfo"
        :title="post.title"
        :text="post.text"
        :link="`/blog/${post.id}`"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import NsaPreviewPost from './base/NsaPreviewPost'
import NsaTitle from './base/NsaTitle'

export default {
  components: {
    NsaPreviewPost,
    NsaTitle
  },
  computed: {
    ...mapState(['blogPost'])
  } 
}
</script>