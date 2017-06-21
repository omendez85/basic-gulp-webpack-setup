var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('./gulp/config');

gulp.task('styles', require('./gulp/tasks/sass').styles(gulp, config));
gulp.task('stylesVendor', require('./gulp/tasks/sass').stylesVendor(gulp, config));
gulp.task('stylesMin', require('./gulp/tasks/sass').stylesMin(gulp, config));

gulp.task('server', require('./gulp/tasks/server').server(gulp, connect, config));

gulp.task('reloadSite', require('./gulp/tasks/server').reloadSite(gulp, connect, config));

gulp.task('webpack', require('./gulp/tasks/webpack')(gulp, config));

gulp.task('mustache', require('./gulp/tasks/mustache')(gulp, config));

gulp.task('stylesAll', ['styles', 'stylesVendor']);

gulp.task('watch', function () {
    gulp.watch( config.paths.src.scss.styles + '**/*.scss', ['styles']);
    gulp.watch( config.paths.src.scss.vendor + '**/*.scss', ['stylesVendor']);
    gulp.watch( config.paths.src.main + '**/*.{js,jsx}', ['webpack']);
    gulp.watch( config.paths.app + '**/*.*', ['reloadSite']);
    gulp.watch( config.paths.src.main + '*.mustache', ['mustache']);
});

gulp.task('build:prod', ['stylesMin', 'stylesVendor']);

gulp.task('default', ['mustache', 'stylesAll', 'webpack', 'server', 'watch']);
