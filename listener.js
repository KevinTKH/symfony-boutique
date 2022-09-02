let button = document.getElementsByTagName("button")[0]
button.addEventListener("click", function () {
    let div = document.getElementsByTagName("div")[0]
    div.style.fontSize += "20px"
    div.style.color = "red"
})

let button2 = document.getElementsByTagName("button")[0]
button2.addEventListener("click", function () {
    button2.textContent = "Vous m'avez cliqué"
})