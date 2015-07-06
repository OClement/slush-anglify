"use strict";

var less = require('gulp-less'),
  runSequence = require('run-sequence'),
  concat = require('gulp-concat');

module.exports = (function() {
  /**
   * Gulp Less. Compiles less into CSS and bundles it for distribution
   */
  gulp.task('less', function() {
    gulp.src([
        './node_modules/bootstrap/less/bootstrap.less',
        './app/less/*.less'
      ])
      .pipe(less())
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./dist/css'));
  });

  /**
   * Gulp task to watch templates
   */
  gulp.task('watchStyles', function(cb) {
    runSequence(['less'], 'serve-assets', cb);
  });

  /*
   * Setup watch for templates
   */
  gulp.watch('./app/less/**/*.less', ['watchStyles']);
})();
