import { TNEMAServer } from 'tnema';
import * as path from 'path';

const server = new TNEMAServer('angApp', 'secret ang');

export function StartServer(cb?: Function) {
    server.Port = 3000;
    server.MongoSource = 'mongodb://localhost/test';
    // Add Static Route
    server.HttpServer.RouteStatic(__dirname + '/../dist');
    // Catch all other routes and return the index file
    server.HttpServer.RouteSendFile('*', path.join(__dirname, '../dist/index.html'));

    // Start Server
    server.Create(function(){
        if (cb) {
            cb();
        }
    });
}

export function StopServer(cb?: Function) {
    server.Destroy(function(){
        if (cb) {
            cb();
        }
    });
}
