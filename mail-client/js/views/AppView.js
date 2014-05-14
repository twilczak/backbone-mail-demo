var mail = mail || {};
mail.views = mail.views || {};

mail.views.AppView = Backbone.View.extend({

    el: '#mail-client',

    initialize: function(options){
        var message = new mail.models.Message(
            { subject: 'Game of Thrones Season 4', recipient: 'SEK@avclub.com', dateSent: '2014.05.10' }
        );
        this.mailListView = new mail.views.MessageListView({model: message});
        this.mailListView.render();
    }
});