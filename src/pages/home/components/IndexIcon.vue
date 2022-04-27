<template>
    <div class="icons">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img"><img class="icon-img-content" :src="item.imgUrl" alt=""/></div>
            <p class="img-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script >
/*eslint-disable*/ 
export default {
    name:'IndexIcon',
    props: {
      'list': Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay:false
        }
      }
      
    },
    computed: {
      pages () {
        const pages = []
        this.list.forEach((item,index) => {
          const page=Math.floor(index / 8)
          if(!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl';
  .icons >>> .swiper-container
    height:0
    width:100%
    padding-bottom:50%
    overflow: hidden
  .icon
    float: left
    width: 25%
    height:0
    padding-bottom: 25%
    overflow: hidden
    position: relative
    .icon-img
      position:absolute
      top:0
      left:0
      right:0
      bottom:.44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .img-desc
      position:absolute
      left:0
      right:0
      bottom: 0
      height 0.44rem
      lineheight 0.44rem
      text-align:center
      font-size:.31rem
      color: $fontColor
      ellipsis()
</style>
