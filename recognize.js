'use strict';

const fs = require('fs');
const aws = require('aws-sdk')
const rekognition = new aws.Rekognition();

const recognize = (req, callback) =>{
    const buffer = new Buffer(req.base64Image, 'base64');
    var rekognition = new aws.Rekognition({
        apiVersion: '2016-06-27',
        region: 'us-west-2'
    })
    rekognition.detectLabels({
        Image: {
            Bytes: buffer
        }
    }).promise()
    .then((result) =>{
        console.log(result)
        callback(null, result)
    }).catch(function (err) {
        console.log(err)
        callback(err)
    })
    
}


exports.handler = (event, context, callback) => {
    const req = event;
    const operation = req.operation;
    delete req.operation;
    if (operation) {
        console.log(`Operation ${operation} 'requested`);
    }

    switch (operation) {
        case 'ping':
            callback(null, 'pong');
            break;
        case 'recognize':
            recognize(req, callback);
            break;
        default:
            callback(new Error(`Unrecognized operation "${operation}"`));
    }
};
