module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.registerTask("build", [
        "less",
        "autoprefixer",
        "cmq",
        "cssmin"
    ]);

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": ["less/style.less"]
                }
            }
        },

        watch: {
            styles: {
                files: ["less/style.less"],
                tasks: ["less"],
                options: {
                    nospawn: true
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ["last 2 version", "ie 10"]
            },

            style: {
                src: "css/style.css"
            }
        },

        cmq: {
            style: {
                files: {
                    "css/style.css": ["css/style.css"]
                }
            }
        },

        cssmin: {
            style: {
                options: {
                    keepSpecialComments: 0,
                    report: "gzip"
                },
                files: {
                    "css/style.min.css": ["css/style.css"]
                }
            }
        }
    });
};
