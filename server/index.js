const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 4000;
const dbfile = './data.json';

var app = express();
var db = {
    name: ''
};

// load json data or create new one
if (fs.existsSync(dbfile)){
    var content = fs.readFileSync(dbfile,'utf8');
    db = JSON.parse(content);
}else{
    fs.writeFile(dbfile,JSON.stringify(db));
}
// start server
app.listen(port,function(err){ 
    if (err){
        console.log(`HTTP Server can't be active on port ${port}`) 
        throw err;
    }else{
        console.log(`HTTP Server active on port ${port}`) 
    }
});

// get data from db
app.get('/user',function (req, res){
    res.json(db);
});

// post data from db
app.post('/user',function (req, res){
    res.status(400);
    console.log(req.body);
});