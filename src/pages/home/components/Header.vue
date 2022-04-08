<template>
<div class="header">
   <div class="header-left"><div class="iconfont back">&#xe658;</div></div>
   <div class="header-input"><span class="iconfont search"> &#xe63c; </span>输入城市/景点/游玩主题</div>
   <div class="header-right">城市<span class="iconfont down">&#xe65c;</span></div>
</div></template>

<script>

export default {
  name: 'Homeheader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .header
      display:flex
      line-height: 0.86rem
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
        .down
          font-size: .3rem
</style>
