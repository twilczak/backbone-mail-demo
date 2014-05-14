var mail = mail || {};

$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.crossDomain = { crossDomain: true };
});

$(function(){
    mail.App = new mail.views.AppView();
    mail.Router = new mail.Router({appView: mail.App});
});