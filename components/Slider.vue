<template>
  <hooper :settings="hooperSettings">
    <slide>
      <img src="images/slider/slide1.jpg">
    </slide>
    <slide>
      <img src="images/slider/slide2.jpg">
    </slide>
    <hooper-navigation slot="hooper-addons" />
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data () {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 4000
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {width: 100%; height: auto;}
.hooper {height: auto;}
</style>

<style lang="scss">
.hooper-next, .hooper-prev {background: #fff; border-radius: 30px; padding: 5px; display: flex;}
.hooper-prev {left: 25px;}
.hooper-next {right: 25px;}
</style>
