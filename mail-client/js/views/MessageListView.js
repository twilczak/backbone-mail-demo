var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListView = Backbone.View.extend({

    el: '#message-list',

    initialize: function(options){
        this.listenTo(this.collection, 'reset', this.renderMessages);
    },

    renderMessages: function(){
        this.collection.each(this.renderMessage, this);
    },

    renderMessage: function(message){
        var view = new mail.views.MessageListItemView({model: message});
        this.$el.append(view.render().el);
    }
});