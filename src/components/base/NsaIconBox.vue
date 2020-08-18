<template>
 <div>
   <i :class='icon'></i>
   <h3>{{ title }}</h3>
   <p>{{ text }}</p>
 </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    text: String
  }
}
</script>