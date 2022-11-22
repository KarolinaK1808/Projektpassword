
let cyfry = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbole = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
let litery = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


let pswbutton = document.getElementById("pswbutton")
let stageEl = document.getElementById("stage")
let stageEl2 = document.getElementById("stage2")
let wybierz = document.getElementById("wybierz")
let ch1 = document.getElementById("ch1")
let ch2 = document.getElementById("ch2")

let stagelist = [stageEl, stageEl2]


function generujhaslo(stage) {
    stage.textContent = ""
    let characters = litery
    if (ch1.checked) {
        characters = characters.concat(cyfry)
    }
    if (ch2.checked) {
        characters = characters.concat(symbole)
    }
    for (let i = 0; i < wybierz.value; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        stage.textContent += characters[randomIndexOne]
    }
}

pswbutton.addEventListener("click", function () {
    generujhaslo(stageEl)
    generujhaslo(stageEl2)
})


stagelist.forEach(function (e) {
    e.addEventListener("click", function () {
        generujhaslo(e)
        navigator.clipboard.writeText(e.textContent)
    }
    )
})

