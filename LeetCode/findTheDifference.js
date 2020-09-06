var findTheDifference = function(s, t) {
    s = s.split("").sort();
    t = t.split("").sort();
    const sMap = new Map();
   for(let i = 0; i < s.length; i++){
           sMap.set(s[i], 1);
           if(!sMap.delete(t[i])){
              return t[i];
           } 
       }
        return t[t.length - 1];
   }


var findTheDifference = function(s, t) {
s = s.split("").sort().join("")
t = t.split("").sort().join("")
   
for(let i = 0; i < s.length; i++){

   if(s[i] !== t[i]){
   return t[i]
       }
   }  
   return t[t.length - 1]
};
