import { TNEMAServer } from 'tnema';

const server = new TNEMAServer('angApp', 'secret ang');

export function StartServer(cb?: Function) {
    server.port(3000);
    server.mongoURI('mongodb://localhost/test');
    // Catch all other routes and return the index file
    // server.HttpServer.AddRouteToFile('*', __dirname + '/../dist/index.html');
    // Add Static Route
    server.HttpServer.AddStatic(__dirname + '/../dist');

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
