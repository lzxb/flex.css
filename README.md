# flex.css
====

### 简介
```
flex.css，轻量级移动端布局神器，
让你用最快的速度，
并且用最优雅的方式完成复杂的移动端布局，
让你专注于编写内容呈现效果，
完美兼容Android，ios，微信端
```

### 兼容性
```
flex布局分为旧版本dispaly: box;，过渡版本dispaly: flexbox;，以及现在的标准版本display: flex;
Android 
  2.1 开始就支持旧版本 display:-webkit-box;
  4.4 开始支持标准版本 display: flex;
  
IOS 
  6.0 开始支持旧版本 display:-webkit-box;
  7.0 开始支持标准版本 display: flex;

flex.css同时能兼容新版本和旧版本，保证了浏览器不支持新版本时，回退到旧版本。
```  

### 使用
```
可以根据自己的需要，使用不同的属性版本来进行匹配布局
flex.css 使用flex属性匹配
data-flex 使用data-flex属性匹配（React使用）
```
```html
<!-- 简单的子元素居中例子： -->
<div flex="main:center cross:center" style="width:500px; height: 500px; background: #222">
  <div style="background: #fff">看看我是不是居中的</div>
</div>
```

### 其他
```
深圳html5开发者社群：170761660
NodeJS前端分享群：133240225
```

### demo.html测试截图
![Alt text](shot/doc.png)
