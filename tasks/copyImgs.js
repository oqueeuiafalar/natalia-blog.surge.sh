var gulp = require('gulp');

module.exports = function() {

	var task = gulp.src(['./src/img/**/*'])
		.pipe(gulp.dest('./dist/img'));
	
	return task;
};
