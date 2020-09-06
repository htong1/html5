function processData(input) {
    //Enter your code here
    let num = input.split("\n");
    for(let i = 1; i < num.length; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(num[i]); j++){
            if(num[i] % j == 0){
                count ++;
            }
            if(Math.floor(Math.sqrt(num[i])) < Math.sqrt(num[i])){
                count++;
            }
        }
        if(num[i] < 2){
            console.log("Not prime");
        }
        else if(count > 2){
            console.log("Not prime");
        }else{
            console.log("Prime");
        }
    }
} 