var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListItemView = Backbone.View.extend({
    tagName: 'li',
    template: _.template( $('#sent-message-list-item-template').html() ),

    initialize: function(options){
        this.eventBus = options.eventBus;
    },

    events:{
        "click": "showMessage"
    },

    render: function(){
        this.$el.html( this.template( this.model.toJSON()) );
        return this;
    },

    showMessage: function(event){
        this.eventBus.trigger('showMessage', this.model);
    }
});