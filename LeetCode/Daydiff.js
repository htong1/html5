var daysBetweenDates = function(date1, date2) {
    let val1 = new Date(date1).getTime();
    let val2 = new Date(date2).getTime();
    let diff1 = 0;
    let diff2 = 0;
    let days1 = 0;
    let days2 = 0;
    if(val1 === val2){
        return 0;
    }
    if(val1 > val2){
        diff1 = val1 - val2
        let hour1 = diff1/3600000;
        return days1 = hour1/24;
    } else {
        diff2 = val2 - val1;
        let hour2 = diff2/3600000;
        return days2 = hour2/24;
    }
    
};

var daysBetweenDates = function(date1, date2) {
return Math.abs(((new Date(date1).getTime() - new Date(date2).getTime())/24/3600/1000))
};