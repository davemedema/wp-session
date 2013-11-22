/*
 * wp-session
 * https://github.com/davemedema/wp-session
 *
 * Copyright (c) 2013 Dave Medema
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // ---
  // Configuration

  grunt.initConfig({

    // package.json
    pkg: grunt.file.readJSON('package.json'),

    // `bumpup`
    bumpup: {
      options: {
        updateProps: {
          pkg: 'package.json'
        }
      },
      file: 'package.json'
    },

    // `jshint`
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js'
      ]
    },

    // `tagrelease`
    tagrelease: {
      file: 'package.json'
    }

  });

  // ---
  // npm tasks

  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-gitadd');
  grunt.loadNpmTasks('grunt-tagrelease');

  // ---
  // Task aliases

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('r', ['release']);
  grunt.registerTask('release', function(type) {
    grunt.task.run('bumpup:' + (type || 'patch'));
    grunt.task.run('gitadd');
    grunt.task.run('tagrelease');
  });

};
