"use strict";
exports.__esModule = true;
var tnema_1 = require("tnema");
var server = new tnema_1.TNEMAServer('angApp', 'secret ang');
function StartServer(cb) {
    server.port(3000);
    server.mongoURI('mongodb://localhost/test');
    // Add Static Route
    server.HttpServer.AddStatic(__dirname + '/../dist');
    // Catch all other routes and return the index file
    server.HttpServer.AddRouteToFile('*', __dirname + '/../dist/index.html');
    server.Create(function () {
        if (cb) {
            cb();
        }
    });
}
exports.StartServer = StartServer;
function StopServer(cb) {
    server.Destroy(function () {
        if (cb) {
            cb();
        }
    });
}
exports.StopServer = StopServer;
