var mail = mail || {};
mail.views = mail.views || {};

mail.views.MessageControls = Backbone.View.extend({

    el: '#message-controls',

    initialize: function(options){
        this.eventBus = options.eventBus;

        this.composeButton = this.$('#compose-button');
        this.sendButton = this.$('#send-button');
        this.deleteButton = this.$('#delete-button');

        this.listenTo(this.eventBus, 'showMessage', this.viewingMessage);
        this.listenTo(this.eventBus, 'deleteMessage', this.messageCleared);
        this.listenTo(this.eventBus, 'clearMessage', this.messageCleared);
    },

    viewingMessage: function(id){
        this.setDeleteTargetId(id);
        this.deleteButton.removeAttr('disabled');
        this.sendButton.attr('disabled','disabled');
    },

    messageCleared: function(){
        this.setDeleteTargetId();
        this.deleteButton.attr('disabled', 'disabled');
        this.sendButton.attr('disabled','disabled');
    },

    setDeleteTargetId: function(id) {
        var deleteTarget = '#deleteMessage';
        deleteTarget += id ? '/' + id : '';
        this.deleteButton.attr('href', deleteTarget);
    }
});