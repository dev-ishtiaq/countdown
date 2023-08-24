function countdown() {
    var now = new Date();
    var offerDate = new Date(2022, 07, 08);

    var currentTime = now.getTime();
    var offertime = offerDate.getTime();

    var realTime = offertime - currentTime;

    var s = Math.floor(realTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 60;
    m %= 60;
    s %= 60;

    d = (d < 10) ? "0" + d : d;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    setTimeout(countdown, 1000);
};
countdown();

var countDownDate = new Date ("Sep 08, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor
    (distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor
    ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor
    ((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor
    ((distance % (1000 * 60)) / 1000);

    days = (days < 10 ) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    document.getElementById("days2").innerHTML = days;
    document.getElementById("hours2").innerHTML = hours;
    document.getElementById("minutes2").innerHTML = minutes;
    document.getElementById("seconds2").innerHTML = seconds;

    document.getElementById("days3").innerHTML = days;
    document.getElementById("hours3").innerHTML = hours;
    document.getElementById("minutes3").innerHTML = minutes;
    document.getElementById("seconds3").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        document.getElementById("days2").innerHTML = "00";
        document.getElementById("hours2").innerHTML = "00";
        document.getElementById("minutes2").innerHTML = "00";
        document.getElementById("seconds2").innerHTML = "00";    
    }
},1000);