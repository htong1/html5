var integerBreak = function(n) {
    if(n <= 3){
        return (n-1);
    }
    
    if(n >= 4){
     let div = (n-2)/3, num = Math.floor(div), exp = 3**num, prod = 3 * num, stuff = n - prod;
     return exp * stuff;
    }
};

var integerBreak = n => n <= 3? (n-1): 3**Math.floor((n-2)/3) * (n-3 *Math.floor((n-2)/3));