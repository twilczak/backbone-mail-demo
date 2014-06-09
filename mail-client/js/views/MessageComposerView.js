var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageComposerView = Backbone.View.extend({
    el: '#message-composer',
    template: _.template( $('#message-composer-template').html() ),

    events:{
        'keyup input,textarea': 'clearErrorsAndUpdateModel'
    },

    initialize: function(options){
        this.eventBus = options.eventBus;
        this.outboxCollection = options.outboxCollection;

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

    clearErrorsAndUpdateModel: function(event){
        this.clearValidationErrors();
        this.updateModel(event);
    },

    updateModel: function(event){
        var id = event.target.id,
            attribute = id.replace(/message-composer-/, '');

        var value = event.target.value;
        this.model.set(attribute, value, {silent: true});
    },

    send: function(){
        this.clearValidationErrors();
        if(!this.model.isValid()){
            this.showValidationErrors(this.model.validationError);
        }else{
            this.model.url = this.outboxCollection.url;
            this.model.save(null, {
                    success: _.bind(function(collection, model, options){
                        this.outboxCollection.add(model);
                    }, this),
                    failure: function(){console.log(arguments);}
                }
            );
            this.eventBus.trigger('clearMessage');
        }
    },

    clearValidationErrors: function(){
        this.$el.find('input,textarea').removeClass('error');
    },

    showValidationErrors: function(validationErrors){
        _.chain(validationErrors).keys().each(_.bind(function(property){
            this.$el.find('#message-composer-' + property).addClass('error');
        }, this));
    }
});
