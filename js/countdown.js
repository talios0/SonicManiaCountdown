﻿var endDate = new Date(2017, 07, 15, 12, 0, 0, 0);
var _mili = 1;
var _second = _mili*1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
var secondsTimer;
var interval;
var currentTime;
var enhance;

var days;
var hours;
var minutes;
var seconds;
var milis;
var _enhance = false;

Setup();


enhance = document.getElementById("enhance").addEventListener("change", function () {
    if(document.getElementById("enhance").checked) {
        _enhance = true;
    } else {
        _enhance = false;
    }
})
function Setup() {
    timer = document.getElementById("timer");
    secondsTimer = document.getElementById("secondsTimer");
    console.log(new Date());
    console.log(endDate);
    CalculateTime();
}

function CalculateTime() {
    currentTime = new Date();
    var timeLeft = endDate - currentTime;

    if (timeLeft < 0) {
        clearInterval(timer);
        timer.innerHTML = "Hey! What are you doing here? Sonic Mania is out NOW!!!";

        return;
    }
     days = Math.floor(timeLeft / _day);
     hours = Math.floor((timeLeft % _day) / _hour);
     minutes = Math.floor((timeLeft % _hour) / _minute);
     seconds = Math.floor((timeLeft % _minute) / _second);
     milis = Math.floor((timeLeft % _second) / _mili);

    if (days < 2 && days > 0) {
        timer.innerHTML = days + " day ";
    } else {
        timer.innerHTML = days + " days ";
    }
    if (hours < 2 && hours > 0) {
        timer.innerHTML += hours + " hour ";
    } else {
        timer.innerHTML += hours + " hours ";
    }
    if (minutes < 2 && minutes > 0) {
        timer.innerHTML += minutes + " minute";
    } else {
        timer.innerHTML += minutes + " minutes";
    }
    if (seconds < 2 && seconds > 0) {
        secondsTimer.innerHTML = seconds + " second";
    } else {
        secondsTimer.innerHTML = seconds + " seconds";
    }
    
    if (_enhance) {
        MiliCount();
    } else {
        setTimeout(CalculateTime, 50);
    }
}

function MiliCount() {
    var countdownTime = new Date();
    var timeInterval = countdownTime - currentTime;
    var __days = Math.floor(timeInterval / _day);
    var __hours = Math.floor((timeInterval % _day) / _hour);
    var __minutes = Math.floor((timeInterval % _hour) / _minute);
    var __seconds = Math.floor((timeInterval % _minute) / _second);
    var __milis = Math.floor((timeInterval % _second) / _mili);
    //console.log(__milis+milis);
    if (milis + __milis >= 1000) {
        CalculateTime();
    } else {
        milis += __milis;
        setTimeout(MiliCount,50);
    }
}