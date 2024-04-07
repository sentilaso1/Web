let key = 0;
let check = 0;
function doanything(string) {
        if (string === "OFF") {
                document.getElementById("input").innerHTML = "";
                document.getElementById("result").innerHTML = "";
                key = false;
        }if (string === "AC" || string === "C") {
                document.getElementById("input").innerHTML = "";
                document.getElementById("result").innerHTML = "";
                key = true;
        }else if (key) {
                if (string === 'Del') {
                        let element = document.getElementById("input").innerHTML;
                        document.getElementById("input").innerHTML = element.slice(0, element.length - 1);
                }
                else {
                        if (check) {
                                document.getElementById("result").innerHTML = "";
                                document.getElementById("input").innerHTML = string;
                                check = 0;
                        } else {
                                let element = document.getElementById("input").innerHTML;
                                document.getElementById("input").innerHTML = element + string;
                        }
                }
        }
}
function cal() {
        let element = document.getElementById('input').innerHTML;
        document.getElementById('result').innerHTML = eval(element);
        check = 1;
}