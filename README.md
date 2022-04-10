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
<<<<<<< HEAD
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
