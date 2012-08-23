/*jshint strict:true, undef:true, noarg:true, immed:true, trailing:true, expr:true, maxlen: 120*/
/*global browser:true, console:true, $:true, _:true, Backbone:true, Handlebars:true, require:true, define:true*/

define(
    [
        'workshop/control/Router',

        // Init
        'workshop/control/init/BackboneInit'
    ],

    function (Router) {
        'use strict';

        return {
            init: function () {
                console.log('Application::init()');
                new Router();
            }
        };
    }
);