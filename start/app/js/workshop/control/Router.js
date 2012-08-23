/*jshint strict:true, undef:true, noarg:true, immed:true, trailing:true, expr:true, maxlen: 120*/
/*global browser:true, $:true, _:true, Backbone:true, Handlebars:true, require:true, define:true, console:true*/

define(
    [
        'workshop/model/AppModel',
        'workshop/view/AppView',

        // Globals
        'backbone'
    ],

    function (appModel, AppView) {
        'use strict';

        var Router = Backbone.Router.extend({

            //
            // -------------------- Properties --------------------
            //

            routes: {
                '': 'home'
            },

            initialize: function () {
                appModel.on('change:authenticated', this.onAuthenticated, this);

                new AppView().setElement(document.body).render();

                Backbone.history.start();

                console.log('Router::initialize()');
            },

            
            //
            // -------------------- Routes --------------------
            //

            home: function () {
                // TODO: set view on appModel here
            }
        });

        return Router;
    }
);