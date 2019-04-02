'use strict';

const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/proxy/pokemons', (req, res, next) => {
  axios({
    method: 'Get',
    url: 'https://pokeapi.co/api/v2/pokemon',
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    console.error('error', err);
    res.status(500).send();
  });
});

module.exports = router;
