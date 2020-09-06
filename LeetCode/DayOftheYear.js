var dayOfTheWeek = function(day, month, year) {
    let x =  new Date(year,month-1,day).getDay();
    return x == 0? "Sunday": x == 1? "Monday": x == 2? "Tuesday": x == 3? "Wednesday": x == 4? "Thursday": x == 5? "Friday": x == 6? "Saturday" 
    /*if(x === 0){return "Sunday"}
    if(x === 1){return "Monday" }
    if(x === 2){return "Tuesday" }
    if(x === 3){return "Wednesday" }
    if(x === 4){return "Thursday"}
    if(x === 5){return "Friday"}
    if(x === 6){return "Saturday"}*/
    // Write your code here
};