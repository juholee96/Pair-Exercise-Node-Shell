const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd + '\n');

    //cat bash.js
    //cat bash.js chicken cow 
    //cat
    //ls cat dog
    pwd(cmd)
    ls(cmd)
    cat(cmd)
})