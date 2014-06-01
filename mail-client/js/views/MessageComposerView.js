var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageComposerView = Backbone.View.extend({
    el: '#message-composer',
    template: _.template( $('#message-composer-template').html() ),

    events:{
        'keyup input,textarea': 'updateModel'
    },

    initialize: function(options){
        this.eventBus = options.eventBus;

        this.listenTo(this.eventBus, 'showMessage', this.hide);
        this.listenTo(this.eventBus, 'sendMessage', this.send);
        this.listenTo(this.eventBus, 'clearMessage', this.clear);
        this.listenTo(this.eventBus, 'composeMessage', this.composeMessage);
    },

    render: function(){
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
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
    },

    composeMessage: function(model){
        this.show();
        this.model = model;
        this.render();
    },

    updateModel: function(event){
        var id = event.target.id,
            attribute = id.replace(/message-composer-/, '');

        var value = event.target.value;
        this.model.set(attribute, value, {silent: true});
    },

    send: function(){
        var errors = this.model.validate();
        console.log(errors);

    }
});
