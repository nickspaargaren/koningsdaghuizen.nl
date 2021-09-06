<template>
  <div>
    <div class="navigation-wrapper">
      <div ref="slider" class="keen-slider">
        <div class="keen-slider__slide">
          <img src="images/slider/slide1.jpg">
        </div>
        <div class="keen-slider__slide">
          <img src="images/slider/slide2.jpg">
        </div>
      </div>
      <svg
        :class="{
          arrow: true,
          'arrow--left': true,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        @click="slider.prev()"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        />
      </svg>
      <svg
        v-if="slider"
        :class="{
          arrow: true,
          'arrow--right': true,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        @click="slider.next()"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </div>
  </div>
</template>

<script>
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

export default {
  name: 'Slider',
  data () {
    return {
      slider: null
    }
  },
  mounted () {
    this.slider = new KeenSlider(this.$refs.slider, {
      loop: true,
      initial: 1,
      slideChanged: (s) => {
        this.current = s.details().relativeSlide
      }
    })
  },
  beforeDestroy () {
    if (this.slider) { this.slider.destroy() }
  }
}
</script>

<style lang="scss">
.navigation-wrapper {position: relative;}
.navigation-wrapper .keen-slider img {width: 100%;}

.arrow {width: 30px; height: 30px; position: absolute; top: 50%; transform: translateY(-50%); fill: #fff; cursor: pointer;}
.arrow--left {left: 5px;}
.arrow--right {left: auto; right: 5px;}
</style>
