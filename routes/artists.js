// import express
const express = require('express');
// get router variable
const router = express.Router();

// All artists route
router.get('/', (req, res) => {
  res.render('artists/index');
});

//  New artist route (creates form to add artist)
router.get('/new', (req, res) => {
  res.render('artists/new');
});

// Create new artist
// we will use post for creation
router.post('/', (req, res) => {
  res.send('Create artist');
});

module.exports = router;
