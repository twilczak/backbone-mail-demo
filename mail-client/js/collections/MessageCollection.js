var mail = mail || {};
mail.collections = mail.collections || {};

mail.collections.MessageCollection = Backbone.Collection.extend({
    model: mail.models.Message,
    url: 'http://127.0.0.1:3000'
});