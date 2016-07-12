'use strict';
module.exports = function(grunt) {
  grunt.config.set('mocha', {
    all: {
      src: ['tests/testRunner.html']
    },
    options: {
      run: true
    }
  });
};
