/*
* TServer unit
* descr: creates basic server with Node + Express + Mongoose + BodyParser
* scope: only server
* author: dpaula
* https://github.com/debersonpaula
*/

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';
import { TServerOptions } from './types';


// server class
class TServer {
    // components
    protected app: express.Application;
    protected objects: Array<TServerObject>;
    // server options
    public Options: TServerOptions;

    // constructor
    constructor() {
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

    public Log = function(msg: string){
        console.log(msg);
    };

    // add object to objects list
    public Add(obj: TServerObject) {
        this.objects.push(obj);
    }

    // find object in objects list
    public Find(classtype: typeof TServerObject): any {
        let buf;
        for (const i in this.objects) {
            if (this.objects[i].constructor === classtype) {
                buf = this.objects[i];
                break;
            }
        }
        return buf;
    }

    // add static route
    public AddStatic(path: string) {
        this.app.use(express.static(path));
    }

    // add route to specific file
    public AddRouteToFile(uri: string, filename: string) {
        this.app.get(uri, function(req, res){
            res.sendFile(filename);
        });
    }

    // add router handler
    public AddRouter(uri: string): express.IRoute {
        return this.app.route(uri);
    }

    // server initializator
    public Listen(ListenPort?: number) {
        const opts = this.Options;
        const self = this;
        if (!opts.port) {
            self.Log('HTTP Port was not been assigned to options');
        }else {
            ListenPort = opts.port || ListenPort;
            // run objects DoBeforeListen
            this.objects.forEach(element => {
                element.DoBeforeListen();
            });

            this.app.listen(ListenPort, function(err: any) {
                if (err) {
                    self.Log(`HTTP Server can't be active on port ${opts.port}`);
                    throw err;
                }else {
                    self.Log(`HTTP Server active on port ${opts.port}`);
                }
            });

        }
    }
}

// Server Object => to handle child objects for the server
class TServerObject {
    protected SOwner: TServer;
    constructor(AOwner: TServer) {
        this.SOwner = AOwner;
        AOwner.Add(this);
    }
    DoBeforeListen() {}
}

export {TServer, TServerObject};
