// import express
const express = require('express');
// get router variable
const router = express.Router();

// create route
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
