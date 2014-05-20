'use strict'

var url = require('url');
var Mailbox = require('./Mailbox').Mailbox;

function MailboxRequestHandler() {
    this.mailbox = new Mailbox();
};

MailboxRequestHandler.prototype.OPTIONS = function(request, response){
    response.writeHead(200);
    response.end();
};

MailboxRequestHandler.prototype.POST = function(request, response) {
    console.log(request);
    response.writeHead(200);
    response.end();
};

MailboxRequestHandler.prototype.DELETE = function(request, response) {
    var parsedUrl = url.parse(request.url);
    var id = parsedUrl.pathname.substring(parsedUrl.pathname.lastIndexOf('/')+1);

    this.mailbox.deleteMessage(id);

    response.writeHead(204);
    response.end();
};

MailboxRequestHandler.prototype.GET = function(request, response) {
    response.writeHead(200, {'content-type': 'application/json'});
    response.write(JSON.stringify(this.mailbox.messages));
    response.end();
};

exports.MailboxRequestHandler = MailboxRequestHandler;



