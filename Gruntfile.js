'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-react");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      app: {
        options: {
          transform: [
            require('grunt-react').browserify
          ],
          bundleOptions: {
            debug: true
          }
        },

        src: './src/main.jsx',
        dest: './www/empire.js',
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'www',
          livereload: true,
          open: true
        }
      }
    },

    watch: {
      src: {
        files: './src/**/*',
        tasks: ["build"],
        options: {
          livereload: true
        }
      }
    },
  });

  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('default', []);
};
