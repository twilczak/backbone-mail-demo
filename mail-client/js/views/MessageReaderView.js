var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageReaderView = Backbone.View.extend({
    el: '#message-reader',
    template: _.template( $('#message-reader-template').html() ),

    initialize: function(options){
        this.eventBus = options.eventBus;

        this.listenTo(this.eventBus, 'deleteMessage', this.deleteMessage);
        this.listenTo(this.eventBus, 'clearMessage', this.clear);
    },

    render: function(){
        this.$el.html( this.template( this.model.toJSON()) );
        return this;
    },

    setModelAndRender: function(model){
        this.model = model;
        this.render();
    },

    deleteMessage: function(){
        if(this.model){
            this.model.destroy({ wait: true });
        }
        this.clear();
    },

    clear: function(){
        this.model = null;
        this.$el.html('');
    }
});