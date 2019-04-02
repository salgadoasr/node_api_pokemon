'use strict';

const pokemonRouter = require('./pokemon-router');
const testRouter = require('./test-router');
const proxyRouter = require('./proxy-router');

module.exports = {
  pokemonRouter,
  testRouter,
  proxyRouter,
};
