#!/usr/bin/node
const request = require('request');
const args = process.argv;
const arrayInfo = [];
request('https://swapi-api.hbtn.io/api/films/' + args[2], (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const json = JSON.parse(body).characters;
  json.forEach(element => {
    arrayInfo.push(element);
  });
  showInfo(0, arrayInfo[0], json, json.length);
});

function showInfo (x, url, arrayInfo, size) {
  if (x === (size)) { return; }
  request(arrayInfo[x], (error, response, body) => {
    if (error) { console.log(error); }
    const json = JSON.parse(body);
    console.log(json.name);
    showInfo(++x, arrayInfo[x], arrayInfo, size);
  });
}
