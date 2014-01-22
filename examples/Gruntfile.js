'use strict';

/**
 * Grunt Configuration
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
           development: {
                options: {
                    paths: ['app/less/*.less'],
                    yuicompress: true
                },
                files: {
                    'app/css/bootstrap.css': 'app/less/bootstrap/bootstrap.less',
                    'app/css/app.css': 'app/less/app.less'
                }
            }
        },
        watch: {
            js: {
                files: ['Gruntfile.js', 'app/js/app.js', 'app/js/config.js', 'app/js/routes.js', 'app/js/controllers/*.js', 'app/js/directives/*.js', 'app/js/filters/*.js', 'app/js/services/*.js'],
                tasks: ['browserify'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: ['app/index.html', 'app/views/**'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: ['app/css/**'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['app/less/*.less', 'app/less/bootstrap/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        jshint: {
            all: {
                src: ['Gruntfile.js', 'app.js', 'app/js/*.js', 'config/*.js'],
                options: {
                    jshintrc: true,
                    globalstrict: true
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'app.js',
                    args: [],
                    ignoredFiles: ['app/**'],
                    watchedExtensions: ['js'],
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        browserify: {
            dist: {
                files: {
                    'app/build/app.js': ['app/js/app.js'],
                    'app/build/core.js': ['app/js/core.js'],
                }
            }
        }
    });

    /* Load Tasks */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.option('force', true);

    grunt.registerTask('default', ['browserify', 'less', 'concurrent']);
};