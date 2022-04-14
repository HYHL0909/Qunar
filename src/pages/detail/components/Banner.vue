<template>
<div>
     <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src = "bannerImg"/>
        <div class="banner-info">
            <div class="banner-title">
                {{this.sightName}}
            </div>
            <div class = "banner-number">
                <span class="iconfont">&#xe72e;</span>{{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @close='handleGallaryClose'>gallary</common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    props:{
        sightName :String,
        bannerImg: String,
        bannerImgs: Array
    },
    components:{
        CommonGallary,
    },
    data () {
        return{
            showGallary: false
        }
    },
    methods:{
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
  .banner 
    overflow: hidden
    height: 0
    padding-bottom:55%
    position relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left:0
      right: 0
      bottom: 0
      line-height: .6rem
      color #fff
      display: flex
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size:.4rem
        padding-left:.2rem
      .banner-number
        height: .4rem
        line-height: .4rem
        margin-top: .2rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        font-size: .24rem


</style>
