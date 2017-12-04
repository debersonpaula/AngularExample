// compile typescript on server
const build = require('./src/tscbuild/build');
build.compileTSC();

// execute and listen
var server = require('./bin/server');
server.Listen();

// listen files on server folder to rebuild
var watch = require('node-watch');
watch('./src/server/', { recursive: true }, function(evt, name) {
    console.log('Rebuilding server files: ');
    build.compileTSC();

    server.Stop();
    server = require('./bin/server');
    server.Listen();
});