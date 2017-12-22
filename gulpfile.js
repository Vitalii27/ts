'use strict';

const gulp = require('gulp');

function lazyRequireTask(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);

    return task(callback);
  });
}

lazyRequireTask('html', './gulp-tasks/html', {
	src: 'frontend/*.html',
	dst: 'public'
});

lazyRequireTask('styles', './gulp-tasks/styles', {
  src: 'frontend/scss/*.scss',
	dst: 'public/assets/css'
});

lazyRequireTask('js', './gulp-tasks/js', {
	src: 'frontend/js/*.js',
	dst: 'public/assets/js'
});

lazyRequireTask('clean', './gulp-tasks/clean', {
  dst: 'public'
});


lazyRequireTask('assets', './gulp-tasks/assets', {
  src: 'frontend/assets/**',
  dst: 'public/assets'
});

lazyRequireTask('serve', './gulp-tasks/serve', {
	src: 'public'
});

lazyRequireTask('lint', './gulp-tasks/lint', {
	cacheFilePath: process.cwd() + '/tmp/lintCache.json',
	src: 'frontend/**/*.js'
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('html', 'styles', 'js', 'assets'))
);

gulp.task('watch', function() {
  gulp.watch('frontend/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('frontend/js/**/*.js', gulp.series('js'));
  gulp.watch('frontend/*.html', gulp.series('html'));
  gulp.watch('frontend/include/**/*.html', gulp.series('html'));
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task('dev',
		gulp.series('build', gulp.parallel('watch', 'serve'))
);

