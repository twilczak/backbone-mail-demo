var mail = mail || {};
mail.collections = mail.collections || {};

mail.collections.MessageCollection = Backbone.Collection.extend({
    model: mail.models.Message,

    initialize: function(options){
        this.url = options.url;
    }
});