"use strict";
exports.__esModule = true;
var express = require("express");
var fs = require("fs");
var router = express.Router();
/* Declare db object */
var dbfile = __dirname + '/data.json';
var db = { name: '' };
// load json data or create new one
if (fs.existsSync(dbfile)) {
    var content = fs.readFileSync(dbfile, 'utf8');
    db = JSON.parse(content);
}
else {
    fs.writeFile(dbfile, JSON.stringify(db));
}
// get data from db
router.get('/', function (req, res) {
    res.json(db);
});
// post data from db
router.post('/', function (req, res) {
    db = req.body;
    fs.writeFile(dbfile, JSON.stringify(db));
    res.json(db);
});
module.exports = router;
