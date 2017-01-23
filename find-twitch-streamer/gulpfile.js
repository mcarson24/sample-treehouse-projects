var gulp    = require('gulp'),
    browser = require('gulp-browser'),
    rename  = require('gulp-rename'),
    sass    = require('gulp-sass'),
    maps    = require('gulp-sourcemaps');

gulp.task('buildScripts', () => {
    gulp.src('scripts/main.js')
        .pipe(maps.init())
        .pipe(browser.browserify())
        .pipe(rename('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

gulp.task('buildStyles', () => {
    gulp.src('scss/app.scss')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', () => {
    gulp.watch('scripts/**/*.js', ['buildScripts']);
    gulp.watch('scss/**/*.scss', ['buildStyles']);
});