function pangrams(s) {
let stringBLA = s.replace(/\s/g, "").toLowerCase();
const panMap = new Map();
for(const c of stringBLA){
            panMap.set(c, 1);
    }

    if(panMap.size == 26){
      return "pangram";
    }  
    return "not pangram";
}

//alternatives

//return (new Map(s.toLowerCase().replace(/\s/g, '').split('').map(e=>[e,e]))).size===26?"pangram":"not pangram";

//return Object.keys(Object.fromEntries(s.toLowerCase().replace(/\s/g, '').split('').map(e=>[e,e]))).length===26?"pangram":"not pangram";

/*let cleanA = s.toLowerCase().replace(/\s/g, '').split('');
let set = new Set(cleanA);
return set.size===26?"pangram":"not pangram";*/

/*
let alphabet='abcdefghijklmnopqrstwxyz';
for(const c of alphabet){
if(!str.includes(c)){
return "not pangram"
}
return "pangram"
}
*/