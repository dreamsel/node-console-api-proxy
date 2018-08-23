const {spawn} = require('child_process');

const child = spawn('node',['child.js']);
child.stdout.on('data',(data) => {
    console.log(`data from child: ${data.toString('utf8')}`);
});

child.on('exit', (code, signal) => {
    console.log(`child exit ${code}, ${signal}`);
});
child.on('error', (error) => {
    console.log(`child error ${error}`);
});
child.on('close', (c) => {
    console.log(`child close ${c}`);
});
child.on('disconnect', (c) => {
    console.log(`child disconnect ${c}`);
});
child.on('message', (message) => {
    console.log(`child message ${message}`);
});

setTimeout(() => {child.stdin.write(JSON.stringify({aa:123}))}, 1000);

