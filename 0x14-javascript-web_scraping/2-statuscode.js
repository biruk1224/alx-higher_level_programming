#!/usr/bin/node
const argu = process.argv;
const url = argu[2];
const request = require('request');
request(url, function (error, response) {
  console.log('code:', response && response.statusCode);
  if (error) {
    return console.log(error);
  }
});
