var mail = mail || {};

mail.Router = Backbone.Router.extend({

    initialize: function(options){
        this.eventBus = options.eventBus;
        Backbone.history.start();
    },

    routes:{

    }
});