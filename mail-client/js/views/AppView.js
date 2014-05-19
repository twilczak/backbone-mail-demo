var mail = mail || {};
mail.views = mail.views || {};

mail.views.AppView = Backbone.View.extend({

    el: '#mail-client',

    initialize: function(options){
        var defaultOptions = {eventBus: options.eventBus};
        this.eventBus = options.eventBus;

        this.outboxCollection = new mail.collections.OutboxCollection();
        //this.inboxCollection = new mail.collections.InboxCollection();

        this.mailListView = new mail.views.MessageListView(_.extend(defaultOptions, { collection: this.outboxCollection }));
        this.mailReaderView = new mail.views.MessageReaderView(defaultOptions);
        this.messageControls = new mail.views.MessageControls(defaultOptions);

        this.outboxCollection.fetch({
            reset: true,
            error: function(){ console.log(arguments); }
        });
    }
});