// imports
import {TServer} from './lib/tserver';
import {MServer} from './lib/mserver';
import {AServer} from './lib/aserver';
import * as path from 'path';

// create servers
const Server = new TServer;          // express server
// const MongoDB = new MServer(Server); // mongodb
// const Auth = new AServer(Server);    // authentication

// load configuration file
Server.Options.port = 3000;
// Server.Options.mongoURL = 'mongodb://localhost/testTServer';
Server.AddStatic(__dirname + '/../dist');

// import api and add to the server
import * as routeApi from './routes/api';
Server.AddUse('/api', routeApi);

// Catch all other routes and return the index file
Server.AddRouteToFile('*', path.join(__dirname, '../dist/index.html'));

// start server
// Server.Listen();
//

// exports server
module.exports = Server;
