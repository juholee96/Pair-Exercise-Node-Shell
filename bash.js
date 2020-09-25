const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl')
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd + '\n');

    pwd(cmd)
    ls(cmd)
    cat(cmd)
    curl(cmd)
})

const done = (output) => {
    //show output
    
    //show prompt
}