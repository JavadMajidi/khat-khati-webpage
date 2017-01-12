var gulp = require ('gulp'),
watch = require ('gulp-watch'),
postcss = require ('gulp-postcss'),         //s4l10
autoprefixer = require('autoprefixer'),     //s4l10
cssvars = require ('postcss-simple-vars'), //s4l10
nested = require ('postcss-nested'),
cssImport = require('postcss-import'); //s5l11


gulp.task('styles',function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});


  watch('./app/assets/styles/**/*.css',function(){
    gulp.start('styles');
  });
});
