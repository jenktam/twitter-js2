// REQUIRE BUILT-IN, USER-CREATED, and 3RD PARTY MODULES
const express = require('express');
const app = express();
const morgan = require('morgan');


// MIDDLEWARE

// CONSOLE LOGGING MIDDLEWARE
app.use(morgan('dev'));

app.get('/', function(req, res) {
  console.log('hi');
  res.send('You have reached the GET / route!');
});

app.get('/news', function(req, res) {
  res.send('This is the /news route');
});

app.listen(3000, function() {
  console.log("You have successfully reached 3000!");
})
