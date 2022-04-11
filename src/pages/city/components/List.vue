<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of hot" :key="item.id">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of city" :key="key">
             <div class="title border-topbottom">{{key}}</div>
             <div class="item-list">
                 <div class="item" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}} </div>
             </div>
        </div>
        
        </div>
        
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  props:{
      hot:Array,
      city:Object

  },
  mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
/* eslint-disable*/
  @import '~styles/variables.styl';
  .border-topbottom
    border: solid 1px #ccc
    &:bofore
      border-color: #ccc
    &:afer
      border-color: #ccc
  .list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      line-height: .44rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size:.26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        width:33.3%
        float:left
        .button
          text-align: center
          margin: .1rem
          padding :.1rem 0
          border: .02rem solid #ccc
          border-radius:.03rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
        border-bottom: .5px solid #ccc


</style>