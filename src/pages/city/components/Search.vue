<template>
<div>
  <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list"
        :key="item.id"
        >{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
</div>
    
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CitySearch',
  props:{
    cities:Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer:null,
    }
  },
  computed :{
    hasNoData () {
      return !this.list.length
    }   
  },
  watch: {
    keyword () {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list = []
        return 
      }
      this.timer = setTimeout(()=>{
        console.log(this.cities)
        const result = []
        for(let i in this.cities) {
          this.cities[i].forEach((element) => {
            if(element.spell.indexOf(this.keyword) > -1||element.name.indexOf(this.keyword) > -1){
              result.push(element)
            }
          
          });
        }
        this.list = result  
      },100)
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.search)
    }

  }

}
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .search
    height: .72rem
    background-color $bgColor
    padding: 0 .1rem
    .search-input
      color:#222
      width:100%
      text-align: center
      height: .62rem
      line-height: .62rem
      border-radius: .06rem   
<<<<<<< HEAD
  .search-content
    position: absolute
    top 1.58rem
    bottom: 0
    right: 0
    left: 0
    background:#eee
    z-index: 1
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background-color #fff
      border-bottom: 0.5px solid #ccc
      color: #666
      
=======
>>>>>>> 73655e40e5237a33e628d77180b6c3831b3ac553
</style>
