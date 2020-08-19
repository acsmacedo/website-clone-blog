<template>
  <section class="about__text">
    <NsaTitle 
      title="Key Features"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."
    />
    <div class='about__text__content'>
      <div class='about__text__item'>
        <img src="/post-2.jpg" alt="">
        <div>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis fugit deleniti, adipisci omnis eum optio hic, ea cumque natus fugiat unde necessitatibus.</p>
        </div>
      </div>
      <div class='about__text__item'>
        <img src="/post-6.jpg" alt="">
        <div>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class='about__text__item'>
        <img src="/post-3.jpg" alt="">
        <div>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis fugit deleniti, adipisci omnis eum optio hic, ea cumque natus fugiat unde necessitatibus.</p>
        </div>
      </div>
      <div class='about__text__item'>
        <img src="/post-5.jpg" alt="">
        <div>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NsaTitle from '../base/NsaTitle'

export default {
  components: {
    NsaTitle
  }
}
</script>