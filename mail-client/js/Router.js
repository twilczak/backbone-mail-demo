var mail = mail || {};

mail.Router = Backbone.Router.extend({

    initialize: function(options){
        this.eventBus = options.eventBus;
        Backbone.history.start();
    },

    routes:{
        '' : 'showMailbox',
        ':inbox' : 'showMailbox',
        ':outbox': 'showMailbox'
    },

    showMailbox: function(id){
        id = !id ? 'inbox' : id;
        this.eventBus.trigger('showMailbox', { boxId: id });
        this.eventBus.trigger('clearMessage');
    }
});