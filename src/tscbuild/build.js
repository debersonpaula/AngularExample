const tsc = require('./tsc');

exports.compileTSC = function(){
    //compile TypeScript server files
    process.stdout.write('Start compile on tsc...');
    tsc(__dirname + '/build.config.json');
    process.stdout.write('compiled!\n');
}