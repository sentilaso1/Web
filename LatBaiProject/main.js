let key = false;
let soluongdung = 0;
let co2chua = [];
let myinterval;
let arrxuathien = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'];
let arrcheck = [false, false, false, false, false, false, false, false, false, false];
function bamgio() {
        key = true;
        let minutesLabel = document.getElementById("minutes");
        let secondsLabel = document.getElementById("seconds");
        let totalSeconds = 0;
        shuffle();
        myinterval =  setInterval(setTime, 100);
        function setTime() {
                ++totalSeconds;
                secondsLabel.innerHTML = pad(totalSeconds % 60);
                minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        }
        function pad(val) {
                var valString = val + "";
                if (valString.length < 2) {
                        return "0" + valString;
                } else {
                        return valString;
                }
        }
}
function shuffle() {
        for (let i = 0; i < 1000; i++) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                [arrxuathien[x], arrxuathien[y]] = [arrxuathien[y], arrxuathien[x]];
        }
}
function latbai(string) {
        if (key) {
                let element = document.getElementById(`${string}`);
                let index = string - 1;
                if (!arrcheck[index]) {
                        co2chua.push(arrxuathien[index]);
                        co2chua.push(index);
                        element.innerHTML = `${arrxuathien[index]}`;
                        arrcheck[index] = true;
                }
                if (co2chua.length === 4) {
                        setTimeout(checkdungsai, 100);
                        if (soluongdung === 4) {
                                clearInterval(myinterval);
                        }
                }
                
        }
}
function checkdungsai(params) {
        if (arrxuathien[co2chua[0]] === arrxuathien[co2chua[2]]) {
                arrcheck[co2chua[1]] = true;
                arrcheck[co2chua[3]] = true;
                co2chua.pop();
                co2chua.pop();
                co2chua.pop();
                co2chua.pop();
                soluongdung++;
                return;
        }
        document.getElementById(`${co2chua[1] + 1}`).innerHTML = "";
        document.getElementById(`${co2chua[3] + 1}`).innerHTML = "";
        arrcheck[co2chua[1]] = false;
        arrcheck[co2chua[3]] = false;
        co2chua.pop();
        co2chua.pop();
        co2chua.pop();
        co2chua.pop();
}