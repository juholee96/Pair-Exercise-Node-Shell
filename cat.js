const fs = require('fs');
const done = require('./bash')

module.exports = function(cmd, done){
    cmdTwo = cmd.split(' ');

    if(cmdTwo[0] === 'cat'){
        for(i=1; i<cmdTwo.length; i++){
            fs.readFile(`${cmdTwo[i]}`, (err, data) => {
                if (err) throw err;
                done(data);              
              });
        }
    }
}