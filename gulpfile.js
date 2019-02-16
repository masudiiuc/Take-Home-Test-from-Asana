var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var template    = require('gulp-template-compile');
var concat      = require('gulp-concat');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/app/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/build/css"))
        .pipe(browserSync.stream());
});

gulp.task('app-js', function() {
    return gulp.src(['src/app/js/pets_gallary.js', 'src/app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest("src/build/js"))
        .pipe(browserSync.stream());
});


// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/lodash/lodash.min.js'
        ])
        .pipe(gulp.dest("src/build/js/libs"))
        .pipe(browserSync.stream());
});

gulp.task('build-template', function () {
    return gulp.src('src/app/templates/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('src/build/template/'));
});


// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', 'app-js', 'build-template', function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/app/scss/*.scss'], gulp.series('sass'));
    gulp.watch(['src/app/js/*.js'], gulp.series('app-js'));
    gulp.watch(['src/app/templates/*.html'], gulp.series('build-template'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('js', 'serve', function (){

}));
