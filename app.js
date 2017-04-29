// REQUIRE BUILT-IN, USER-CREATED, and 3RD PARTY MODULES
const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const tweets = require('./tweetBank.js');

// MIDDLEWARE

// CONSOLE LOGGING MIDDLEWARE
app.use(express.static('public'));
app.use(morgan('dev'));
app.use('/', routes);

// NUNJUCKS TEMPLATING ENGINE INTEGRATION
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCach: true}); // point nunjucks to the proper directory for templates

app.listen(3000, function() {
  console.log("You have successfully reached port 3000!");
})
