var gulp 		= require ('gulp'),
	stylus		= require('gulp-stylus'),
	autoprefixer= require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload 		= browserSync.reload;


gulp.task('styles',function() {
	// move over fonts
	gulp.src('css/fonts/**.*') // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
		.pipe(gulp.dest('build/css/fonts'));  

	// Compiles CSS
	gulp.src('src/css/style.styl')
		.pipe(stylus({}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./build/css/'))
		.pipe(reload({stream:true}))
});

/*
  Images
*/
gulp.task('images',function(){
	gulp.src('src/css/images/**')
		.pipe(gulp.dest('./build/css/images'))
});


gulp.task('default',['images','styles'],function(){
	gulp.watch('src/css/**/*', ['styles']); // gulp watch for stylus changes
})