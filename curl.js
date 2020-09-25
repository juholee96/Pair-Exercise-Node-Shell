const request = require('request');


//It should make an HTTP GET request to a given URL, and print out the HTTP response body.

module.exports = function(cmd){
    cmdTwo = cmd.split(' ');

    if(cmdTwo[0] === 'curl'){
        process.stdout.write("it's coming here!")
        request(`${cmdTwo[1]}`, (err, response, body) => {
            if (err) throw err;
            process.stdout.write(body);
            process.stdout.write('\nprompt > ')
          });
        
    
    }
}

// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });