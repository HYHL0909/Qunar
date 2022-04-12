<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list"  :key="item.id">
        <img class="swiper-image"  :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
  </template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .wrapper >>> .swiper-pagination-bullet-active
        background: $bgColor
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom:30.47%
      .swiper-image
        width:100%
</style>
