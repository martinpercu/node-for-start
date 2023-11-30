const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(callback) {
    console.log('Building our site');
    setTimeout(callback, 5200);
    // callback();
});

gulp.task('serve', function(callback) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
}); 

gulp.task('default', gulp.series('build', 'serve'));