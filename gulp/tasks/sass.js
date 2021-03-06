var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sassGlobbing = require('node-sass-globbing');

var styles = function (gulp, config) {
  return function () {
    gulp.src([
      config.paths.src.scss.styles + 'main.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      precision: 14,
      outputStyle: 'expanded',
      importer: sassGlobbing
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.dist.css));
  }
}

var stylesMin = function (gulp, config) {
  return function () {
    gulp.src([
      config.paths.src.scss.styles + 'main.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      importer: sassGlobbing
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.dist.css))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.paths.dist.css));
  }
}

var stylesVendor = function (gulp, config) {
  return function () {
    gulp.src([
      config.paths.src.scss.vendor + 'vendor.scss'
    ])
    .pipe(concat('vendor.min.css'))
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed',
      precision: 14
    }))
    .pipe(gulp.dest(config.paths.dist.css));
  }
};

module.exports.styles = styles;
module.exports.stylesMin = stylesMin;
module.exports.stylesVendor = stylesVendor;
