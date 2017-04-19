module.exports = function (grunt) {
    grunt.initConfig({
        clean: [
            'public/**/*',
            'temp'
        ],
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: 'inline',
            },
            vendor: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
                    'node_modules/angular-ui-router/release/'
                ],
                dest: 'public/scripts/vendor.cat.js'
            },
            angularModules: {
                src: [
                    'app/**/*.module.js'
                ],
                dest: 'temp/module.cat.js'
            },
            angularFiles: {
                src: [
                    'app/**/*.js',
                    '!app/**/*.module.js'
                ],
                dest: 'temp/angular.cat.js'
            },
            final: {
                src: [
                    'module.cat.js',
                    'angular.cat.js'
                ],
                dest: 'public/scripts/bundle.cat.js'
            }
        },
        copy: {
            assets: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['assets/index.html'],
                        dest: 'public/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['assets/img/*'],
                        dest: 'public/img/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['assets/fonts/*'],
                        dest: 'public/fonts/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src:['']
                    }
                ]
            }
        },
        sass: {
            default: {
                files: {
                    'public/styles/bundle.css': 'app/app.scss'
                }
            }
        },
        watch: {
            default: {
                files: ['app/**/*.js', 'app/**/*.scss', 'assets/**/*.*'],
                tasks: ['build']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('build', [
        'clean',
        'copy:assets',
        'concat:vendor',
        'concat:angularModules',
        'concat:angularFiles',
        'concat:final',
        'sass'
    ]);
};