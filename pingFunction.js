'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Name =', event.name);
    console.log('Place =', event.place);
    callback(null, "Hello " + event.name + " from " + event.place );  // Echo back the "pong"
    //callback('Something went wrong');
};
