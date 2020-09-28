const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    // Album title
    type: String,
    required: true,
  },
  description: {
    // Info about album
    type: String,
  },
  releaseDate: {
    // Album release date
    type: Date,
    required: true,
  },
  songCount: {
    // How many songs on album
    type: Number,
    required: true,
  },
  createdAt: {
    // Date that the album was added to database
    type: Date,
    required: true,
    default: Date.now,
  },
  coverImageName: {
    // We only save the image name to the database. The image itself will save to the server files.
    type: String,
    required: true,
  },
  artist: {
    // This will reference the artist model so we can match album with artist
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Artist',
  },
});

// This sets up the name and schema into our database
module.exports = mongoose.model('Album', albumSchema);
