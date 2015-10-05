module.exports = function(grunt) {

	//Configure tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//Responsive images plugin
		responsive_images: {
			dev: {
				options: {
			 		engine: 'im',
			 		sizes: [{
						name: "small",
				 		width: 150,
				 		quality:75
				 	}]
				},
				files: [{
			 		expand: true,
			 		src: ['**.*'],
			 		cwd: 'views/images',
			 		dest: 'imagesmall2/'
				}]
			}
		},

		//Clear out the images directory if it exists
		clean: {
			dev: {
				src: ['imagesmall2'],
			},
		},

		//Generate the images directory if it is missing
		mkdir: {
			dev: {
				options: {
					create: ['imagesmall2']
				},
			},
		},

		//Copy the "fixed" images that don't go through processing into the images/directory
		copy: {
			dev: {
				files: [{
				expand: true,
				src: 'images/fixed/*.{gif,jpg,png}',
				dest: 'imagesmall2/'
				}]
			},
		},
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//Register tasks
	grunt.registerTask('default',['clean', 'mkdir', 'copy', 'responsive_images']);
};