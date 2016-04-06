var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next(); 
})
.get(function(req,res,next){
  res.end('will send all the promos to you');
})

.post(function(req,res,next){
  res.end('will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next){
  res.end('will delete all the promos.');
});

//For individual dishes only
promoRouter.route('/:promoId')
.all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next(); 
})

.get(function(req,res,next){
  res.end('will send details of the promotion: ' + req.params.promoId + 'to you');
})

.put(function(req,res,next){
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next){
  res.end('Deleting the promotion: ' + req.params.promoId);
});

module.exports = promoRouter;