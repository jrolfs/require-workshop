({
    appDir: '../',
    baseUrl: 'js',
    dir: '../../build',
    mainConfigFile: 'main.js',
    wrap: true,
    templatePathPrefix: 'app/',
    
    paths: {
        'almond': '../../node_modules/almond/almond',
        
        // Externals
        'templates': '../templates',

        // Libraries
        'jquery': 'libs/jquery-1.8.0',
        'jquery_atmosphere': 'libs/jquery.atmosphere-2.0',
        'underscore': 'libs/underscore-1.3.3',
        'backbone': 'libs/backbone-0.9.2',
        'handlebars': 'libs/handlebars-1.0.0.beta.6',
        
        // Require
        'hbs': 'libs/require/hbs'
    },

    modules: [{
        name: 'main',
        include: ['almond'],
        out: 'main.js'
    }]
})