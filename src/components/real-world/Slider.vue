<template>
  <div class="Slider">
    <h1>{{ msg }}</h1>
    <div class="slider-container">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="slider-item"><img src="/static/img/s1.jpg" /></swiper-slide>
        <swiper-slide class="slider-item"><img src="/static/img/s2.jpg" /></swiper-slide>
        <swiper-slide class="slider-item"><img src="/static/img/s3.jpg" /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import { swiper, swiperSlide } from 'vue-awesome-swiper'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Slider extends Vue {
  msg: string = 'Slider'
  notNextTick: boolean = true
  swiperOption: any = {
    autoplay: 3000,
    direction: 'horizontal',
    grabCursor: true,
    setWrapperSize: true,
    autoHeight: false,
    height: '500px',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    scrollbar: '.swiper-scrollbar',
    mousewheelControl: true,
    observeParents: true,
    // if you need use plugins in the swiper, you can config in here like this
    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
    debugger: true,
    // swiper callbacks
    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
    onTransitionStart (swiper) {
      console.log(swiper)
    }
  }
  created () {
  }
  mounted () {

  }
}
</script>

<style lang="scss">
  .slider-container {
    width: 100%;
    .slider-item {
      img {
        width: 100%;
      }
    }
  }
</style>
