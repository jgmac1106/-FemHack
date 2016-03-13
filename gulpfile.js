var gulp 		= require ('gulp'),
	uglify		= require ('gulp-uglify'),
	gutil		= require ('gulp-util'),
	source		= require ('vinyl-source-stream'),
	browserify	= require ('browserify'),
	watchify	= require ('watchify'),
	babelify	= require ('babelify'),
	browserSync = require('browser-sync'),
	buffer 		= require('vinyl-buffer');
	reload 		= browserSync.reload,
	stylus		= require('gulp-stylus'),
	autoprefixer= require('gulp-autoprefixer'),
	historyApiFallback = require('connect-history-api-fallback');
/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
	browserSync({
		// we need to disable clicks and forms for when we test multiple rooms
		server : {},
		middleware : [ historyApiFallback() ],
		ghostMode: false
	});
});

gulp.task('styles',function() {
	// move over fonts
	// gulp.src('css/fonts/**.*') // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
	// 	.pipe(gulp.dest('build/css/fonts'));  // Writes 'build/somedir/somefile.js'

	// Compiles CSS
	gulp.src('css/style.styl')
		.pipe(stylus({
			compress:true
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./build/css/'))
		.pipe(reload({stream:true}))
});

/*
  Images
*/
gulp.task('images',function(){
	gulp.src('css/images/**')
		.pipe(gulp.dest('./build/css/images'))
});


gulp.task('default',['browser-sync','images','styles'],function(){
	var bundler = watchify(browserify('./src/index.js').transform("babelify", {presets: ["es2015", "react"]}));
	
	function build(file){
		if(file) gutil.log('Recompiling '+file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Broserify Error'))
			.pipe(source('main.js'))
			// .pipe(buffer())
			// .pipe(uglify())
			.pipe(gulp.dest('./build/scripts'))
			.pipe(reload({stream:true}))
	};

	build()
	gulp.watch('css/**/*', ['styles']); // gulp watch for stylus changes
	bundler.on('update',build)
})