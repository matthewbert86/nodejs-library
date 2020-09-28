// import express
const express = require('express');
// get router variable
const router = express.Router();
// require album
const Album = require('../models/album');

// All albums route
router.get('/', async (req, res) => {});

//  New album route (creates form to add album)
router.get('/new', (req, res) => {});

// Create album Route
router.post('/', async (req, res) => {});

module.exports = router;
