"use strict";
exports.__esModule = true;
// imports
var tserver_1 = require("./lib/tserver");
var mserver_1 = require("./lib/mserver");
var aserver_1 = require("./lib/aserver");
// create servers
var Server = new tserver_1.TServer; // express server
var MongoDB = new mserver_1.MServer(Server); // mongodb
var Auth = new aserver_1.AServer(Server); // authentication
// load configuration file
Server.Options.port = 8080;
Server.Options.mongoURL = 'mongodb://localhost/testTServer';
Server.AddStatic(__dirname + '/../dist');
// start server
Server.Listen();
