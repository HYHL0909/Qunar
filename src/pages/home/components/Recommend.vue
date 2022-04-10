<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>
          <li class="item" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.url" >
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
          </li>
      </ul>
  </div>
  
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
      return{
          recommendList:[
              {
                  id: '001',
              url: "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",title: "颐和园",desc: "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"}, {
                  id: '002',
              url: "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",title: "颐和园",desc: "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"},{
                  id: '003',
              url: "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",title: "颐和园",desc: "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"
              },{
                  id: '004',
              url: "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",title: "颐和园",desc: "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"
              }
          ]
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
 .title
   margin-top: .2rem
   line-height: .8rem
   font-size: .4rem
   background: #eee
   text-indent: .3rem
   height:0.8rem
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
      font-size: .40rem
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
      margin-top: .17rem
</style>
