const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

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

// set up server to run on port 3000
app.listen(process.env.PORT || 3000);
