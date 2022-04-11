<template>
    <div class="search">
        <input  class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'

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
</style>
