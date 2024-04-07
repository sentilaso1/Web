let result = document.getElementById("nghia");
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.getElementById("btn");
let sound = document.getElementById("sound"); 

btn.addEventListener("click", () => {
        let search = document.getElementById("search").value;
        fetch(`${url}${search}`)
        .then(data => data.json())
                .then(item => {
                        console.log(item);
        result.innerHTML = `
                <div class="nghia" id="nghia">
                        <div class="phantu" style="font-size: 30px;font-weight: 300">${search}
                                <span onclick="playSound()" id="sound" class="material-symbols-outlined" style="float: right;margin-right: 10px;cursor: pointer;color: #ae9cff;">
                                        volume_up
                                </span>
                        </div>
                        <div class="phantu" style="font-size: 13px;color: black;opacity: 0.5;">${item[0].meanings[0].partOfSpeech} /${item[0].phonetic}/</div>
                        <div class="phantu" style="font-size: 15px;">${item[0].meanings[0].definitions[0].definition}</div>
                        <div class="phantu" style="border-left: 5px #ae9cff solid;"><i> ${item[0].meanings[0].definitions[0].example || ""}</i></div>
                </div>`
            sound.setAttribute("src", `https:${item[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function playSound() {
    sound.play();
}
