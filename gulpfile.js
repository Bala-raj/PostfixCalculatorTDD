var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
 
gulp.task('default', function () {
    return gulp.src('spec/CalculatorServiceTest.js')
        .pipe(jasmine());
});

//var gulp = require('gulp');
var karma = require('karma').server;
var isTravis = process.env.TRAVIS || false;
var pathToKarmaConf = __dirname.replace('/gulp', '');

module.exports = gulp.task('test', function (done) {
  karma.start({
    configFile: pathToKarmaConf + '/karma.conf.js',
    singleRun: isTravis
  }, done);
});
