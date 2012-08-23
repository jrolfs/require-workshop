// RequireJS Configuration
require.config({
    baseUrl: 'js',

    paths: {
        // Externals
        'templates': '../templates',

        // Libraries
        'jquery': 'libs/jquery-1.8.0',
        'jquery_atmosphere': 'libs/jquery.atmosphere-2.0',
        'underscore': 'libs/underscore-1.3.3',
        'backbone': 'libs/backbone-0.9.2',
        'handlebars': 'libs/handlebars-1.0.0.beta.6',

        // Require Require
        'text': 'libs/require/text-2.0.3',
        'hb': 'libs/require/hb-precompile'
    },

    shim: {
        jquery: {
            exports: '$'
        },
        jquery_atmosphere: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },

    hbs: {
        disableI18n: true,
        templateExtension: "tpl",
        deps: {
            handlebars: 'handlebars',
            underscore: 'underscore'
        }
    }
});

require(
    [
        'tilt/app'
    ],

    function (app) {
        'use strict';
        app.init();
    }
);