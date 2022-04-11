<template>
<div class="header">
   <div class="header-left"><div class="iconfont back">&#xe658;</div></div>
   <div class="header-input"><span class="iconfont search"> &#xe63c; </span>输入城市/景点/游玩主题</div>
   <router-link to='./city'>
      <div class="header-right">{{this.city}}<span class="iconfont down">&#xe65c;</span></div>
   </router-link>
  
</div></template>

<script>

export default {
  name: 'Homeheader',
  props: {
    'city': String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .header
      display:flex
      line-height: $headerHeight
      background: $bgColor
      color: #fff
      .header-left
        width: 0.64rem
        float: left
        .back
          text-align: center
          font-size: .4rem
      .header-input
        flex: 1
        margin-top: .12rem
        height: 0.62rem
        line-height: 0.62rem
        margin-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
        padding-left: .2rem
      .header-right
        width: 1.24rem
        float: right
        text-align: center
        color:#fff
        .down
          font-size: .3rem
</style>
