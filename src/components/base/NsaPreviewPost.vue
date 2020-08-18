<template>
 <div>
    <img :src="img" :alt="imgInfo">
    <span>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <a :href="link">More</a>
    </span>
   
 </div>
</template>

<script>
export default {
  props: {
    img: String,
    imgInfo: String,
    title: String,
    text: String,
    link: String
  }
}
</script>