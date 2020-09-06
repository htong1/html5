var wordPattern = function(pattern, str) {
    debugger;
    let patternObj = {};
    let wordObj = {};
    let words = str.split(" ");
    let resultA = "";
    let resultB = "";
    for(let i = 0; i < pattern.length; i++){
   patternObj[pattern[i]] = words[i]
   wordObj[words[i]] = pattern[i]
    }
   return pattern.split("").map(c => patternObj[c]).join(" ") === str && 
    str.split(" ").map(c => wordObj[c]).join("")  === pattern
}