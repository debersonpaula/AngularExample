"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tnema_1 = require("tnema");
var path = require("path");
var server = new tnema_1.TNEMAServer('angApp', 'secret ang');
function StartServer(cb) {
    server.Port = 3000;
    server.MongoSource = 'mongodb://localhost/test';
    // Add Static Route
    server.HttpServer.RouteStatic(__dirname + '/../dist');
    // Catch all other routes and return the index file
    server.HttpServer.RouteSendFile('*', path.join(__dirname, '../dist/index.html'));
    // Start Server
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
