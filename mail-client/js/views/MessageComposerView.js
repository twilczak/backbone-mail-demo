var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageComposerView = Backbone.View.extend({
    el: '#message-composer',
    template: _.template( $('#message-composer-template').html() ),

    initialize: function(options){
        this.eventBus = options.eventBus;

        this.listenTo(this.eventBus, 'showMessage', this.hide);
        this.listenTo(this.eventBus, 'clearMessage', this.clear);
        this.listenTo(this.eventBus, 'composeMessage', this.composeMessage);
    },

    render: function(){
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    },

    composeMessage: function(model){
        this.show();
        this.model = model;
        this.render();
    },

    clear: function(){
        this.model = null;
        this.$el.html('');
    },

    show: function(){
        this.$el.show();
    },
    hide: function(){
        this.$el.hide();
    }
});
