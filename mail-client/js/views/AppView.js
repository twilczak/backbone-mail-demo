var mail = mail || {};
mail.views = mail.views || {};

mail.views.AppView = Backbone.View.extend({

    el: '#mail-client',

    initialize: function(options){
        var defaultOptions = {eventBus: options.eventBus};
        this.eventBus = options.eventBus;

        this.mailReaderView = new mail.views.MessageReaderView(defaultOptions);
        this.messageControls = new mail.views.MessageControls(defaultOptions);

        this.outboxCollection = new mail.collections.MessageCollection({url: 'http://localhost:3000/outbox'});
        var sentMessageTemplate = _.template($('#sent-message-template').html());
        this.outboxView = new mail.views.MessageListView(
            { eventBus: this.eventBus, el: '#outbox', collection: this.outboxCollection, messageTemplate: sentMessageTemplate }
        );

        this.inboxCollection = new mail.collections.MessageCollection({url: 'http://localhost:3000/inbox'});
        var receivedMessageTemplate = _.template($('#received-message-template').html());
        this.inboxView = new mail.views.MessageListView(
            { eventBus: this.eventBus, el: '#inbox', collection: this.inboxCollection, messageTemplate: receivedMessageTemplate}
        );
    }
});