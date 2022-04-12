#!/usr/bin/node
const argu = process.argv;
const url = argu[2];
const request = require('request');

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let j = 0;
    const results = JSON.parse(body).results;
    for (let k = 0; k < results.length; k++) {
      const chars = results[k].characters;
      for (let i = 0; i < chars.length; i++) {
        if (chars[i].includes('/18/')) {
          j++;
        }
      }
    }
    console.log(j);
  }
});
