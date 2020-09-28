// import express
const express = require('express');
// get router variable
const router = express.Router();
// require album
const Album = require('../models/album');
// require artist
const Artist = require('../models/artist');

// All albums route
router.get('/', async (req, res) => {
  res.send('All Albums');
});

//  New album route (creates form to add album)
router.get('/new', async (req, res) => {
  try {
    const artists = await Artist.find({});
    const album = new Album();
    res.render('albums/new', {
      artists: artists,
      album: album,
    });
  } catch (error) {
    res.redirect('/albums');
  }
});

// Create album Route
router.post('/', async (req, res) => {
  res.send('Create Album');
});

module.exports = router;
