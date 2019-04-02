'use strict';

const express = require('express');

const router = express.Router();

router.post('/pokemons', (req, res, next) => {
  const pokemonData = Object.assign({}, req.body);

  console.log('me llego el siguiente body', pokemonData);
  setTimeout(() => {
    res.status(201).send();
    next();
  }, 2000);
});

router.get('/pokemons', (req, res, next) => {
  const pokemon2 = {
    name: 'bulbasur',
    attacks: ['whip'],
  };

  const data = [{
    name: 'pikachu',
    attacks: ['attack1', 'attack2'],
  }, pokemon2, {
    name: 'charmander',
    attacks: ['fire ball'],
  }];

  res.send(data);
});

router.get('/pokemons/:name', (req, res, next) => {
  const pokemons = [{
    name: 'pikachu',
    attacks: ['attack1', 'attack2'],
  }, {
    name: 'bulbasur',
    attacks: ['whip'],
  }, {
    name: 'charmander',
    attacks: ['fireball'],
  }];

  const { name } = req.params;

  const pokemonFound = pokemons.filter((pokemon) => {
    if (pokemon.name === name) {
      return true;
    }
    return false;
  });

  if (pokemonFound.length === 0) {
    res.status(404).send();
  } else {
    res.send(pokemonFound[0]);
  }
});

module.exports = router;
