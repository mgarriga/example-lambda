var request = require("request");
const fs = require('fs');

fs.readFile('./asdf_.jpg', 'base64', (err, data) => {

    // create a new buffer out of the string passed to us by fs.readFile()
    var buffer = new Buffer(data, 'base64');
    //console.log(data.length)
    var options = { method: 'POST',
      url: 'http://192.168.33.13:10001/api/v1/namespaces/guest/actions/prod',
      qs: { blocking: 'true' },
      headers:
       { 'postman-token': 'b650346a-9e5f-04ac-60bf-d7cd6f53b885',
         'cache-control': 'no-cache',
         'content-type': 'application/json',
         authorization: 'Basic MjNiYzQ2YjEtNzFmNi00ZWQ1LThjNTQtODE2YWE0ZjhjNTAyOjEyM3pPM3haQ0xyTU42djJCS0sxZFhZRnBYbFBrY2NPRnFtMTJDZEFzTWdSVTRWck5aOWx5R1ZDR3VNREdJd1A=' },
      body: { msg: 'hola',
              img: buffer
            },
      json: true
    };


    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log("duration: \t" + response.body.duration)
      console.log("node: \t \t" + response.body.response.result.node);
      console.log("value: \t \t" + response.body.response.result.value);

    });
})
