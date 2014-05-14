var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageReaderView = Backbone.View.extend({
    el: '#message-reader',
    template: _.template( $('#message-reader-template').html() ),

    render: function(){
        this.$el.html( this.template( this.model.toJSON()) );
        return this;
    },

    setModelAndRender: function(model){
        this.model = model;
        this.render();
    },

    clear: function(){
        this.$el.html('');
    }

});