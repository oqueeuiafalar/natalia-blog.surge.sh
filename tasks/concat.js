var gulp = require('gulp');
var concat = require("gulp-concat");

module.exports = function() {

	var javascriptListFiles = [
		"./node_modules/angular/angular.js", 
		"./node_modules/frontpress/release/frontpress.js",
		"./src/javascript/**/*.module.js",
		"./src/javascript/**/*.js"
	];

	var task = gulp.src(javascriptListFiles)
    	.pipe(concat("natalia.js"))
    	.pipe(gulp.dest("./dist/javascript"));

	return task;
};
