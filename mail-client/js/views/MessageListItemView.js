var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(options){
        this.template = options.template;
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