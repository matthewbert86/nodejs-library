// import express
const express = require('express');
// get router variable
const router = express.Router();
// require album
const Album = require('../models/album');

// All albums route
router.get('/', async (req, res) => {
  res.send('All Albums');
});

//  New album route (creates form to add album)
router.get('/new', (req, res) => {
  res.send('New Album');
});

// Create album Route
router.post('/', async (req, res) => {
  res.send('Create Album');
});

module.exports = router;
