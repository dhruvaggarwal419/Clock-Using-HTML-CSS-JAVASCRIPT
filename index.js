let time = document.getElementById('time');
let date = document.getElementsByClassName('date');

setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let seconds = d.getSeconds();
    let day = d.getDay();
    if (seconds < 9) {
        seconds = "0" + seconds;
    }    
    if (mins < 9) {
        mins = "0" + mins;
    }    
    if (hours < 9) {
        hours = "0" + hours;
    }    
    if (day == 0) {
        day = "SUN";
    } else if (day == 1) {
        day = "MON";
    } else if (day == 2) {
        day = "TUE";
    } else if (day == 3) {
        day = "WED";
    } else if (day == 4) {
        day = "THU";
    } else if (day == 5) {
        day = "FRI";
    } else {
        day = "SAT";
    } 
    date[0].innerText = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "  " + day;
    time.innerText = hours + " : " + mins + " : " + seconds;
}, 1000);