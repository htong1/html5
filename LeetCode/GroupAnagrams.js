const groupAnagrams = function(strs) {
    const anagramMap = new Map();
    for(let i = 0; i < strs.length; i++){
      let aKey = strs[i].split("").sort().join("");
        if(anagramMap.has(aKey)){
            let val = anagramMap.get(aKey).push(strs[i]);
            anagramMap.set(aKey, val);
        } else {
            anagramMap.set(aKey, [strs[i]])
        }
    }
    return Array.from(anagramMap.values());
};
//alternative
const groupAnagrams = function(strs) {
   let anaMap = {};
   for (const s of strs){
       let sKey = s.split('').sort().join('');
       if (anaMap[sKey]){
           anaMap[sKey].push(s);
       }
       else{
           anaMap[sKey] = [s];
       }
   }
   return Object.values(anaMap);
};