# flex
移动端flex布局神器，兼容微信，UC，webview等移动端主流浏览器
下载后，使用谷歌浏览器打开
<strong>必看问题：移动端不能完整的支持flex布局？</strong>
<br> flex是一个非常好的css3布局，但是在移动端很多浏览器不支持display: flex，仅支持display: -webkit-box，所以flex.css写了三种语法：
<br> display: -webkit-box;
<br> display: -webkit-flex;
<br> display: flex;
<br> 只需要调用flex.css相关的class，就能保证兼容移动端各种主流浏览器，微信端和webview上完美运行。
