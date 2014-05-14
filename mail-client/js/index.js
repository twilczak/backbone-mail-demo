var mail = mail || {};

$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.crossDomain = { crossDomain: true };
});

$(function(){
    var eventBus = _.extend({}, Backbone.Events);

    mail.App = new mail.views.AppView({ eventBus: eventBus });
    mail.Router = new mail.Router({ eventBus: eventBus });
});