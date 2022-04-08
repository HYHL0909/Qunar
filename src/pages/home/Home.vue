<template>
<div >
   <home-header></home-header>
   <home-swiper></home-swiper>
   <div>text</div>
</div></template>

<script>
import Homeheader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    'home-header': Homeheader,
    'home-swiper': HomeSwiper
  }
}
</script>
<style >
</style>
