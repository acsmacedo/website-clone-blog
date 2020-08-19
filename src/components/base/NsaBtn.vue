<template>
 <router-link :to="link" class="btn">
   <slot>Learn more</slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>