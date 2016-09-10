module.exports = function(grunt) {
  // Do grunt-related things in here

  grunt.initConfig({
       uncss: {
         dist: {
           files: {
             'css/styles.css': ['index.html']
           }
         }
       }



}); //end initialize



grunt.loadNpmTasks('grunt-uncss');
grunt.registerTask('default', ['uncss']);
}; // end wrapper

//load tasks
