const tnema = require('tnema');
const server = new tnema.TNEMAServer('angApp', './angSessions.json');

server.Port = 3000;
server.MongoSource = 'mongodb://localhost/test';
// Add Static Route
// server.HttpServer.RouteStatic(__dirname + '/../dist');
// Catch all other routes and return the index file
//server.HttpServer.App.get('*', (req, res) => {
    //res.sendFile(__dirname, '/../dist/index.html');
//});

// Add headers
server.HttpServer.App.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, tokenid');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // allow cookie usage
    res.setHeader('Access-Control-Expose-Headers', 'set-cookie');

    // Pass to next layer of middleware
    next();
});

server.HttpServer.App.get('/test', (req, res) => {
    res.status(200).json({ message: 'Test Working'});
});

// Start Server
server.Create(function(){
    console.log('Server starting at ' + server.Port);
});