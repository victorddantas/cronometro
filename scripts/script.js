var seconds = 00;
var tenths = 00;
var appendSeconds = document.getElementById("seconds");
var appendTenths = document.getElementById("tenths");
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var Interval;

buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function () {
    clearInterval(Interval);
}


buttonReset.onclick = function () {
    clearInterval(Interval);
    tenths = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTenths.innerHTML = tenths;

}

function startTimer() {
    tenths++;

    if (tenths <= 9) {
        appendTenths.innerHTML = "0" + tenths;
    }

    if (tenths > 9) {
        appendTenths.innerHTML = tenths;
    }

    if (tenths > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tenths = 0;
        appendTenths.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}