var isIsomorphic = function(s, t) {
let word1 = {};
let word2 = {};
let resultA = "";
let resultB = "";
   
   for(let i = 0; i < s.length; i++){
   word1[s[i]] = t[i]
   word2[t[i]] = s[i]
   }
   
   for(let i = 0; i < s.length; i++){
   resultA+= word1[s[i]]
   resultB+= word2[t[i]]
   }
return resultA === t && resultB === s;
}

//alternative

var isIsomorphic = function(s, t) {
let word1 = {}, word2 = {};  
   for(let i = 0; i < s.length; i++){
   word1[s[i]] = t[i]
   word2[t[i]] = s[i]
   }
   return s.split("").map(c => word1[c]).join("") === t &&
   t.split("").map(c => word2[c]).join("") === s;
}
   