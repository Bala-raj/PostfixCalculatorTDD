// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
        'war/lib/jquery*.js',
	    'war/lib/**/*.js',
	    'war/js/**/*.js',
	    'spec/**/*.js'
	  ]
  });
};