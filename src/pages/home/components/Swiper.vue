<template>
<div class="wrapper">
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide>
        <img class="swiper-image"  src="	https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
        <img class="swiper-image" src="https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg" alt="">
    </swiper-slide>
 
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
  </template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {    
         swiperOption:{
              pagination: '.swiper-pagination',
              paginationClickable :true,    
          }
      
    }
  }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom:30.47%
      .swiper-image
        width:100%


</style>
