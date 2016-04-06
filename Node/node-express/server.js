var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser'); //this parses the data into the required format like json or xml

//Getting all the required routers
var dishesRouter = require('./dishRouter.js');
var promoRouter = require('./promoRouter.js');
var leaderRouter = require('./leaderRouter.js');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes',dishesRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);

//Handle Put and post request not implemented
app.use(function(req,res,next){
    res.status = 404;
    res.end("Method: " + req.method + " is not implement for: " + req.url);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});