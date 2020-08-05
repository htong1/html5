function analyze(words){
let cleanWords = words.replace(/[\,\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\+\$\@\#\%\*\=\-\^\\\/\/]/g,' ');
cleanWords = cleanWords.replace(/[\-\_\/]/g,' ');
let indWords = cleanWords.split(" ");
let total = 0;
const wordMap = new Map();
for(let i = 0; i < indWords.length; i++){
if(wordMap.has(indWords[i])){
   wordMap.set(indWords[i], wordMap.get(indWords[i]) + 1);
} else {
    wordMap.set(indWords[i],1);
}
}
display(wordMap)
}


function display(wordMap){
let tblHtml = `
<table> 
<th> Word </th>
<th> Occurences </th>
`
for(const k of wordMap.entries()){
tblHtml += createRow(k);
}
tblHtml += `</table>`
bla.innerHTML = tblHtml;
}

function createRow(k){
let row = `<tr> 
<td>${k[0]}</td> 
<td>${k[1]} </td></tr>`
return row;
}