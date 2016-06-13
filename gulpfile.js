var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");

/**
 * 定义less编译任务，命令：gulp less
 */
gulp.task('less', function () {
    gulp.src(['src/flex.less', 'src/data-flex.less']) //需要编译的less文件
        .pipe(less())
        .pipe(autoprefixer({ //添加浏览器兼容的前缀
            browsers: '> 0.1%'
        }))
        .pipe(cssmin()) //压缩css
        .pipe(rename(function (path) {
            path.extname = '.min.css'; //文件名.min.css
        }))
        .pipe(gulp.dest('dist')); //编译后输出目录
});

/**
 * 当less文件发生改变时，重新编译less，命令：gulp lessWatch
 */
gulp.task('lessWatch', function () {
    gulp.watch('src/*.less', ['less']);
});