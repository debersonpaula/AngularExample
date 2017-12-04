// compile and execute server
//require('./src/tscbuild/build');
//require('./bin/server');

// execute ng build
/*
const { exec } = require('child_process');
exec('ng build -op dist -w', (err, stdout, stderr) => {
    if (err) {
      console.log('Error : ' + err);
      return;
    }
  
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  */

  const { execSync } = require('child_process');
  // stderr is sent to stdout of parent process
  // you can set options.stdio if you want it to go elsewhere
  let stdout = execSync('ng build -op dist -w');