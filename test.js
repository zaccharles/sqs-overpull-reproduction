'use strict';

var config = {
   // region: '',
   // accessKeyId: '',
   // secretAccessKey: ''
};

var uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');
var sqs = new AWS.SQS(config);

var params = {
    QueueUrl: 'https://sqs.<region>.amazonaws.com/<account>/<queueName>', // <--
    Entries: [
        { Id: uuidv4(), MessageBody: '1' },
        { Id: uuidv4(), MessageBody: '2' },
        { Id: uuidv4(), MessageBody: '3' },
        { Id: uuidv4(), MessageBody: '4' },
        { Id: uuidv4(), MessageBody: '5' },
        { Id: uuidv4(), MessageBody: '6' },
        { Id: uuidv4(), MessageBody: '7' },
        { Id: uuidv4(), MessageBody: '8' },
        { Id: uuidv4(), MessageBody: '9' },
        { Id: uuidv4(), MessageBody: '10' },
    ]
}

sqs.sendMessageBatch(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
});
