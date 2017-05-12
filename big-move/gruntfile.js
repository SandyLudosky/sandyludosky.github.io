'use strict';
var path = require('path');

module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/custom.css': 'src/custom.scss'
				}
			}
		},
	    watch: {
	    	options: { livereload: true },
	      	sass: {
	        	files: ['src/custom.scss', 'public/index.html'],
	        	tasks: ['sass'],
	      	}
	    },
		connect: {
			server: {
				options: {
					port: 9005,
					base: 'public',
					hostname: '*',
					livereload:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.task.registerTask('default', ['connect','sass', 'watch']);
	
};