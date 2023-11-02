const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false
//     }

//     console.log(stdout);
// })

// exec('node modules/console.js', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false
//     }

//     console.log(stdout);
// })

let newProcess = spawn('ls', ['-la']);

console.log(newProcess.pid);
console.log(newProcess.connected);

newProcess.stdout.on('data', function(some_data) {
    console.log('Is this process killed ???');
    console.log(newProcess.killed);
    console.log(some_data.toString());
})

newProcess.on('exit', function() {
    console.log('Is this process killed 2 ???');
    console.log(newProcess.killed);
    console.log('the new Process is ended');
    console.log('Is this process killed 3 ???');
    console.log(newProcess.killed);
})