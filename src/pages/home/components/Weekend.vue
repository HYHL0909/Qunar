<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          url:
            "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",
          title: "颐和园",
          desc:
            "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"
        },
        {
          id: "002",
          url:
            "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",
          title: "颐和园",
          desc:
            "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"
        },
        {
          id: "003",
          url:
            "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",
          title: "颐和园",
          desc:
            "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"
        },
        {
          id: "004",
          url:
            "https://imgs.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_224x148_8d9c8087.jpg",
          title: "颐和园",
          desc:
            "走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林走入清朝皇帝的皇家园林"
        }
      ]
    };
  }
};
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.2%
    .item-img
      width: 100%
    .item-info
      padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    font-size: .32rem
    color: #ccc
    ellipsis()
</style>
