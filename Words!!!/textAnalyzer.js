function analyze(words){
let cleanWords = words.toLowerCase().replace(/[\,\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\+\$\@\#\%\*\=\-\^\\\/\/]/g,' ');
cleanWords = cleanWords.toLowerCase().replace(/[\-\_\/]/g,' ');
let indWords = cleanWords.split(" ");
const wordMap = new Map();
for(let i = 0; i < indWords.length; i++){
if(wordMap.has(indWords[i])){
   wordMap.set(indWords[i], wordMap.get(indWords[i]) + 1);
} else {
    wordMap.set(indWords[i],1);
}
}
let entries = wordMap.entries();
let sortedEntries = Array.from(entries).sort(compareFunction);
let total = frequency(wordMap);
display(sortedEntries, total);
}


function display(sortedEntries, total){
let tblHtml = `
<table> 
<th> Word </th>
<th> # Of Occurences </th>
<th> Frequency </th>
`
for(const k of sortedEntries){
tblHtml += createRow(k, total);
}
tblHtml += `</table>`
bla.innerHTML = tblHtml;
}

function createRow(k, total){
let row = `<tr> 
<td>${k[0]}</td> 
<td>${k[1]} </td>
<td> ${100 * (k[1] / total).toFixed(2)}%</td>
</tr>`
return row;
}

function frequency(wordMap){
let total = 0;
for(const x of wordMap.values()){
  total += x;
}
return total;
}

const compareFunction = function(entry1, entry2){
return entry2[1] - entry1[1];
}

/*function compare(bob){
  debugger;
  let jacob = wordMap.entries();
  let sortEntries = jacob.sort(function(a, b){return b[1] - a[1]});
  return sortedEntries;
}*/

/*function compare(wordMap){

if (a[1] > b[1])
{return 1;} else if 
  (a[1] < b[1]) {return -1;}
  else{return 0;}
}
return sorted.reverse();
}*/

/*function compare(e1, e2){
  for(const k of wordMap.entries()){
    let sorted = wordMap.sort((e1, e2) => 
  }
}

let sorted = wordMap.entries().sort(a,b) => b[1]-a[1])
*/