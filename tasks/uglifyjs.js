var gulp = require('gulp');
var uglifyjs = require("gulp-uglifyjs");

module.exports = function() {

	var javascriptListFiles = [
		// "./node_modules/angular/angular.min.js", //arguments[0];for(e="["+(t?t+":":"")+n+
		"./node_modules/frontpress/release/frontpress.js",
		"./src/javascript/**/*.module.js",
		"./src/javascript/**/*.js"
	];

	var task = gulp.src(javascriptListFiles)
    	.pipe(uglifyjs("natalia.js"))
    	.pipe(gulp.dest("./dist/javascript"));

	return task;
};
