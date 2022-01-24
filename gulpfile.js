const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');

gulp.task('default', function() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/app.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify, { noImplicitAny: true })
        .bundle().on('error', (e) => console.log(e))
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});
