var express = require('express');
var bodyParser = require('body-parser');

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next(); 
})
.get(function(req,res,next){
  res.end('will send all the dishes to you');
})

.post(function(req,res,next){
  res.end('will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next){
  res.end('will delete all the dishes');
});

//For individual dishes only
dishRouter.route('/:dishId')
.all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next(); 
})

.get(function(req,res,next){
  res.end('will send details of the dish: ' + req.params.dishId + 'to you');
})

.put(function(req,res,next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    res.end('will send details of the dish: ' + req.params.dishId + 'to you');
})

.delete(function(req,res,next){
  res.end('Deleting the dish: ' + req.params.dishId);
});

module.exports = dishRouter;

