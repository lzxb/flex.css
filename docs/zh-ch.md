  [![npm](https://img.shields.io/npm/v/flex.css.svg?style=flat-square)](https://www.npmjs.com/package/flex.css) [![npm](https://img.shields.io/npm/dt/flex.css.svg?style=flat-square)](https://www.npmjs.com/package/flex.css) [![npm](https://img.shields.io/npm/l/flex.css.svg?style=flat-square)](https://www.npmjs.com/package/flex.css)


### download
```
git clone https://github.com/lzxb/flex.css.git
```

### npm
```
npm install flex.css --save
```


### 为什么需要flex.css?
```
在移动端开发中，并不是所有的浏览器，webview，微信等各种版本都支持标准的flex，
但是基本上都会支持-webkit-box，所以flex.css的主要作用是保证每一个属性都能支持标准flex或旧版本的-webkit-box。
由于flex.css采用了autoprefixer编译，所以能够保证在浏览器不支持标准flex布局的情况下，
回滚到旧版本的-webkit-box，保证移动设备中能呈现出一样的布局效果。
于是，一款移动端快速布局的神器诞生了...
```


###  merits
```
简洁的api，熟悉的属性值，入门毫无压力。
在html中采用属性的方式布，将布局和css进行分离，清晰的布局结构让你更容易维护，可以在不更改css的情况下更改布局。
特别是在React中使用data-flex属性布局，维护起来更加的方便。
```


### support
```
flex布局分为旧版本dispaly: box;，过渡版本dispaly: flexbox;，以及现在的标准版本display: flex;

Android
  2.3 开始就支持旧版本 display:-webkit-box;
  4.4 开始支持标准版本 display: flex;

IOS
  6.1 开始支持旧版本 display:-webkit-box;
  7.1 开始支持标准版本 display: flex;

PC
  如果你不需要兼容ie10以下版本，也是可以使用flex.css

flex.css同时能兼容新版本和旧版本，保证了浏览器不支持新版本时，回退到旧版本。
```
![Alt text](https://github.com/lzxb/flex.css/raw/master/shot/caniuse.png)

### use
```html
<!--
  将dist目录下的css文件引入到你的页面中，根据你的需要引入
  flex.css 使用flex属性匹配
  data-flex.css 使用data-flex属性匹配（React使用）
  如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，
  flex 属性匹配可以直接使用：
    import 'flex.css';
  data-flex 属性匹配可以直接使用(react使用)
    import 'flex.css/dist/data-flex.css';
 -->
<!-- flex属性匹配，简单的子元素居中例子： -->
  <div flex="main:center cross:center" style="width:500px; height: 500px; background: #108423">
    <div style="background: #fff">看看我是不是居中的</div>
  </div>

<!-- data-flex属性匹配，简单的子元素居中例子： -->
  <div data-flex="main:center cross:center" style="width:500px; height: 500px; background: #f1d722">
    <div style="background: #fff">看看我是不是居中的</div>
  </div>
```
### flex属性大全
```
dir：主轴方向
    top：从上到下
    right：从右到左
    bottom：从上到下
    left：从左到右（默认）
```
```
main：主轴对齐方式
    right：从右到左
    left：从左到右（默认）
    justify：两端对齐
    center：居中对齐
```
```
cross：交叉轴对齐方式
    top：从上到下
    bottom：从上到下
    baseline：跟随内容高度对齐
    center：居中对齐
    stretch：高度并排铺满（默认）
```
```
box：子元素设置
    mean：子元素平分空间
    first：第一个子元素不要多余空间，其他子元素平分多余空间
    last：最后一个子元素不要多余空间，其他子元素平分多余空间
    justify：两端第一个元素不要多余空间，其他子元素平分多余空间
```

### flex-box属性说明
```
取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间
多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和
```
### adviertisement
```
深圳html5开发者社群：170761660
NodeJS前端分享群：133240225
```

### demo
 [![demo](https://github.com/lzxb/flex.css/raw/master/shot/QR-code.png)](http://lzxb.github.io/flex.css/)
