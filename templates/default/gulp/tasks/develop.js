"use strict";

var runSequence = require('run-sequence');

module.exports = (function() {
  /**
   * Gulp Develop task used when developing your application
   */
  gulp.task('develop', function(cb) {
    runSequence(['lint', 'less', 'templates'], 'browserify', 'serve-assets', 'serve', 'karma', cb);
  });
})();
