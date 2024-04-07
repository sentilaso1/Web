function changname(number1 , number2) {
        document.getElementById("demo").innerHTML = number1 + number2;
}

function changeImage(url) {
        const image = document.getElementById("image");
        image.src = url;
}
function check(id) {
        let a = Math.floor(Math.random()*10+1);
        const element = document.getElementById(id);
        const text = element.childNodes[1].value;
        let b = "The number is: " + a;
        document.getElementById("result").innerHTML = (text == a) ? "Good Work" : "Not Matched" + "<br>" + b;
}
function cal(id) {
        const a = new Date();
        let k = a.getFullYear();
        if (a.getMonth() >= 11 && a.getDate() >= 25) {
                k++;
        }
        const d = new Date(k,11,25);
        let one_day = 1000*60*60*24;
        document.getElementById(id).innerHTML = Math.ceil((d.getTime() - a.getTime()) / (one_day)) + " days left until Christmas!";
}
function settime() {
        const d = new Date();
        const daylist = ["Sun","Mon","Tues","Wed","Thurs","Fri","Satur"];
        let Date1 = daylist[d.getDay()] + "<br>";
        let day = "<br>" + "This day is: " + d.getDate()+"/"+(1+d.getMonth())+"/"+d.getFullYear();
        document.getElementById("thu").innerHTML = Date1 + "Current Time is: " + d.toLocaleTimeString() + day;
}
function animate_string(id) {
        const element = document.getElementById(id);
        const textNode = element.childNodes[0]; 
        let text = textNode.data;
        setInterval(function () {
                text = text[text.length - 1] + text.substring(0, text.length - 1);
                textNode.data = text;
        }, 100);
}
function changcolr() {
        const a = document.body;
        a.style.backgroundColor =  (a.style.backgroundColor == "blue") ? "yellow" : "blue";
}
function clearIn() {
        clearInterval(myinterval);
        const a = document.body;
        a.style.backgroundColor = "white";
}
setInterval(settime,1000);
function mul(params) {
        const element1 = document.getElementById("num1").value;
        const element2 = document.getElementById("num2").value;
        document.getElementById("kq").innerHTML = "The Result is: " + (element1 * element2); 
}
function divide(params) {
        const element1 = document.getElementById("num1").value;
        const element2 = document.getElementById("num2").value;
        document.getElementById("kq").innerHTML = "The Result is: " + (element1 / element2); 
}
function tinhtoando() {
        const element1 = document.getElementById("Degree");
        let a = element1.value;
        const element2 = document.getElementById("nhapdo");
        let b = element2.value;
        let result;
        if (a == "C Degree") {
                result = 9/5*b+32 + " do F";
        } else {
                result = (b-32)/9*5 + " do C";
        }
        document.getElementById("show").innerHTML = result;
}
function CheckChu() {
        const element1 = document.getElementById("nhapdo");
        let b = element1.value;
        document.getElementById("show").innerHTML = b;
}
function hieno() {
        const element1 = document.getElementById("nhapdo");
        let index = element1.value;
        for (let i = 0; i < index; i++) {
                const para = document.createElement("input");
                document.body.appendChild(para);
                para.id = `input_${i}`;  
        }
}
function temp() {
        const element1 = document.getElementById("nhapdo");
        let index = element1.value;
        let result = 0;
        for (let i = 0; i < index; i++) {
                const element2 = document.getElementById(`input_${i}`);
                let a = element2.value;
                result = (result > a) ? result : a;
        }
        document.getElementById("show").innerHTML = result;  
}