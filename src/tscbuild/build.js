const tsc = require('./tsc');

//compile TypeScript server files
process.stdout.write('Start compile on tsc...');
tsc(__dirname + '/build.config.json');
process.stdout.write('compiled!\n');