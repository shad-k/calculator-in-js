var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	jshint = require('gulp-jshint');

gulp.task('scripts', function() {
	gulp.src(['js/*.js', '!js/*.min.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(rename('calc.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function() {
	gulp.src(['css/*.css', '!css/*.min.css'])
		.pipe(cleanCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);