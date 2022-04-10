<template>
<div >
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-index-icon></home-index-icon>
   <home-recommend></home-recommend>
   <home-weekend></home-weekend>
</div></template>

<script>
import Homeheader from './components/Header'
import HomeSwiper from './components/Swiper'
import IndexIcon from './components/IndexIcon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    'home-header': Homeheader,
    'home-swiper': HomeSwiper,
    'home-index-icon': IndexIcon,
    'home-recommend': HomeRecommend,
    'home-weekend': HomeWeekend
  }
}
</script>
<style >
</style>
