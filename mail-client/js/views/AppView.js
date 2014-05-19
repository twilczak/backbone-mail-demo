var mail = mail || {};
mail.views = mail.views || {};

mail.views.AppView = Backbone.View.extend({

    el: '#mail-client',

    initialize: function(options){
        var defaultOptions = {eventBus: options.eventBus};
        this.eventBus = options.eventBus;

        this.collection = new mail.collections.MessageCollection();

        this.mailListView = new mail.views.MessageListView(_.extend(defaultOptions, { collection: this.collection }));
        this.mailReaderView = new mail.views.MessageReaderView(defaultOptions);
        this.messageControls = new mail.views.MessageControls(defaultOptions);

        this.collection.fetch({
            reset: true,
            error: function(){ console.log(arguments); }
        });
    }
});