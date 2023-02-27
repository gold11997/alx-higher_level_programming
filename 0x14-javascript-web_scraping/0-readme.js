#!/usr/bin/node

const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
