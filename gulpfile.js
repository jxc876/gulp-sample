var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
// var runSequence = require('run-sequence');


var paths = {
  scripts: './src/js/**/*.js',
  less: './src/js/**/*.less'
};

gulp.task('clean', function() {
  return del(['dist']);
});
 
gulp.task('less', ['clean'], function () {
  return gulp.src('./src/css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', ['clean'], function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['js']);
  gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['clean', 'less', 'js']);