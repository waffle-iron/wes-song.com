module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            entry: {
                files: [
                    {
                        expand: true,
                        cwd: './src/entry',
                        src: 'index.html',
                        dest: 'dist/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: './src/entry',
                        src: ['images/*', 'styles/*'],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('copy-entry', ['copy:entry']);
};