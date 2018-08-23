console.log('child.js');
process.stdin.on('data', function(data){
    console.log('child stdin data: ', data.toString('utf8'));
});