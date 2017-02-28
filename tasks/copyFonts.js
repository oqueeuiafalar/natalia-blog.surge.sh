var gulp = require('gulp');

module.exports = function() {

	var task = gulp.src(['./src/fonts/**/*'])
		.pipe(gulp.dest('./dist/fonts'));

	return task;
};
