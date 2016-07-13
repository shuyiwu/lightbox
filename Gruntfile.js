'use strict';
module.exports = function(grunt) {
	grunt.initConfig({});
	require('load-grunt-tasks')(grunt);
	require('./grunt/jshint')(grunt);
	require('./grunt/clean')(grunt);
	require('./grunt/copy')(grunt);
	require('./grunt/merge')(grunt);
  require('./grunt/mocha')(grunt);
	require('./grunt/sass')(grunt);
	require('./grunt/uglify')(grunt);
	require('./grunt/connect')(grunt);
	require('./grunt/open')(grunt);
	require('./grunt/watch')(grunt);
	require('./grunt/reload')(grunt);
	require('./grunt/clean-dist')(grunt);
	grunt.registerTask('default', ['start']);
	grunt.registerTask('start', function() {
		grunt.task.run(['clean:dist', 'jshint','uglify', 'sass', 'copy',  'mocha', 'clean-dist', 'connect', 'open', 'watch']);
	});
	grunt.registerTask('build', function() {
		grunt.task.run(['clean:dist', 'jshint', 'uglify', 'sass', 'copy', 'mocha', 'clean-dist']);
	});
	grunt.registerTask('rebuild', function() {
		grunt.task.run(['clean:dist', 'uglify', 'sass', 'copy', 'clean-dist']);
	});
  grunt.registerTask('test', function(){
    grunt.task.run(['mocha']);
  });
  grunt.registerTask('run', function(){
    grunt.task.run(['connect', 'open', 'watch']);
  });
};
