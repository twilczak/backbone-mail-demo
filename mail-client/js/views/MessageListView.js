var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageListView = Backbone.View.extend({

    initialize: function(options){
        this.eventBus = options.eventBus;
        this.messageTemplate = options.messageTemplate;

        this.listenTo(this.eventBus, 'showMailbox', this.showMailbox);

        this.listenTo(this.collection, 'reset', this.renderMessages);
        this.listenTo(this.collection, 'remove', this.clearAndRenderMessages);
    },

    showMailbox: function(event){
        if(this.el.id === event.boxId){
            this.$el.show();
            this.$el.html('');
            this.refresh();
        }else{
            this.$el.hide();
        }
    },

    refresh: function(){
        this.collection.fetch({
            reset: true,
            error: function () {
                console.log(arguments);
            }
        });
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
            {template: this.messageTemplate, model: message, eventBus: this.eventBus}
        );
        this.$el.append(view.render().el);
    }
});