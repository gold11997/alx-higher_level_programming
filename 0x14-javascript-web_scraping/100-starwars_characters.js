#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const endpoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(endpoint, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    data.characters.forEach((character) => {
      request(character, (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        }
      });
    });
  }
});
