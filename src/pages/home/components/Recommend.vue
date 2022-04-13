<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>    
          <router-link 
          tag='li'
          :to="'/detail/'+item.id"
          class="item" 
          v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl" >
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
          </router-link>
      </ul>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: 'HomeRecommend',
  props: {
      'list':Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
 .title
   margin-top: .2rem
   line-height: .7rem
   font-size: .3rem
   background: #eee
   text-indent: .3rem
   height:0.7rem
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  border-bottom: solid 0.8px #ccc
  .item-img
    height 1.9rem
    width: 1.9rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width:0
    .item-title
      line-height: .54rem
      font-size: .34rem
      ellipsis()
    .item-desc
      line-height: .4rem
      font-size: .32rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      background-color #ff9300
      border-radius: 0.1rem
      padding:.1rem
      color: #fff
      margin-top: .16rem
</style>
