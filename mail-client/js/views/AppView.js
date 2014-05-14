var mail = mail || {};
mail.views = mail.views || {};

mail.views.AppView = Backbone.View.extend({

    el: '#mail-client',

    initialize: function(options){
        this.collection = new mail.collections.MessageCollection();
        this.mailListView = new mail.views.MessageListView({ collection: this.collection });

        this.collection.fetch({
            reset: true,
            error: function(){ console.log(arguments); }
        });
    }
});