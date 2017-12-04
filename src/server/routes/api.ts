import * as express from 'express';
import * as fs from 'fs';
const router: express.Router = express.Router();

/* Declare db object */
const dbfile = __dirname + '/data.json';
let db = {
    name: ''
};

// load json data or create new one
if (fs.existsSync(dbfile)){
    const content = fs.readFileSync(dbfile, 'utf8');
    db = JSON.parse(content);
} else {
    fs.writeFile(dbfile, JSON.stringify(db));
}

// get data from db
router.get('/', (req, res) => {
    res.json(db);
});

// post data from db
router.post('/', function (req, res){
    db = req.body;
    fs.writeFile(dbfile, JSON.stringify(db));
    res.json(db);
});

module.exports = router;
