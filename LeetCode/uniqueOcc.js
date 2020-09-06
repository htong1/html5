var uniqueOccurrences = function(arr) {    
   arr.sort((a,b)=>a-b);
   let ar = [];
   let count = 1;
   for(let i = 0;i < arr.length; i++){
       if(arr[i] == arr[i+1]) {
           count++;
       } else {
           ar.push(count);
           count = 1;
       }
   }
   return new Set(ar).size == ar.length;
};

var uniqueOccurrences = function(arr) {
    debugger;
    const occMap = new Map();
    for(let i = 0; i < arr.length; i++){
    if (occMap.has(arr[i])) {
            occMap.set(arr[i], occMap.get(arr[i]) + 1);
        } else {
            occMap.set(arr[i], 1);
        }
    }
    let bla = Array.from(occMap.values());
    bla = bla.sort();
    for(let i = 0; i < bla.length; i++){
        if(bla[i] == bla[i+1]){
            return "true";
        }
        return "false";
    }
};
