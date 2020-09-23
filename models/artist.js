const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// This sets up the name and schema into our database
module.exports = mongoose.model('Artist', artistSchema);
