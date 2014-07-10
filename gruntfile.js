module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            css: {
                files: {
                    'app/css/main.css':'app/css/main.css'
                }
            }
        },
        concat:{   
		    css: {
		        src: ['app/css/normalize.css','app/css/main.css'],
		        dest:'dist/app/css/main.css',
		    }
		},
		cssmin: {
		    css: {
		        src:'dist/app/css/main.css',
		        dest:'dist/app/css/main.min.css'
		    }
		},
		watch: {
		    css: {
                files: ['app/css/*.css'],
                tasks: ['autoprefixer','concat:css','cssmin:css'],
                options: {
                    spawn: false
                }
            }
		}
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','cssmin','watch']);
};
