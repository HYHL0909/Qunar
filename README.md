# 去哪儿旅行

## 第一次提交

安装`Vue-cli`脚手架

`Vue`环境配置。

![image-20220407230026269](https://raw.githubusercontent.com/HYHL0909/images/main/202204072300418.png)



![image-20220407230102802](https://raw.githubusercontent.com/HYHL0909/images/main/202204072301866.png)

## 第二次提交

![image-20220408100856484](https://raw.githubusercontent.com/HYHL0909/images/main/202204081008705.png)

路由：根据不同的网址显示不同的内容

baidu.com/index.html 展示的是首页



router-view 显示的是当前路由地址 所对应的内容

ES6中键值一样的话只写一个



单页应用，是同一个html页面知识用`js`去清除，SEO性能差

多页应用，是通过不同的html展示，首屏快，SEO性能好，切换慢



引入border.css和reset.css

**不同浏览器对相同标签的显示效果，有时候往往不同，那么在做项目的时候就需要对基本的样式进行设置，以达到在不同浏览器下显示效果是相同的，reset.css的作用就在于此。所有，大家很有必要收藏一下，在做项目的时候直接使用即可。**

border.css  

**该`css`样式用于解决移动端1像素边框问题。问题分析：有些手机的屏幕分辨率较高，是2-3倍屏幕。`css`样式中border:1px solid red;在2倍屏下，显示的并不是1个物理像素，而是2个物理像素。为了解决这个问题，引入border.css是非常有必要的。**

移动端有300ms延迟，因此我们安装一个`fastclick`库。并且在main.js中导入

![image-20220408092921508](https://raw.githubusercontent.com/HYHL0909/images/main/202204080929776.png)

## 第三次提交

我们使用`stylus`进行`css`样式的书写。

首先要安装`stylus`

`npm install stylus`

还要安装`stylus-loader`

注意这里要安装的是较低版本的。要不然书写样式时识别不了，会报错。

`npm install stylus-loader@3.0.2`

然后书写样式代码时，

~~~html
<style lang="stylus" scoped>
</style>

~~~

![在这里插入图片描述](https://raw.githubusercontent.com/HYHL0909/images/main/202204081051312.png)

图片是2倍图，是86像素，那我们前端设计就要 43px。然后我们使用rem

在我们的reset.css文件里我们设计我们的html 中的font-size是50px。。

那么1rem=50px。

2rem=100px

43px=0.86rem。

所以在二倍图的设计里就很方便的。



## 第四次提交

1. 在我们的项目里使用`iconfont`图标

   - `iconfont`网站：

     注册账号，建立项目，寻找自己想要的图标，加入购物车。添加到项目-->下载到本地-->解压。

   - 本地项目：

     - 将有用的文件添加到我们的项目上。有用的文件是啥呢。字体文件(最后三个）+`iconfont.css`文件![image-20220408170004198](https://raw.githubusercontent.com/HYHL0909/images/main/202204081700607.png)

     - 在styles里创建文件夹`iconfont `用于放置字体文件。

     - 将样式文件添加到`src/assets/styles`，

       然后去修改里面`src`里的`url`:就是将路径修改一下就可以了。

   - 开始在项目里用起来吧！

     从`iconfont`网站里下载里面有个html文件，打开它，清清楚楚明明白白教你使用方式。一共有三种方式，我们喜欢用Unicode方式。前两步已经完成。现在就是第三步。

     ![image-20220408171033657](https://raw.githubusercontent.com/HYHL0909/images/main/202204081710728.png)

     这里几点注意事项：

     - 注意class的名字 要是`iconfont`

       你可以是`iconfont search` 写样式时就直接 `.search`

       但是不可以是`iconfont-search`,否则会变成框框。不知道为啥！

     - 未必就得用span，可以改成div等，开心就好。但是注意，span是内联元素，只能容纳文本或其他内联元素，然后！和其他内联元素一样,内联元素的宽度和高度就是包含的文字或图片的宽度和高度 

       **给span标签设置高height、宽width、上下内边距(padding-top/bottom)、上下外边距(margin-top/bottom)都是不起作用的。 **给span标签设置左右内边距(padding-left/right)、左右外边距(margin-left/right)、行高(line-height)是有效的。 

2. 对代码进行简化

   - 提取常用变量名。

     一般一个软件会有一个主题色对吧，这个主题色在哪哪个组件都很常用，所以，我们可以将这种放在变量里。

     在styles里创建`variables.styl`文件。

     ~~~stylus
     $bgColor = #00bcd4
     ~~~

     然后在想要用到该变量的样式里引入

     ~~~vue
     <style lang="stylus" scoped>
       @import '../../../styles/variables.styl'
         .header
           display:flex
           line-height: 0.86rem
           background: $bgColor
     <style>     
     ~~~

     可能的错误：

     - `vscode` 错误提示`{ expected css(css-lcurlyexpected)`

       看看右下角语言是不是`styl`

       ![image-20220408172034138](https://raw.githubusercontent.com/HYHL0909/images/main/202204081720216.png)

       

   - 修改`webpack`配置简化路径

     看看上面那个引入，是不是看着就贼膈应人。

     就好像我们可以把@ 和`src`绑定在一起（在`src`目录下的文件，引用@是`src`，不在`src`目录下的文件，用~@表示`src`），我们也可以把其他的绑定在一起。

     打开：build/webpack.base.conf.js

     找到resolve：看到@了，和它一样格式，爱咋加咋加。

     ~~~javascript
       resolve: {
         extensions: ['.js', '.vue', '.json'],
         alias: {
           'vue$': 'vue/dist/vue.esm.js',
           '@': resolve('src'),
           'styles':resolve('src/assets/styles')
         }
       },
     ~~~

     修改完`webpack`配置，重新，`npm run dev`.

     

## 第五次提交

每次要实现一个新的功能都是通过在一个新的分支上实现，然后最后再合并分支。

实现轮播图使用插件

`Vue-Awesome-Swiper`:https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7



选择 use setup for Webpack

安装

![image-20220408210552012](https://raw.githubusercontent.com/HYHL0909/images/main/202204082105290.png)

引用库

~~~javascript
// starting with version 2.6.0, you need to manually introduce swiper's css
import'swiper/dist/css/swiper.css'

// import
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

~~~



然后新建一个组件叫 `Swiper`

> SPA worked by the `component`, find `swiper` instance by `ref attribute`.
>
> 因此看`github`上SPA上的使用。将模板复制到`swiper`上
>
> ~~~vue
> <!-- The ref attr used to find the swiper instance -->
> <template>
> <swiper :options="swiperOption" >
>  <!-- slides -->
>  <swiper-slide>I'm Slide 1</swiper-slide>
>  <swiper-slide>I'm Slide 2</swiper-slide>
>  <!-- Optional controls -->
>  <div class="swiper-pagination"  slot="pagination"></div>
>   <div class="swiper-button-prev" slot="button-prev"></div>
>  <div class="swiper-button-next" slot="button-next"></div>
>  <div class="swiper-scrollbar"   slot="scrollbar"></div>
> </swiper>
> </template>
> <script>
> export default {
> name: 'HomeSwiper',
>  <!-- 数据是因为模板上有option -->
> data () {
>  return {
>    swiperOption: {}
>  }
> }
> }
> </script>
> ~~~

记得在Home里引入组件。

不想要slider  用`img` 里面`src`放图片

图片太大。--设置width：100%

图片下面的元素会有抖动，这是因为图片加载出来之前高度是0，此时图片下的元素就占据了本该由图片占据的位置。

解决方案：就是让这个home-swiper占据固定的高度。而不是由图片撑起来。

![image-20220408224115031](https://raw.githubusercontent.com/HYHL0909/images/main/202204082241335.png)

这样我们就去看看`home-swiper`是怎么实现的。

是由`<swiper></swiper>`包裹实现的。

我们没有办法 去固定`<swiper></swiper>`这种引入库的大小，所以我们在`<swiper></swiper>`外面再包裹一个div ，然后去固定div的高度。div命名为wrapper

~~~stylus
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom:30.47%
~~~



轮播图下面有小白点。pagination，这些可以看github上的源码，自己挑自己想要的属性。

~~~JavaScript
data () {
    return {    
         swiperOption:{
              pagination:'.swiper-pagination'，
              paginationClickable :true,   
             loop:true,//可以
          }
      
    }
  }
~~~

但是我们不想要蓝色，我们想改个颜色，通过F12,我们知道颜色是通过加上类

swiper-pagination-bullet-active，是这个类控制的，因此我们尝试将该类的背景颜色修改成红色，但是这无效的！

**原因**：首先明确一点：我们定义的HomeSwiper是Swiper的父组件！

再明确一点：scoped决定了这个样式的作用域只能是HomeSwiper组件。

在父组件上企图改变子组件的样式，可以使用穿透。穿透子组件。

~~~stylus
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
~~~

循环Slider的实现 v-for 加上list

## 第六次提交

![image-20220409222604201](https://raw.githubusercontent.com/HYHL0909/images/main/202204092226138.png)

新功能：创建新分支。

创建一个新的组件叫做`Icons.vue`,在主组件里导入。

开始实现组件！！！

**布局**

![image-20220409232539198](https://raw.githubusercontent.com/HYHL0909/images/main/202204092325310.png)

~~~html
   <div class="icons">
        <div class="icon" >
          <div class="icon-img"><img class="icon-img-content" src="" alt=""/></div>   
          <p class="img-desc">热门景点</p>
        </div>
    </div>
~~~

灰色：是icons。蓝色＋黄色：是icon。粉色：`icon-img`。蓝色: `img-desc`

icons宽高2：1，要先进行占位，要不然就会出现上面那样的抖动！占位复习一遍！！

就是在外面包裹一层div，设置div的样式为

~~~stylus
.icons
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom:50%
~~~

里面出现8个小图标。

小图标我们让它浮动，而且宽度25%。高度占25%

~~~stylus
    .icon
      float: left
      width: 25%
      padding-bottom: 25%
~~~

但是这样的话第一个小图标有了高度后就撑开了，然后下面的图标挤下去了。因此我们让它溢出来的部分藏起来。

图片用一个div包裹，将它束缚在这个div里用的是绝对定位。

它的父级 icon是relative，如果没有指定，就是相对于浏览器。

~~~stylus
      position: relative
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
~~~

但是这样呢 图标是能够限制在一定范围内，但图标因为太大了，只展现出来了一半。那我们就让图片占据 height：100%，剩下的就是修饰了。居中啦等。

~~~stylus
   .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
~~~



如果我们有9个图标我们希望能够实现轮播图拖动的效果。套用轮播图组件+算法超过8就在另外一页。

我们要套用swider 组件。

~~~html
<swiper>
    <swiper-slide  v-for="">
        <div v-for="">
            <div>
                <img>
            </div>
            <p></p>
        </div>
    </swiper-slide>
</swiper>
~~~

我们要让高度和icons一致，穿透

~~~stylus
.icons >>> .swiper-container
    height:0
    width:100%
    padding-bottom:50%
    overflow: hidden
~~~



list循环，但是第九个不在第二页  利用计算属性。将一维数组变成一个二维

~~~javascript
computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item,index) => {
          const page=Math.floor(index / 8)
          if(!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
~~~

然后用双层v-for循环。

~~~html
<swiper>
    <swiper-slide  v-for="">
        <div v-for="">
            <div>
                <img>
            </div>
            <p></p>
        </div>
    </swiper-slide>
</swiper>
~~~



静态资源引用

图片一类的静态文件，应该放在这个static文件夹（与src同级）下

这个文件夹下的文件（夹）会按照原本的结构放在网站根目录下

这时我们再去使用/static绝对路径，就可以访问这些静态文件了

注意：这样的话必须写成绝对路径如images:[{src:”/static/1.png”},{src:”/static/2.png”}]



如果字太多要让它显示3个点的话：

~~~stylus
ellipsis()
  overflow: hidden
  white-space:nowrap
  text-overflow: ellipsis
~~~

然后在样式里去引用。
## 第七次提交：推荐部分的实现
![image-20220410163004463](https://raw.githubusercontent.com/HYHL0909/images/main/202204101630981.png)

网页布局

~~~html
      <div class="title">热销推荐</div>
      <ul>
          <li class="item" >
            <img class="item-img" src="" >
            <div class="item-info">
                <p class="item-title"></p>
                <p class="item-desc"></p>
                <button class="item-button"></button>
            </div>
          </li>
      </ul>
~~~

图片和描述可以用flex布局。那么就要先在他们的父级元素 `item` 中 `display:flex` 

固定图片的宽高。

让item-info占据剩余的空间`flex:1`

最后注意一点：就是当`item-desc`内容很多的时候我们可以让它以省略号的方式出现，但是此时记得先把`item-info的min-width `设置为0.



## 第八次提交：周末游组件

![image-20220410214234412](https://raw.githubusercontent.com/HYHL0909/images/main/202204102142636.png)

就是和上面的推荐部分组件很像。

## 第九次提交 ：动态获取首页内容

让我们动态获取首页的内容，比如一些图片，logo等等

`axios`进行ajax项目的请求。

安装 npm

static 里放数据。放在本地，不上传到库，那么就 `.gitignore`里添加地址。

将本地地址改成api

代理功能。config里的index.js

是webpack-dev-server 提供的

~~~js
 proxyTable: {
      '/api':{
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
~~~

记住改了配置要重新启动服务器



我们利用axios 获取数据，记住在home里请求。请求一次比请求很多次好



~~~JavaScript
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList= data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },

  mounted () {
    this.getHomeInfo()
  }
~~~



在mounted 生命周期函数里去请求。

```
beforecreated：el 和 data 并未初始化 
created:完成了 data 数据的初始化，el没有
beforeMount：完成了 el 和 data 初始化 
mounted ：完成挂载

我们请求回来的初始化数据或者基础数据是不是需要挂在Vue的Data上面？（是的，需要√）
然后我们继续beforeCreate的时候Data有没有生成？（答案是：没有。×）
--所以这一步是无法把数据挂到Vue的Data上面的
然后我继续看created的时候Data有没有生成？（答案是：生成啦。√）
--所以这一步我们是可以把数据挂到Vue的Data上面的,是不是可以放在这里啦？
--是的，可以放在这里啦。所以最后结论就是放在created里面。

（1）mounted

　　如果把所有请求放在created里面的话,请求过多会,加载太慢会导致页面出现短暂的白屏情况,一般上我写的话,接口不复杂会放created里面,接口多复杂的话会放在mounted里面.

（2）mounted

　　created 是加载DOM,html之后 就马上执行, 比如初始化,获取屏幕高度调整,赋值等等,而mounted就是执行包括js之后,准备开始调用方法,也就是说 类似传统开发那样,先加载jquery 再调用插件
```

然后请求回来大的数据就会放在home组件。此时就需要父组件给子组件传递数据，用属性，然后子组件接受props

## 第十次提交：第二个页面---城市页面

配置router

index.js 里router配置。

~~~js
 routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    }
  ]
~~~



router-link 帮助我们能实现从首页的北京跳转到另一个页面。

~~~html
<router-link to='./city'>
      <div class="header-right">{{this.city}}<span class="iconfont down">&#xe65c;</span></div>
   </router-link>
~~~

![image-20220411203953257](https://raw.githubusercontent.com/HYHL0909/images/main/202204112039511.png)

 



为啥float 的上一级要overflow hidden 触发brc



~~~stylus
.list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
~~~

我们不想让list撑出来，因此，

我们想要用better-scoll库实现酷炫的效果

就是你拉的时候有个弹弹的效果

如何使用better-scroll 库

getting started

dom结构要满足这样的效果

~~~html
<div class="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- you can put some other DOMs here, it won't affect the scrolling-->
</div>
~~~

也可以是

~~~html
<div>
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
~~~

导入库

~~~JavaScript
<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
~~~

字母表的布局使用position完成。

~~~stylus
.list 
    display:flex
    flex-direction: column
    justify-content: center
    text-align: center
    position: absolute
    top: 1.58rem
    right:0
    bottom:0
    width:.4rem
~~~



利用axios获取城市页面的数据！





功能实现：

1. 就是我们点击字母表页面中某个字母时，能够跳转到对应的城市页面。

    实现兄弟组件之间通信：

   - bus

   - 传递给父组件，再由父组件传递给子组件。（简单的）。而且在本例里，子组件会发送两次emit给父组件，父组件只需要要处理一次（因为逻辑相同）。

     alphabet传递给City，

     点击alphabet中的item后，利用emit发送当前事件发生的元素里的内容。

     ~~~JavaScript
     handleLetterClick (e) {
           // let target = e.target;表示的是e（event）发生的位置。
           this.$emit('change',e.target.innerText)
         },
     ~~~

     父组件监听事件，然后接收数据，放在自己的letter数据里。

     City再传给list ，利用属性 props。

     City利用watch监听letter的变化，一旦letter发生变化，说明点击了其他字母，那么滚轮就滚动到相应的部分。

     ~~~javascript
      watch: {
           letter () {
               if(this.letter){
                   const element = this.$refs[this.letter][0]
                   this.scroll.scrollToElement(element)
               }
           }
       }
     ~~~

     

2. 滚动事件的监听。

   只有touchstart执行后才能执行touchmove

   实现：定义一个数据，touchStatus：false

   ~~~javascript
    handleTouchStart () {
         this.touchStatus = true
       },
       handleTouchMove (e) {
         if(this.touchStatus){
          
         }
       },
       handleTouchEnd () {
         this.touchStatus = false
       }
   ~~~

   滑动到哪个字母就跳转到哪个部分的逻辑实现。

   ![image-20220412114457667](https://raw.githubusercontent.com/HYHL0909/images/main/202204121144993.png)

   

   A到header下面的距离：

   ~~~JavaScript
   const startY = this.$refs['A'][0].offsetTop
   ~~~

   滑动到的字母的距离里header的距离

   header的高度 79

   ~~~JavaScript
    const touchY = e.touches[0].clientY - 79
   ~~~

   字母的高度 22px、

   ~~~JavaScript
   const index = Math.floor((touchY - startY) / 22)
   ~~~

   数据发生了改变，发送给父组件。

   

   ~~~JavaScript
   if (index >= 0 && index < this.letters.length) {
                this.$emit('change',this.letters[index])
                }
   ~~~

   

   优化：减少执行频率,使用timer

<<<<<<< HEAD



## 第十一次提交：城市页面的搜索部分实现

功能:搜索的时候显示相关的城市，如果数量够多还可以实现滚轮的效果。（div）v-show scroll,如果没有内容就不显示。

v-show=“keyword”

如果没有找到相关的城市，就显示没有找到数据。（div）用v-show表示显示或不显示

~~~html
v-show="hasNoData"
computed:{
hasNoData () {
return this.list.length
}
}
~~~



主逻辑：

搜索的内容可以用v-model绑定到keyword里，

search 接受 cities。

然后监听keyword。

如果keyword改变了，我们就遍历数组cities看有没有这个，如果由就放在list里，然后展示list里的数据。

~~~javascript
const result = []
        for(let i in this.cities) {
          this.cities[i].forEach((element) => {
            if(element.spell.indexOf(this.keyword) > -1||element.name.indexOf(this.keyword) > -1){
              result.push(element)
            }
~~~



但是只要你输入过keyword，那么list里就会有内容，即使我们删除掉keyword还是会有，因此我们要有判断。

~~~javascript
if(!this.keyword){
        this.list = []
        return
      }
~~~

## 第十二次提交 Vuex实现数据共享

实现在城市页面选择城市首页的城市也会跟着改变

Home和City组件之间数据的传递

bus

vuex

![image-20220412172121193](https://raw.githubusercontent.com/HYHL0909/images/main/202204121721642.png)

vuex是共享的数据仓库，state存放数据。

组件要去改变state里的数据，只能通过dispatch调用action，action通过commit调用mutations，或者数据比较简单，组件直接通过commit调用mutation。

~~~js
export default new Vuex.Store({
  state: {
    city: '南京'
  },
  actions:{
    changeCity (ctx,city) {
        ctx.commit('changeCity',city)
    }
  },
  mutations:{
      changeCity(state,city){
          state.city = city
      }
  }
})
~~~



安装

让我们来创建一个 store

~~~JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  }
})
~~~



功能，首页的城市是北京，点进去当前城市也要是北京，这就是共享哪个数据库（vuex）就可以了

我们通过点击热门城市去改变store里的数据。而且要进入首页

进入首页用vue-router

~~~js
this.$router.push('/') 
~~~



点击城市列表也可以进行城市的切换

点击城市页面里的搜索的城市也要能城市的切换





上面功能实现的缺陷：

我们store里state 中city默认的值是南京，因此，尽管我们选择的是北京，但是一刷新，就又回到南京，我们应该实现的是让它能够记住自己上次所选择的。

利用localStorage存储选择的城市。

记住localStorage外面最好包裹一层throw catch

然后store里index.js 太大了，我们将他们拆分。

vuex代码优化。

mapState

~~~js
this.$store.state.city //插件，包括router都可以使用$使用。
~~~

~~~javascript
<script>
import { mapState } from 'vuex'
export default {
  name: 'Homeheader',
  computed:{
    ...mapState(['city'])
        }//该组件有个计算属性叫做city，它是映射state里的city。//相当于
 //  computed:{
   // ...mapState({
   //   city:'city'
   // })
 // }    
//因此我们 this.city = this.$store.state.city 

}
</script>
~~~



mapMutation

~~~JavaScript
this.$store.commit('changeCity',city) 
//用下列代替
this.changeCity(city)

~~~

~~~javascript
  methods: {
      handleCityClick(city){
        this.changeCity(city)
         this.$router.push('/') 
      },
      ...mapMutations(['changeCity'])
  },
~~~



getters,：类似于计算属性的作用。假如要根据state获得一些计算属性时，可以to



## 第十三次提交 ：城市选择页使用keep-alive优化网页性能。

![image-20220412223547451](https://raw.githubusercontent.com/HYHL0909/images/main/202204122235713.png)

从主页到城市页面就得请求一次数据，这使得性能很差。

为什么会每次切换都有请求呢。

因为每次路由我们都会重新渲染，就会执行mounted。

因此我们使用keepalive

将router 包裹起来。

~~~html
    <keep-alive>
      <router-view/>
    </keep-alive>
~~~



当选择北京时，首页的内容应该改成相应的内容。

但是因为我们上面使用了keepalive，则会缓存，因此我们无法更新首页的数据。

但是因为我们用了keepalive，则组件会多了一个方法 activated。

当我们在首页添加了activated函数，则每次回到首页都会执行activated

我们在activated里判断一下城市是否有改变

如果改变了再去请求ajax。

~~~JavaScript
  activated () {
    if (this.lastCity!== this.city){
      this.getHomeInfo()
      this.lastCity = this.city
    }
  }
~~~

## 十四次提交：detail-banner

画廊组件：使用swider，pagination 使用fraction实现分页器。

点击进入详情页，使用router-link

## 第十五次提交：detail-header

实现一个滚动时上面的header若隐若现，用opacity。

因为keepalive的组件会有activated，因此我们使用activated，对事件进行绑定，同时，要记得解绑事件。

~~~js
 activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
~~~

## 第十六次提交：detail-list

使用递归组件实现详情页的列表

## 第十七次提交：detail-ajax

ajax 请求

在主页上访问而不是组件。

导入包

在mounted里发送请求

要将路由中的参数带给后端的做法：

~~~js
 mounted () {
      this.getDetailInfo() 
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json',{
                params: {
                    id:this.$route.params.id
                }
            })

        }
    }
~~~



$router 

和$route 不一样的。

因为是keepalive，所以每次只会执行一次mounted请求。因此我们可以配合使用activated方法。

或者另外一种方法就是我们不把它包进去。

~~~html
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
~~~

所有组件都会被缓存，除了detail页面。



组件名字的用处：

1. 递归
2. 缓存排除
3. vue开发工具。



首页拖到下面再进详情页，详情页也会被拖到下面。

使用vue-router的滚动行为解决

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

回到顶部

~~~js
  scrollBehavior (to, from, savedPosition) {
    return { x:0,y:0}
  }
~~~

