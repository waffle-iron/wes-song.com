module.exports = function (grunt) {
    grunt.initConfig({
        clean: [
            'temp'
        ],
        concat: {
            options: {
            },
            appModule: {
                src: [
                    'app/app.module.js',
                    'app/app.config.js',
                    'app/app.route.js',
                    'app/app.component.js'
                ],
                dest: 'temp/scripts/appModule.txt'
            },
            commonModule: {
                src: [
                    'app/common/common.module.js',
                ],
                dest: 'temp/scripts/commonModule.txt'
            }
        },
        copy: {
            scripts: {
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
                        src:['node_modules/bootstrap/dist/css/bootstrap.css'],
                        dest: 'public/styles'
                    }
                ]
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('build', [
        'clean',
        'concat:appModule',
        'concat:commonModule'
    ]);
};