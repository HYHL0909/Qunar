<template>
<div >
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-index-icon></home-index-icon>
</div></template>

<script>
import Homeheader from './components/Header'
import HomeSwiper from './components/Swiper'
import IndexIcon from './components/IndexIcon'
export default {
  name: 'Home',
  components: {
    'home-header': Homeheader,
    'home-swiper': HomeSwiper,
    'home-index-icon': IndexIcon
  }
}
</script>
<style >
</style>
