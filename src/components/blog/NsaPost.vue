<template>
  <div class="post">
    <section class="post__container">
      <div style="margin-top: 62px;"></div>
      <img :src="blogPostItem.img" :alt="blogPostItem.imgInfo">
      <h2>{{ blogPostItem.title}}</h2>
      <p>{{ blogPostItem.text }}</p>
      <button v-on:click="back">Back</button>
    </section>
  </div>
</template>

<script>


export default {
  computed: {
    blogPostItem() {
      return this.$store.getters.blogPostItem(this.$route.params.post);
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>