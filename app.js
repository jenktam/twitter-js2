// REQUIRE BUILT-IN, USER-CREATED, and 3RD PARTY MODULES
const express = require('express');
const app = express();
const tweets = require('./tweetBank.js');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser')

// MIDDLEWARE

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// NUNJUCKS TEMPLATING ENGINE INTEGRATION
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCach: true}); // point nunjucks to the proper directory for templates

app.use(morgan('dev'));

// CONSOLE LOGGING MIDDLEWARE
app.use(express.static('public'));
app.use('/', routes);

app.listen(3000, function() {
  console.log("You have successfully reached port 3000!");
})
