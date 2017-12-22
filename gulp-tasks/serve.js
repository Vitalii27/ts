'use strict';

const browserSync = require('browser-sync').create();

module.exports = function(options) {

  return function() {

		browserSync.init({
			server: {
				baseDir: options.src,
				directory: true
			}
		});

    browserSync.watch(`${options.src}/**/*.*`).on('change', browserSync.reload);
  };

};
