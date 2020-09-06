var isPowerOfFour = function(num) {
    for(let i = 0; i <= Math.sqrt(num); i++){
        if(4**i == num){
            return true;
        } 
    }
     return false; 
};

var isPowerOfThree = function(n) {
    for(let i = 0; i <= Math.sqrt(n); i++){
        if(3**i == n){
            return true;
        } 
    }
    return false;
};