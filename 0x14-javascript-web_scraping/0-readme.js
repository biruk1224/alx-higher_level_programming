#!/usr/bin/node
const argv = process.argv;
const fs = require('fs');
fs.readFile(argv[2], 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
