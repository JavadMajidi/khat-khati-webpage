var gulp = require ('gulp'),
postcss = require ('gulp-postcss'),
autoprefixer = require('autoprefixer'),   //s4l10
cssvars = require ('postcss-simple-vars'),
nested = require ('postcss-nested'),
cssImport = require('postcss-import'),   //s5l11//s4l10
mixins = require('postcss-mixins');  //s7l17

gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo){ //s6l16 how to gulp error handeling
    console.log(errorInfo.toString()); // setting for showing the error on console
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
