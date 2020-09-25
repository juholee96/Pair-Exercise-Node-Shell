const fs = require('fs');

module.exports = function(cmd){
    cmdTwo = cmd.split(' ');

    if(cmdTwo[0] === 'cat'){
        for(i=1; i<cmdTwo.length; i++){
            fs.readFile(`${cmdTwo[i]}`, (err, data) => {
                if (err) throw err;
                process.stdout.write(data);
                process.stdout.write('\nprompt > ')
              });
        }
    }
}