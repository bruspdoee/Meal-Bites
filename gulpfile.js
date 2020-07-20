var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', function(){
    gulp.watch('public/assets/scss/**/*.scss', gulp.series('sass'));
  });

gulp.task('sass', function(){
    return gulp.src('public/assets/scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('public/assets/css'))
});