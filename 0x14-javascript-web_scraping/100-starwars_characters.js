#!/usr/bin/node

const args = process.argv;
const request = require('request');
request('https://swapi-api.hbtn.io/api/films/' + args[2], function (err, requestFilm) {
  if (err) {
    console.error(err);
    return;
  }
  const json = JSON.parse(requestFilm.body);
  json.characters.forEach(element => {
    request(element, function (err, requestChar) {
      if (err) {
        console.error(err);
        return;
      }
      const jsonCharacter = JSON.parse(requestChar.body);
      console.log(jsonCharacter.name);
    });
  });
});
