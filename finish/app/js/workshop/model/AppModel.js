/*jshint strict:true, undef:true, noarg:true, immed:true, trailing:true, expr:true, maxlen:120*/
/*global browser:true, console:true, $:true, _:true, Backbone:true, Handlebars:true, require:true, define:true*/

define(
    [
        'tilt/model/UserModel'
    ],

    function (BaseModel, UserModel) {
        'use strict';
        
        var AppModel = Backbone.Model.extend({

            // Current application view
            view: null

            // Models
            // TODO: sub-models go here

            // Collections
            // TODO: collections go here
        });

        // Return instance of AppModel, effectively creating a singleton
        return new AppModel();
    }
);