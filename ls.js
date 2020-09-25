const fs = require('fs');
const {done} = require('./bash')

module.exports = function(cmd, done){
    //process.stdout.write(done);
    if(cmd === 'ls'){
        fs.readdir('./', 'utf8', (err, files) => {
            if(err){
                throw err;
                done('Something went wrong')
            } else {
                done(files.join('\n'));
            }
        })
    }
}