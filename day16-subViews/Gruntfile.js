'use strict';

var vendor = require("./public/js/vendor.json");

module.exports = function (grunt) {

  var config = {
    dust: {
      amd: {
        files: {
          'public/js/lib/compiled-amd.js': './templates/**/*.dust'
        },
        options: {
          wrapperOptions: {
            deps: {
              'dust': 'dustjs-linkedin'
            }
          },
          runtime: false,
          useBaseName: true
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: 35729
      },
      js: {
        files: ['public/js/*.js'],
        options: {
          livereload: true
        }
      },
      dust: {
        files: ['views/**/*.dust'],
        tasks: ['dust:amd'],
        options: {
          livereload: true
        }
      }
    },
    symlink: {
      vendors: {
        files: [
          {
            expand: true,
            cwd: 'node_modules',
            src: vendor.paths,
            dest: 'public/js/vendor'
          }
        ]
      }
    }
  };

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('server', 'Start a custom web server', function() {
      grunt.log.writeln('Started web server on port 3000');
      require('./server.js');
  });

  grunt.initConfig(config);
  grunt.registerTask('default', ['server', 'watch']);
  grunt.registerTask('dist', ['symlink', 'dust']);

};
