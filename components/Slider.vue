<template>
  <div>
    <div class="navigation-wrapper">
      <div ref="container" class="keen-slider">
        <div class="keen-slider__slide">
          <img src="~/assets/slider/slide1.jpg" width="100%" height="auto">
        </div>
        <div class="keen-slider__slide">
          <img src="~/assets/slider/slide2.jpg" width="100%" height="auto">
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
  import { ref } from 'vue'

import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

export default {
  setup(){

    const current = ref(1)
    const [container, slider] = useKeenSlider({
      loop: true,
      initial: current.value,
      slideChanged: (s) => {
        current.value = s.track.details.rel
      },
    })

    return { container, slider }
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
