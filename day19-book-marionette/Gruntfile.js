'use strict';

var vendor = require("./public/js/vendor.json");

module.exports = function (grunt) {

  var config = {
    dust: {
      amd: {
        files: {
          'public/js/lib/compiled-amd.js': './views/**/*.html'
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
    },
    // connect: {
    //   options: {
    //     port: 9000,
    //     // Change this to '0.0.0.0' to access the server from outside
    //     hostname: 'localhost'
    //   }
    // },
    connect: {
        options: {
          // port: 9000,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        },
      test: {
        options: {
          port: 9001,
          base: ['tests'  ]
        }
      }
    },
    mocha_phantomjs: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.options.hostname %>:<%= connect.test.options.port %>/index.html']
        }
      }
    },

    // Mocha
    mocha: {
      test: {

        src: ['tests/index.html'],

        options: {
          port: 9002,

          reporter: 'Nyan',
          run: true
        }
      }

    }
  };

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('server', 'Start a custom web server', function() {
      grunt.log.writeln('Started web server on port 3000');
      require('./server.js');
  });

  grunt.registerTask('test', function(target) {


      grunt.task.run([
        'connect:test',
        'mocha_phantomjs'
        ]);
      });

  grunt.initConfig(config);
  grunt.registerTask('default', ['server', 'watch']);
  grunt.registerTask('dist', ['symlink', 'dust']);

};
