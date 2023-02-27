#!/usr/bin/node

const request = require('request');
const endpoint = process.argv[2];
const characterId = 18;

request(endpoint, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    let counter = 0;
    data.results.forEach((movie) => {
      movie.characters.forEach((character) => {
        if (character.includes(characterId)) {
          counter++;
        }
      });
    });
    console.log(`Wedge Antilles is present in ${counter} movies.`);
  }
});
