#!/usr/bin/env node

const request = require('request');
const movieId = process.argv[2];
const endpoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(endpoint, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    const characters = data.characters;
    let counter = 0;
    const fetchCharacter = (character) => {
      request(character, (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
          counter++;
          if (counter < characters.length) {
            fetchCharacter(characters[counter]);
          }
        }
      });
    };
    fetchCharacter(characters[0]);
  }
});
