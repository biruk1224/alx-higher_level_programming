#!/usr/bin/node
const argv = process.argv;
const num = argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + num;
const request = require('request');
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const info = JSON.parse(body);
    console.log(info.title);
  }
});
