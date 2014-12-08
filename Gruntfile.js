module.exports = function(grunt) {
  var rootPath = './';
  var directory = '';
  var assetPath = rootPath + 'assets/';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 9000,
          base: ''
        }
      }
    },
    sass: {
      target: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style-min.css': 'assets/sass/style.scss'
        }
      }
    },
    uglify: {
      target: {
        options: {
          expand: true
        },
        files: {
          'js/common-min.js': [
            'assets/js/common.js',
            'assets/js/unique.js'
          ]
        }
      }
    },
    watch: {
      scss: {
        files: assetPath + '**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: assetPath + '**/*.js',
        tasks: ['uglify']
      }
    }
  });

  // プラグイン記述
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // タスク
  grunt.registerTask('default', ['connect', 'watch']);
};