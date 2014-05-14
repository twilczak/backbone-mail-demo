'use strict';

var http = require('http');
var url = require('url');
var uuid = require('node-uuid');
var _ = require('underscore');
var loremIpsum = require('lorem-ipsum');

function message( recipient, date, subject ){
    return {
        id : uuid.v4(),
        sender: 'someone@somewhere.com', recipient: recipient,
        dateSent: date, subject: subject,
        body: loremIpsum({count: 25})
    }
}

var messages = [
    message('John-E5@gmail.com','2014.05.12','Disassemble?'),
    message('Alice@exelon.com','2014.05.12','Project Completion'),
    message('Sarah@nokia.com','2014.05.12','Follow up'),
    message('SEK@avclub.com','2014.05.12','Game of Thrones Season 4'),
    message('Megan@nowellphoto.com','2014.05.12','Prints'),
    message('MariaBurnham@gmail.com','2014.05.12','RSVP: Midsummer Nights Dream')
];

function setCorsHeaders(response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, DELETE, POST');
    response.setHeader('Access-Control-Allow-Headers', '*');
}

var handlers = {
    'OPTIONS': function(request, response){
        response.writeHead(200);
        response.end();
    },
    'POST': function(requset, response){
        console.log(request);
        response.writeHead(200);
        response.end();
    },
    'DELETE': function(request, response){
        var parsedUrl = url.parse(request.url);
        var id = parsedUrl.pathname.substring(1);

        var message = _.findWhere(messages, {id: id});
        messages = _.without(messages, message);

        response.writeHead(204);
        response.end();
    },
    'GET': function(request, response){
        response.writeHead(200, {'content-type': 'application/json'});
        response.write(JSON.stringify(messages));
        response.end();
    }
};

var server = http.createServer(function(request, response){
    setCorsHeaders(response);
    handlers[request.method](request,response);
});

server.listen(3000, function(){
    console.log('listening for connections on port 3000');
});