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
    },

    validate: function(attr, options){
        attr = attr || this.attributes;

        var errors = {};
        if(!attr.subject){
            errors.subject = 'Subject is required';
        }
        if(!attr.recipient){
            errors.recipient = 'Recipient is required';
        }

        return errors.isEmpty? undefined : errors;
    }
});