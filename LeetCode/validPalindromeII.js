
var validPalindrome = function(s) {
debugger;
let oddCount = 0;
let palMap = new Map();
for(let ch of s) { 
    palMap.set(ch, palMap.has(ch) ? palMap.get(ch) + 1 : 1)
}
for(const c of palMap.values()){
    if(c % 2 != 0){
        oddCount++
    }
}
    if(oddCount > 2){
        return false;
        }
    return true;
};

var validPalindrome = function(s) {
 if(s == s.split('').reverse().join('')){
       return true;
   }
       for(let k = 0; k < s.length; k++) {
           debugger;
           let rev = s.slice(0,k) + s.slice(k+1);
           if(rev == rev.split('').reverse().join('')){
               return true;
           }
       }
    return false;
   }

   var validPalindrome = function(s) {
   for (let l = 0, r = s.length-1, removed = 1; l < r;) {
     if (s[l] == s[r]) {  //matching
       l++;
       r--;
     } 
       else if (s[l+1] === s[r] && s[l+2] === s[r-1] && removed > 0) {
        l++;
        removed--;
      }  else if (s[l] === s[r-1] && removed > 0){
         r--;
         removed--;
      } else {
          return false;
      }
     }
    return true;
}