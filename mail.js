let button = document.getElementsByTagName("button")[0]
let p = document.getElementsByTagName("p")[0]

nbClick = 0
button.addEventListener("click", function () {
    nbClick++
    p.textContent = "Vous avez " + nbClick + " nouveaux mails"

})