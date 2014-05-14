var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListView = Backbone.View.extend({

    el: '#message-list',

    initialize: function(options){
        this.model = options.model;
    },

    render: function(){
        this.renderMessage(this.model);
    },

    renderMessage: function(message){
        var view = new mail.views.MessageListItemView({model: message});
        this.$el.append(view.render().el);
    }
});