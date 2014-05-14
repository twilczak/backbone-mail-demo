var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListItemView = Backbone.View.extend({
    tagName: 'li',
    template: _.template( $('#message-list-item-template').html() ),

    render: function(){
        this.$el.html( this.template( this.model.toJSON()) );
        return this;
    }
});