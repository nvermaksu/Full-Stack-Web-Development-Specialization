var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next(); 
})
.get(function(req,res,next){
  res.end('will send all the leaders to you');
})

.post(function(req,res,next){
  res.end('will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next){
  res.end('will delete all the leaders.');
});

//For individual dishes only
leaderRouter.route('/:leaderId')
.all(function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next(); 
})

.get(function(req,res,next){
  res.end('will send details of the Leader: ' + req.params.leaderId + 'to you');
})

.put(function(req,res,next){
    res.write('Updating the Leader: ' + req.params.leaderId + '\n');
    res.end('Will update the Leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next){
  res.end('Deleting the Leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;