var gulp = require('gulp');
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

module.exports = function() {

	var sassOptions = {
		outputStyle: "compressed",
		includePaths: "./node_modules/compass-mixins/lib/"
	};

	var task = gulp.src("./src/sass/natalia.sass")
	// .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css"));

	return task;
};
