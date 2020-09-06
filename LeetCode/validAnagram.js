var isAnagram = function(s, t) {
s = s.replace(/\W/g, "");
t = t.replace(/\W/g, "");
s = s.split("").sort().join("");
t = t.split("").sort().join("");
  if(s == t){
      return true;
  }
    return false;
};