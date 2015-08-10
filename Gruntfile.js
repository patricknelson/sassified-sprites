/**
 * Generic boilerplate used for building SASS and compiling sprites. Feel free to change this to suit your needs!
 *
 * For usage, please see README.md.
 *
 * @site	YOUR_SITE_NAME
 * @author	Patrick Nelson, patnelson@ebay.com
 * @since	2015-08-10
 */

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		// Configure file paths here.
		config: {
			path: {
				css: 'css',
				scss: 'scss',
				imagesrc: 'images/sprites/src',
				imagebuild: 'images/sprites/build'
			}
		},

		// Compiles CSS
		sass: {
			options: {
				sourcemap: 'auto',
				style: 'compressed',
				bundleExec: true
			},

			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.path.scss %>',
					src: '**/*.{scss,sass}',
					dest: '<%= config.path.css %>',
					ext: '.css'
				}]
			}
		},

		// adds vendor prefixes to compiled CSS
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9'],
				map: true
			},

			// Auto-prefix ALL CSS files.
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.path.css %>',
					src: '**/*.css',
					dest: '<%= config.path.css %>'
				}]
			},

			// Auto-prefix ONLY the main CSS files.
			main: {
				files: [{
					expand: true,
					cwd: '<%= config.path.css %>',
					src: 'main.css',
					dest: '<%= config.path.css %>'
				}]
			}
		},

		// Sprite compilation configuration.
		sprites: {
			main: {
				src: ['<%= config.path.imagesrc %>/*.png'],
				css: '<%= config.path.scss %>/build/_sprites.scss',
				map: '<%= config.path.imagebuild %>/sprites.png',
				output: 'scss',
				dimensions: true,
				classPrefix: "sprite",
				staticImagePath: '/<%= config.path.imagebuild %>'
			}
		},

		// Minify generated sprite PNG files.
		pngmin: {
			options: {
				ext: '.png',
				force: true
			},
			sprites: {
				files: [{
					expand: true,
					cwd: '<%= config.path.imagebuild %>',
					src: '**/*.png',
					dest: '<%= config.path.imagebuild %>'

				}]
			}
		},


		// watches for file changes, runs tasks, and triggers livereload
		// TODO: Possibly remove live reload since that's not used on this site (due to remote dev).
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['<%= config.path.scss %>/**/*.scss'],
				tasks: ['sass'] // IMPORTANT: This is modified to be 'compileSassMain'
			},
			sprites: {
				files: [
					'<%= config.path.image %>/sprites/*.png',
					'<%= config.path.image %>/investors-sprite/*.png'
				],
				tasks: ['build-sprites']
			}
		}

	});

	// Alias for generating all sprites from source sprite files.
	grunt.registerTask('build-sprites', [
		'sprites',
		'pngmin'
	]);

	// Build everything.
	grunt.registerTask('build', [
		'build-sprites',
		'sass'
	]);

	// Build everything, but wait for changes and re-build.
	grunt.registerTask('dev', [
		'build',
		'watch'
	]);

};
