'use strict';

const express = require('express');

const router = express.Router();

router.get('/tests/tes01', (req, res, next) => {
    console.log('recibí los siguientes params', req.query);

    res.send(req.query);
});

router.get('/tests/test02', (req, res, next) => {
    console.log('recibí los siguientes params', req.query);

    res.send(req.query);
});

module.exports = router;
