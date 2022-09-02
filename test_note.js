var nbrAleatoire = Math.floor(Math.random() * 10);
let div = document.getElementsByTagName("div")[0]
let button = document.getElementsByTagName("button")[0]
let b1 = document.createElement("button")
let texte = document.createElement("h1");

button.addEventListener("click", function () {
    jouer(nbrAleatoire);
})

b1.addEventListener("click", function () {
    //console.log(b1.textContent)

    if (b1.textContent == "Voir le prix") {
        texte.textContent = "Félicitations"
        texte.style.color = "green";
        texte.style.fontSize = "100px";
        texte.style.textAlign = "center";
        div.append(texte);
    }
    else {
        texte.textContent = "Bien essayé"
        texte.style.color = "red";
        texte.style.fontSize = "100px";
        texte.style.textAlign = "center";
        div.append(texte);
    }
})

function jouer(nbrAleatoire) {
    tentative = 0
    console.log(nbrAleatoire);
    do {
        var choix = prompt("Devinez le chiffre qui a été choisis entre 0 et 9")
        tentative++;
        if (choix == nbrAleatoire) {
            alert("Vous avez gagné");

        }
        else if (choix > nbrAleatoire) {
            alert("Trop haut");
        }
        else {
            alert("Trop bas");
        }

    } while (choix != nbrAleatoire);

    if (tentative <= 2) {
        b1.textContent = "Voir le prix"
        div.append(b1)
    }
    else {
        b1.textContent = "Voir mon lot de consolations"
        div.append(b1)
    }
}










