/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-pandoc');
    grunt.loadNpmTasks('grunt-plugin-pandoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-open');


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ['build']
            },
            markdown: {
                src: ['build/**/*.md']
            }
        },
        copy: {
            build: {
                files: [
                    {
                        cwd: 'src/docs',
                        src: '**/*',
                        dest: 'build',
                        expand: true,
                        xfilter: function (pathstring) {
                            var p = path.parse(pathstring);
                            if (path.extension === '.md') {
                                return false;
                            }
                            return true;
                        }
                    }
                ]
            }
        },
        plugin_pandoc: {
            build: {
                options: {
                    template: 'src/templates/kbase.html'
                },
                files: [
                    {
                        cwd: 'build',
                        src: '**/*.md',
                        dest: 'build'
                    }
                ]
            }
        },
        connect: {
           server: {
               port: 8887,
               base: 'build',
               keepalive: false,
               onCreateServer: function (server, connect, options) {
                   console.log('created...');
               }
           }
       },
       open: {
           dev: {
               path: 'http://localhost:8887'
           }
       },
    });

    //grunt.registerTask('clean', [
    //    'clean:build'
    //]);
    grunt.registerTask('build', [
        'copy:build',
        'plugin_pandoc:build',
        'clean:markdown'
    ]);

    grunt.registerTask('preview', [
        'open:dev',
        'connect'
    ]);
};
