/*jshint strict:true, undef:true, noarg:true, immed:true, trailing:true, expr:true, maxlen:120*/
/*global browser:true, console:true, $:true, _:true, Backbone:true, Handlebars:true, require:true, define:true*/

define(
    [
        'hb!templates/AppView.tpl',
        'tilt/model/AppModel',

        // Globals
        'handlebars'
    ],

    function (template, appModel) {
        'use strict';

        var tpl = Handlebars.compile(template);
        
        var AppView = Backbone.View.extend({
            
            //
            // -------------------- Properties --------------------
            //

            header: null,

            views: [],


            //
            // -------------------- Init --------------------
            //

            initialize: function () {
                appModel.on('change:view', this.onViewChange, this);
                appModel.on('destroy:view', this.onViewDestroy, this);
            },


            //
            // -------------------- Control --------------------
            //

            render: function () {
                this.$el.html(template());

                return this;
            },



            //
            // -------------------- Listeners --------------------
            //

            onViewChange: function (model, view) {
                // Destroy previous views
                for (var i = this.views.length - 1; i >= 0; i--) {
                    this.views[i].destroy();
                }

                this.views.length = 0;
                this.views.push(view);
                view.render();

                this.$('#content').html(view.el);

                // Reset the scroll position to the top of the page
                window.scrollTo(0, 0);
            },

            onViewDestroy: function (view) {
                this.views.pop().destroy();
            }
        });

        return AppView;
    }
);