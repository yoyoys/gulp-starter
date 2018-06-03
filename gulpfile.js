const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
})


gulp.task('js', function(){
  return gulp.src('src/**/*.js')
    .pipe(gulp.dest('dist'))
})


gulp.task('css', function(){
  return gulp.src('src/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'not ie < 10'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['html', 'js', 'css'])