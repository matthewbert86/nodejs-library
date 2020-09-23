// import express
const express = require('express');
// get router variable
const router = express.Router();
// require author
const Artist = require('../models/artist');

// All artists route
router.get('/', (req, res) => {
  res.render('artists/index');
});

//  New artist route (creates form to add artist)
router.get('/new', (req, res) => {
  // pass in variables to new.ejs
  res.render('artists/new', { artist: new Artist() });
});

// Create Artist Route
router.post('/', async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
  });
  try {
    const newArtist = await artist.save();
    // res.redirect(`artists/${newArtist.id}`)
    res.redirect(`artists`);
  } catch {
    res.render('artists/new', {
      artist: artist,
      errorMessage: 'Error creating Artist',
    });
  }
});

module.exports = router;
