var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListView = Backbone.View.extend({

    el: '#message-list',

    initialize: function(options){
        this.eventBus = options.eventBus;
        this.listenTo(this.collection, 'reset', this.renderMessages);
        this.listenTo(this.collection, 'remove', this.clearAndRenderMessages);
    },

    clearAndRenderMessages: function(){
        this.$el.html('');
        this.renderMessages();
    },

    renderMessages: function(){
        this.collection.each(this.renderMessage, this);
    },

    renderMessage: function(message){
        var view = new mail.views.MessageListItemView(
            {model: message, eventBus: this.eventBus}
        );
        this.$el.append(view.render().el);
    }
});