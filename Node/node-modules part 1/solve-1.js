var rect = require('./rectangle-1.js');

function solveRect(l,b){
    console.log("Solving for rectangle with lenght "+ l + " and Breadth "+ b);
    if(l < 0 || b < 0){
        console.log("Rectangle dimensions should be greater than Zero: l = "+ l + " and Breadth "+ b);
    }else{
        console.log(" The area of a rectangle of dimensions length = " + l + " and Breadth = " + b + " is " + rect.area(l,b));
        console.log(" The preimeter of a rectangle of dimensions length = " + l + " and Breadth = " + b + " is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);