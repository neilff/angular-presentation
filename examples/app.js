
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    request = require('request'),
    config = require('./config/config'),
    app = express(),
    server = http.createServer(app);

/* Express Configuration */
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

/* Development Only */
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

/* Setup Proxy Route */
app.use('/api', function(req, res) {
    url = config.apiUrl + req.url;
    req.pipe(request(url)).pipe(res);
});

/* Init Routing */
require('./config/routes')(app);

// /* Start Server */
// http.createServer(app).listen(app.get('port'), function(){
//     console.log('Express server listening on port ' + app.get('port'));
// });

var io = require('socket.io').listen(server);

/**
 * Socket.IO Init
 */

var clientCounter = 0;

io.sockets.on('connection', function(socket) {
    clientCounter++;
    io.sockets.emit('usercount', { data: clientCounter });

    socket.on('disconnect', function() {
        clientCounter--;
        io.sockets.emit('usercount', { data: clientCounter });
    });
});

/**
 * Init Server
 */

server.listen(3000);
