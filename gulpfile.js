var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css');

gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('calc.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function() {
	gulp.src('css/*.css')
		.pipe(cleanCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css/'));
});

gulp.task('default', ['scripts', 'styles']);