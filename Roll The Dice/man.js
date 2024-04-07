let dice = document.querySelectorAll("img");
let rel = document.getElementById("result");
let btn = document.getElementById("btn");

const number = [
        "hinhanh/dice-01.svg",
        "hinhanh/dice-02.svg",
        "hinhanh/dice-03.svg",
        "hinhanh/dice-04.svg",
        "hinhanh/dice-05.svg",
        "hinhanh/dice-06.svg"
]

btn.addEventListener("click", () => {
        dice.forEach(function (element) {
                element.classList = "shake";
        })
        setTimeout(function () {
                dice.forEach(function (element) {
                        element.classList.remove("shake");
                        let x = Math.round(Math.random() * 10) % 6;
                        let y = Math.round(Math.random() * 10) % 6;
                        document.querySelector("#dice-01").setAttribute("src", number[x]);
                        document.querySelector("#dice-02").setAttribute("src", number[y]);
                        let result = x + y + 2;
                        rel.innerHTML = "your roll is " + result;
                })
        }, 1000);
})