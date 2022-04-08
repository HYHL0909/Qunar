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
