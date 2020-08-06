const gulp=require("gulp");
const { series } = require('gulp');
const scss=require('gulp-sass');
const minifycss=require('gulp-minify-css');
const rename=require('gulp-rename');
gulp.task('hello',async function(){
   await console.log("gulp ready!");
    
})
gulp.task('copyhtml',function(){
    return gulp.src(["*.html"])
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})
gulp.task('copycss',function(){
    return gulp.src(["css/*.scss"]).pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('index1.mini.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyjs',function(){
    return gulp.src(["js/*.js"])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})
const uglify=require('gulp-uglify');
gulp.task('copyindexjs',function(){
    return gulp.src(["js/index.js"])
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
    ;
})
gulp.task('copyimg',function(){
    return gulp.src(["img/*.jpg"])
    .pipe(gulp.dest('dist/img'))
    .pipe(connect.reload());
})

gulp.task('copydata',gulp.series('copyhtml','copycss','copyjs','copyindexjs','copyimg',async function(){
await console.log('data has been copied already!');
}))
gulp.task('watch',function(){
    gulp.watch('*.html',gulp.parallel(['copyhtml']));
    gulp.watch('css/*.scss',gulp.parallel(['copycss']));
    gulp.watch('js/*.js',gulp.parallel(['copyjs']));
    gulp.watch('img/*.jpg',gulp.parallel(['copyimg']));
    gulp.watch('js/index.js',gulp.parallel(['copyindexjs']));
}
    
)
const connect=require('gulp-connect');
gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:8888,
        livereload:true
    })
})
gulp.task('default',gulp.series(gulp.parallel('server','watch')));