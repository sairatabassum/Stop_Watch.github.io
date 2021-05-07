

// Initialize hour, minute, second
var hour = 0;
var minute = 0;
var second = 0;

// Select Start , Stop , Reset Button
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");

// Select Hour , Minute , Second  Text

var H = document.querySelector(".hour");
var M = document.querySelector(".minute");
var S = document.querySelector(".second");


var Environment;


start.onclick = function () {

    clearInterval(Environment);
    // The setInterval() method will continue until clearInterval() is called
    Environment = setInterval(startCount, 1000);

}


stop.onclick = function () {

    clearInterval(Environment);

}


reset.onclick = function () {

    clearInterval(Environment);
    H.innerHTML = "00";
    M.innerHTML = "00";
    S.innerHTML = "00";
    hour = 0;
    minute = 0;
    second = 0;
}



function startCount() {

    second++;
    // Length of second ; if 0 then length= 1 else length= 2
    v_s = parseInt(second / 10);


    if (v_s == 0) {

        S.innerHTML = '0' + second;

    }
    else {

        S.innerHTML = second;
    }

    // 60 seconds == 1 minute
    if (second > 59) {

        second = 0;
        S.innerHTML = "00";
        minute++;
        v_m = parseInt(minute / 10);


        if (v_m == 0) {

            M.innerHTML = '0' + minute;

        }
        else {

            M.innerHTML = minute;
        }
    }

    // 60 minutes == 1 hour
    if (minute > 59) {

        minute = 0;
        M.innerHTML = "00";
        hour++;
        v_h = parseInt(hour / 10);


        if (v_h == 0) {

            H.innerHTML = '0' + hour;

        }
        else {

            H.innerHTML = hour;
        }


    }


}

