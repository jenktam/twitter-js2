'use strict';

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

// ROUTES
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

// need to update to dynamically populate fields
router.get('/users/:username', function(req, res) {
  var username = req.params.username;
  var tweets = tweetBank.find( {name: username} );
  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:id', function(req, res) {
  var id = +req.params.id;
  var tweets = tweetBank.find( {id: id} );
  console.log("tweets:", tweets);
  res.render( 'index', { tweets: tweets } );
});


router.post('/tweets', function(request, response) {
  var name = request.body.name;
  var text = request.body.text;
  tweetBank.add(name, text);
  response.redirect('/');
});

module.exports = router;





// router.get('/', function(request, response) {
//   // response.send('Hey, what is up..................');
//   const people = [{name: 'Full', age: 10}, {name: 'Stacker', age: 5}, {name: 'Son', age: 50}];
//   var fn = function(){
//     return "hey";
//   };
//   response.render( 'index', {title: 'Hall of Fame', people: people, fn: fn} );
// });

// router.get('/news', function(request, response) {
//   response.send('News ...');
// });
