/*jshint strict:true, undef:true, noarg:true, immed:true, trailing:true, expr:true, maxlen:120*/
/*global browser:true, $:true, _:true, Backbone:true, Handlebars:true, require:true, define:true*/

define(
    [

        // Globals
        'backbone'
    ],

    /**
     * Bootstrap file for Backbone, any customization and overrides
     * should happen in this module
     */
    function () {
        'use strict';

        var originalSync = Backbone.sync;

        Backbone.sync = function (method, model, options) {

            // Custom sync logic

            originalSync(method, model, options);
        };
    }
);