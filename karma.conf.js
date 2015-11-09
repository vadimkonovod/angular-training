module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['PhantomJS'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'specs/**/*.js'
        ],
        exclude: [
            'app/**/*.deprecated.js',
        ],
        frameworks: ["jasmine"],
        reporters: ["progress"],
        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};