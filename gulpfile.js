
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');

/**
 * 定义less编译任务
 */
gulp.task('less', function () {
    gulp.src(['src/flex.less', 'src/data-flex.less']) //需要编译的less文件
        .pipe(less())
        .pipe(autoprefixer({ //添加浏览器兼容的前缀
            browsers: '> 0.1%'
        }))
        .pipe(cssmin()) //压缩css
        .pipe(gulp.dest('dist'));
});

/**
 * 当less文件发生改变时，重新编译less
 */
gulp.task('lessWatch', function () {
    gulp.watch('src/*.less', ['less']);
});