<template>
<div>
    <router-link tag='div'
     to='/' 
     class="header-abs"
     v-show="showAbs"
     >
        <div class="iconfont back">&#xe658;</div>
    </router-link>
    <div class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
        <router-link to="/">
           <div class="iconfont header-back">&#xe658;</div>
       </router-link>  
       景点选择
    </div>
</div>
</template>
<script>
export default {
    name:'DetailHeader',
    data () {
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 50 ){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = { opacity }
                this.showAbs = false 
            }
            else{
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    .back
      color: #ddd
      font-size: .6rem
  .header-fixed
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    position: fixed
    top:0
    right: 0
    left: 0
    .header-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position:absolute
      top:0
      left:0
      color:#fff
   
</style>
