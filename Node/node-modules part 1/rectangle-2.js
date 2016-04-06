module.exports = function(x,y,callback){
    try{
        if(x < 0 || y < 0){
         throw new Error("Rectangle dimensions should be greater than Zero: l = "+ x + " and Breadth "+ y);
        }
        else{
            callback(null, {
                perimeter: function(){
                    return (2*(x+y));
                },
                area: function(){
                return (x*y);
                }
            });
        }//close else
    }//close try
    catch(error){
        callback(error,null);
    }
}
