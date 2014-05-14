var mail = mail || {};
mail.models = mail.models || {};

mail.models.Message = Backbone.Model.extend({
    defaults: {
        id: null,
        subject: '',
        sender: '',
        recipient: '',
        dateSent: '',
        body: ''
    }
});