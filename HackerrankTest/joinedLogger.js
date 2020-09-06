/*function myLog(...messages){
for(let i = 0; i < messages.length; i++){
  console.log(messages[i].text)
}
}*/

function joinedlogger(level, sep){
return function(...messages){
for(let i = 0; i < messages.length; i++){
  console.log(messages[i].text)
}
}
}

let msg1 = {level: 2, text: "bla"}
let msg2 = {level: 3, text: "hello"}
myLog = joinedLogger();
myLog(msg1, msg2);