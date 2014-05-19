'use strict'

var loremIpsum = require('lorem-ipsum');
var uuid = require('node-uuid');
var _ = require('underscore');

function Mailbox(){
    this.messages = [];
};

Mailbox.prototype.createMessage = function(sender, recipient, date, subject){
    var message = {
        id : uuid.v4(),
        sender: sender, recipient: recipient,
        dateSent: date, subject: subject,
        body: loremIpsum({count: 25})
    };

    this.messages.push(message);
    return this.message;
};

Mailbox.prototype.deleteMessage = function(id){
    var message = _.findWhere(this.messages, {id: id});
    this.messages = _.without(this.messages, message);
}

exports.Mailbox = Mailbox;