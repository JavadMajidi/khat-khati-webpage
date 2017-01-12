var gulp = require ('gulp'),
watch = require ('gulp-watch'),
postcss = require ('gulp-postcss'),         //s4l10
autoprefixer = require('autoprefixer'),     //s4l10
cssvars = require ('postcss-simple-vars'), //s4l10
nested = require ('postcss-nested'),
cssImport = require('postcss-import'),      //s5l11
browserSync = require('browser-sync');      //s6l14

gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir:"app"
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css',function(){
  gulp.start('cssInject');
  });
 });

 gulp.task('styles',function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
   .pipe(gulp.dest('./app/temp/styles'));
 });

//s6l14-8:00
gulp.task('cssInject',['styles'],function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
