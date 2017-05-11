// grab package variables
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// configure the app
// ========================

// tell node where to look for resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with access token
ig.use({
    access_token: '1601531327.1677ed0.e2c0b6a03fa44cc985e7928946f9ddd6',
});


// home page route
app.get('/', function(req, res) {
    // use the instagram package to get our profile's media
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
    // render the homepage and pass in our profile's images
        res.render('pages/index', { grams: medias });
    });
});

// Start the reactor!!
app.listen(8080);
console.log('App started! Look at http://localhost:8080');