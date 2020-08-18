<template>
  <div>
    <h2>{{ tit }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tit: String,
    text: String
  }
}
</script>