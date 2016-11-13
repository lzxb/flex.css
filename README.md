  [![npm](https://img.shields.io/npm/v/flex.css.svg?style=flat-square)](https://www.npmjs.com/package/flex.css) [![npm](https://img.shields.io/npm/dt/flex.css.svg?style=flat-square)](https://www.npmjs.com/package/flex.css) [![npm](https://img.shields.io/npm/l/flex.css.svg?style=flat-square)](https://www.npmjs.com/package/flex.css)

###
[中文文档入口](https://github.com/lzxb/flex.css/blob/master/docs/zh-ch.md)

### download
```
git clone https://github.com/lzxb/flex.css.git
```

### npm
```
npm install flex.css --save
```


### Why do you need flex.css?
```
In the process of Mobile Terminal Development, standard flex is not supported by all versions of all kinds of
browsers, webview, and wechat which basically support  -webkit-box. So flex.css's main purpose is to ensure
that every attribute can be supported by standard version's flex or old-version's -webkit-box.
due to autoprefixer compilation is used by flex.css,it will roll back to old-version's -webkit-box when standard
flex is not supported by some browsers so the effect of layout will be the same.
Then,here comes a magic effient layout tool of mobile terminal development ...
```


###  merits
```
Concise api, 
familiar attribute values, makes it easy for you to get started in using flex.css.
In html, the layout is bind with attributes, so it is seperated from css. In this way, it will be easier for you
to maintain and modify your layout without modifying css.
```


### support
```
flex layout is split into three versions: old version: display: box; , transitional version: display:flexbox; ,
and present standard version: display:flex; .
Android
2.3  began to support old version: display: -webkit-box;
4.4 began to support standard version: display: flex;
IOS
6.1  began to support old version: display: -webkit-box;
7.1 began to support standard version: display: flex;
PC
You can use flex.css if you don't need to consider IE10-.
flex.css is compatible with standard version and old version at the same time, so when a browser doesn't support standard version, it will roll back to old version.

```
![Alt text](https://github.com/lzxb/flex.css/raw/master/shot/caniuse.png)

### use
```html
<!--
According to what you need, include css files in the dist directory into your html
flex.css should be matched by flex attribute
data-flex.css should be matched by data-flex attribute(used by React)
If you use webpack to package, after npm is installed, and ES6 compiler is deployed in your project,
flex attribute matching can be implemented in this way:
import 'flex.css';
data-flex attribute matching can be implemented in this way( used by React):
import 'flex.css/dist/data-flex.css';
 -->
<!-- flex attribute matching，a simple example of centering child element ： -->
  <div flex="main:center cross:center" style="width:500px; height: 500px; background: #108423">
    <div style="background: #fff"> to see if this is in the center </div>
  </div>

<!-- data-flex attribute matching，a simple example of centering child element： -->
  <div data-flex="main:center cross:center" style="width:500px; height: 500px; background: #f1d722">
    <div style="background: #fff"> to see if this is in the center </div>
  </div>
```
### collection of flex attributes
```
dir: axis direction
    top：from top to bottom
    right：from right to left
    bottom：from top to bottom
    left：from left to right( default )
```
```
main：axis align
    right：from right to left
    left：from left to right ( default )
    justify：justify align
    center：center align
```
```
cross：cross axis align
    top：from top to bottom
    bottom：from top to bottom
    baseline：aligned with the height of content
    center：center align
    stretch：cover whole area ( default )
```
```
box：child element setup 
    mean：space is split by child elements equally
    first：spare space is  not given to the first element and split by the rest of child elements equally
    last：spare space is  not given to the last element and split by the rest of child elements equally
    justify：spare space is  not given to both of the first element of each end 
	and split by the rest of child elements equally
```

### flex-box attributes description
```
values range ( 0-10 ), how to asign spare space to individual child element: if the value equals 0,there won't 
be any spare space for this child element.
spare space assignment = current value of flex-box / the sum of all values of child element's flex-box 
```

### demo
 [![demo](https://github.com/lzxb/flex.css/raw/master/shot/QR-code.png)](http://lzxb.github.io/flex.css/)
