var AWS =  require('aws-sdk');
AWS.config.loadFromPath('./credentials.json');

var lambda = new AWS.Lambda();

var params = {
  FunctionName: 'ping',
  Payload:
    JSON.stringify({
      "name":"Gio",
      "place":"Cyprus <3"
    })
}

lambda.invoke(params, function(err,data) {
  if (err){
    console.log(err, err.stack)
  }
    else console.log(data)
})
