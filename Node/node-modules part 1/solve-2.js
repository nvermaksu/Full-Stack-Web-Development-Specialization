var rect = require('./rectangle-2');

function solveRect(l,b){
    console.log("Solving for rectangle with lenght "+ l + " and Breadth "+ b);
    rect(l,b, function(err,rectangle){
        if(err){
            console.log(err);
        }
        else{
            console.log(" The area of a rectangle of dimensions length = " + l + " and Breadth = " + b + " is " + rectangle.area(l,b));
            console.log(" The preimeter of a rectangle of dimensions length = " + l + " and Breadth = " + b + " is " + rectangle.perimeter(l,b));
        }
    });
};

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);