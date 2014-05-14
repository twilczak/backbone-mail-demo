var mail = mail || {};

mail.Router = Backbone.Router.extend({

    initialize: function(options){
        this.eventBus = options.eventBus;
        Backbone.history.start();
    },

    routes:{
        '': 'clearMessage',
        'message/:query': 'showMessage',
        'deleteMessage/:query' : 'deleteMessage'
    },

    showMessage: function(param){
        this.eventBus.trigger('showMessage', param);
    },

    clearMessage: function(){
        this.eventBus.trigger('clearMessage');
    },

    deleteMessage: function(param){
        this.eventBus.trigger('deleteMessage', param);
    }
});