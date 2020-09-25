const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const { doesNotReject } = require('assert');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd + '\n');

    pwd(cmd)
    ls(cmd, done)
    cat(cmd, done)
    curl(cmd)
})

const done = (output) => {
    //show output
    process.stdout.write(output)
    //show prompt
    process.stdout.write('\nprompt > ')
}

module.exports = {done};