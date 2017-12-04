"use strict";
exports.__esModule = true;
// imports
var tserver_1 = require("./lib/tserver");
var mserver_1 = require("./lib/mserver");
var aserver_1 = require("./lib/aserver");
var path = require("path");
// create servers
var Server = new tserver_1.TServer; // express server
var MongoDB = new mserver_1.MServer(Server); // mongodb
var Auth = new aserver_1.AServer(Server); // authentication
// load configuration file
Server.Options.port = 3000;
Server.Options.mongoURL = 'mongodb://localhost/testTServer';
Server.AddStatic(__dirname + '/../dist');
// import api and add to the server
var routeApi = require("./routes/api");
Server.AddUse('/api', routeApi);
// Catch all other routes and return the index file
Server.AddRouteToFile('*', path.join(__dirname, '../dist/index.html'));
// exports server
module.exports = Server;
