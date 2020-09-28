// Check to see if we are in production, to connect with mongodb
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

// require index router to tell our app to use it
const indexRouter = require('./routes/index');
// require artists router to tell our app to use it
const artistsRouter = require('./routes/artists');
// require albums router to tell our app to use it
const albumsRouter = require('./routes/albums');

// set up view engine with ejs
app.set('view engine', 'ejs');
// set where views are coming from
app.set('views', __dirname + '/views');
// set up express layouts in layouts folder
app.set('layout', 'layouts/layout');
// tell express to use express layouts
app.use(expressLayouts);
// tell express where public files live
app.use(express.static('public'));
// tell express how to use body-parser
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// Database
// get values from Database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// use indexRouter
app.use('/', indexRouter);
// use artistsRouter
app.use('/artists', artistsRouter);
// use albumsRouter
app.use('/albums', albumsRouter);

// set up server to run on port 3000
app.listen(process.env.PORT || 3000);
