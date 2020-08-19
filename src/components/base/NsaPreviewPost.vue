<template>
 <div>
    <img :src="img" :alt="imgInfo">
    <span>
      <h3>{{ title }}</h3>
      <p>{{ text | truncate(120)}}</p>
      <NsaBtn :link="href">More</NsaBtn>
    </span>
   
 </div>
</template>

<script>
import NsaBtn from './NsaBtn'

export default {
  components: {
    NsaBtn
  },
  props: {
    img: String,
    imgInfo: String,
    title: String,
    text: String,
    href: String
  }
}
</script>