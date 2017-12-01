const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || '8080';;
const dbfile = __dirname + '/data.json';
const http = require('http');
const path = require('path');

var app = express();
var db = {
    name: ''
};

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load json data or create new one
if (fs.existsSync(dbfile)){
    var content = fs.readFileSync(dbfile,'utf8');
    db = JSON.parse(content);
}else{
    fs.writeFile(dbfile,JSON.stringify(db));
}

// get data from db
app.get('/user',function (req, res){
    res.json(db);
});

// post data from db
app.post('/user',function (req, res){
    res.status(400);
    console.log(req.body);
});

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//Get port from environment and store in Express
app.set('port',port);

//Create HTTP server
const server = http.createServer(app);

// start server
server.listen(port, () => console.log(`API running on localhost:${port}`));