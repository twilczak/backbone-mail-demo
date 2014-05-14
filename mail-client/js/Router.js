var mail = mail || {};

mail.Router = Backbone.Router.extend({

    initialize: function(options){
        this.appView = options.appView;
        Backbone.history.start();
    },

    routes:{
        '': 'clearMessage',
        'message/:query': 'showMessage'
    },

    showMessage: function(param){
        this.appView.showMessage(param);
    },

    clearMessage: function(){
        this.appView.clearMessage();
    }
});