var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('watch_scss', function(){
    gulp.src('../sass/**/*.scss')
        .pipe(watch('../sass/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css'));
});

gulp.task('watch', ['watch_scss']);

gulp.task('default', ['watch']);