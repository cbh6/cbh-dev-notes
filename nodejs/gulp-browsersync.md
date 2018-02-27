# Gulp + BrowserSync

[Docs](https://browsersync.io/docs/gulp)

```shell
npm install --save-dev gulp browser.sync
```

Default gulpfile (simplest)

```javascript
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./libs/templates/"
    });

    gulp.watch("./libs/templates/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
```

Example with sass + css injecting (from docs)

```javascript
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
```

More examples in docs