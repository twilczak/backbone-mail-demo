var mail = mail || {};
mail.views = mail.views || {};

mail.views.AppView = Backbone.View.extend({

    el: '#mail-client',

    initialize: function(options){
        this.collection = new mail.collections.MessageCollection();
        this.mailListView = new mail.views.MessageListView({ collection: this.collection });

        this.mailReaderView = new mail.views.MessageReaderView();

        this.collection.fetch({
            reset: true,
            error: function(){ console.log(arguments); }
        });
    },

    showMessage: function(id){
        var message = this.collection.findWhere({id: id});
        if(message){
            this.mailReaderView.setModelAndRender(message);
        }else{
            this.mailReaderView.clear();
        }
    },

    clearMessage: function(){
        this.mailReaderView.clear();
    }
});