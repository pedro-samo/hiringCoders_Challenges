const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


function sassCompilation() {
  return gulp
  .src('src/style/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dist/'))
}

function gulpJs() {
  return gulp
  .src('src/js/*.js')
  .pipe(concat('Newsletter-home.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/'))
}

function gulpWatch() {
  gulp.watch('src/style/*.scss', sassCompilation)
  gulp.watch('src/js/*.js', gulpJs)
}

exports.sassCompilation = sassCompilation;
exports.gulpJs = gulpJs;
exports.gulpWatch = gulpWatch;

exports.default = gulp.parallel(gulpWatch, sassCompilation, gulpJs);