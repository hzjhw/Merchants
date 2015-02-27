var gulp = require('gulp');

/** 项目发布相关 */
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');


var coffee = require('gulp-coffee');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var yuidoc = require("gulp-yuidoc");

/** ==================================================== 项目发布 ====================================================*/

var SRCDIR = './app',
  TMPDIR = './.tmp',
  DISTDIR = './dist',
  src = {
    all: [SRCDIR + '/**', TMPDIR + '/**'],
    base: [SRCDIR + '/base/**.js', TMPDIR + '/base/**'],
    demo: [SRCDIR + '/common/**', TMPDIR + '/demo/**'],
    html: [SRCDIR + '/**/*.html'],
    scripts: [SRCDIR + '/**/*.js', TMPDIR + '/**/*.js'],
    styles: [SRCDIR + '/**/*.css', TMPDIR + '/**/*.css']
  },
  dist = {
    all: DISTDIR + '/**',
    html: DISTDIR + '/**/*.html',
    scripts: DISTDIR + '/**',
    styles: DISTDIR + '/**',
    images: DISTDIR + '/images',
    font: DISTDIR + '/font',
    source: DISTDIR + '/vendor'
  };

/** ========================================== 压缩打包 ==============================================================*/
var paths = {};
function doTask(item, debug) {
  for (var key in paths[item]) {
    switch (key) {
      case 'scripts':
        try {
          gulp.task(item + key, function () {
            if (debug) {
              return gulp.src(paths[item].scripts.source)
                .pipe(jshint())
                .pipe(jshint.reporter(stylish))
                .pipe(concat(paths[item].scripts.name))
                .pipe(gulp.dest(paths[item].scripts.dist));
            }
            return gulp.src(paths[item].scripts.source)
              .pipe(concat(paths[item].scripts.name))
              .pipe(uglify())
              .pipe(gulp.dest(paths[item].scripts.dist));
          });
          gulp.start(item + key);
        } catch (e) {
          console.error(item + key + e);
        }
        break;

      case 'styles':
        try {
          gulp.task(item + key, function () {
            return gulp.src(paths[item].styles.source)
              .pipe(minifyCSS({keepBreaks: true}))
              .pipe(concat(paths[item].styles.name))
              .pipe(gulp.dest(paths[item].styles.dist));
          });
          gulp.start(item + key);
        } catch (e) {
          console.error(item + key + e);
        }
        break;

      case 'doc':
        try {
          gulp.task(item + key, function () {
            return gulp.src(paths[item].doc.source)
              .pipe(yuidoc())
              .pipe(gulp.dest(paths[item].doc.dist))
          });
          gulp.start(item + key);
        } catch (e) {
          console.error(item + key + e);
        }
        break;

      case 'images':
        try {
          gulp.task(item + key, function () {
            return gulp.src(paths[item].images.source)
              .pipe(imagemin({optimizationLevel: 5}))
              .pipe(gulp.dest(paths[item].images.dist));
          });
          gulp.start(item + key);
        } catch (e) {
          console.error(item + key + e);
        }
        break;
      default:
    }
  }
}
/*压缩handlebars库*/
paths['handlebars'] = {
  scripts: {
    source: [
      './app/vendor/handlebars/handlebars-debug.js'
    ],
    name: 'handlebars-min.js',
    dist: './app/vendor/handlebars'
  }
}
gulp.task('handlebars', function () {
  doTask('handlebars', true);
});
gulp.task('handlebars.min', function () {
  doTask('handlebars', false);
});


paths['base'] = {
  scripts: {
    source: [
      './app/vendor/seajs/sea.js',
      './app/vendor/seajs/seajs-text-debug.js',
      './app/src/Application.js'
    ],
    name: 'base.js',
    dist: './app/scripts'
  }
}
gulp.task('base', function () {
  doTask('base', true);
});
gulp.task('base.min', function () {
  doTask('base', false);
});

/*[1]APP*/
paths['merge'] = {
  scripts: { source: ['./app/src/zepto.min.js', './app/src/fx.js', './app/src/clickable.js', './app/src/swapper.js', './app/src/scrollable.js',
    './app/src/utils.js', './app/src/dialog.js', './app/src/events.js', './app/src/form.js', './app/src/metrics.js', './app/src/scroll.js',
    './app/src/pages.js', './app/src/stack.js', './app/src/transitions.js', './app/src/navigation.js' , './app/src/scroll-fix.js', './app/src/api.js'
  ], dist: './app/src', name: 'app.js' }
}
gulp.task('merge', function () {
  doTask('merge', true);
});
gulp.task('merge.min', function () {
  doTask('merge', false);
});
/*压缩handlebarsHelper帮助类*/
paths['HandlebarsHelper'] = {
  scripts: {
    source: [
      './app/vendor/handlebars/HandlebarsHelper.js'
    ],
    name: 'HandlebarsHelper.js',
    dist: './app/scripts/helper'
  }
}
gulp.task('HandlebarsHelper', function () {
  doTask('HandlebarsHelper', true);
});
gulp.task('HandlebarsHelper.min', function () {
  doTask('HandlebarsHelper', false);
});
/*包装define*/
paths['app'] = {
  scripts: { source: ['./app/src/define_pre.js', './app/src/app.js', './app/src/define_last.js'
  ], dist: './app/lib', name: 'app.js' },
  styles: {
    source: [
      './app/src/stylesheet/base.css',
      './app/src/stylesheet/app.css'
    ],
    name: 'base.css',
    dist: './app/styles'
  }
}
gulp.task('app', function () {
  doTask('app', true);
});
gulp.task('app.min', function () {
  doTask('app', false);
});

gulp.task('local', function(){
  return [gulp.start('base'), gulp.start('HandlebarsHelper'), gulp.start('merge'), gulp.start('app')];
});

// publish
gulp.task('publish', function () {
  return [gulp.start('base.min'), gulp.start('HandlebarsHelper.min'), gulp.start('merge.min'), gulp.start('app.min')];
});

