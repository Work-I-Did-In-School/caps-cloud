'use strict';

// 3rd party resources
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'}); // ? wtf is this

// setup
const SNS = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:609247114401:pickup.fifo';

const payload = {
  Message: `{
    "storeId": 12345,
    "customers": "Jane Doe",
    "vendorId": 123
  }`,
  TopicARN: topic
}

SNS.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);