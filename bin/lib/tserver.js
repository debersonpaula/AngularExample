"use strict";
/*
* TServer unit
* descr: creates basic server with Node + Express + Mongoose + BodyParser
* scope: only server
* author: dpaula
* https://github.com/debersonpaula
*/
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
// server class
var TServer = (function () {
    // constructor
    function TServer() {
        this.Log = function (msg) {
            console.log(msg);
        };
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.objects = [];
        this.Options = {
            port: 0,
            mongoURL: '',
            static: []
        };
    }
    // add object to objects list
    TServer.prototype.Add = function (obj) {
        this.objects.push(obj);
    };
    // find object in objects list
    TServer.prototype.Find = function (classtype) {
        var buf;
        for (var i in this.objects) {
            if (this.objects[i].constructor === classtype) {
                buf = this.objects[i];
                break;
            }
        }
        return buf;
    };
    // add static route
    TServer.prototype.AddStatic = function (path) {
        this.app.use(express.static(path));
    };
    // add route to specific file
    TServer.prototype.AddRouteToFile = function (uri, filename) {
        this.app.get(uri, function (req, res) {
            res.sendFile(filename);
        });
    };
    // add router handler
    TServer.prototype.AddRouter = function (uri) {
        return this.app.route(uri);
    };
    // server initializator
    TServer.prototype.Listen = function (ListenPort) {
        var opts = this.Options;
        var self = this;
        if (!opts.port) {
            self.Log('HTTP Port was not been assigned to options');
        }
        else {
            ListenPort = opts.port || ListenPort;
            // run objects DoBeforeListen
            this.objects.forEach(function (element) {
                element.DoBeforeListen();
            });
            this.app.listen(ListenPort, function (err) {
                if (err) {
                    self.Log("HTTP Server can't be active on port " + opts.port);
                    throw err;
                }
                else {
                    self.Log("HTTP Server active on port " + opts.port);
                }
            });
        }
    };
    return TServer;
}());
exports.TServer = TServer;
// Server Object => to handle child objects for the server
var TServerObject = (function () {
    function TServerObject(AOwner) {
        this.SOwner = AOwner;
        AOwner.Add(this);
    }
    TServerObject.prototype.DoBeforeListen = function () { };
    return TServerObject;
}());
exports.TServerObject = TServerObject;
