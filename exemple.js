/*div = document.getElementById("myId")

console.log(div)


a = document.getElementById('raouf')
console.log(a)


let elts = document.getElementsByClassName('article')
console.log(elts)

let a = document.getElementsByClassName('flex')[0]
console.log(a)*/

/*let p1 = document.getElementsByTagName("p")[0]

let span1 = p1.firstElementChild
let span3 = p1.lastElementChild

//Renvoie le contenu html des balises
console.log(span1.innerHTML)
console.log(span1.outerHTML)

//Renvoie le contenu texte des balises
console.log(span1.textContent)

span1.textContent = "Bonjour je test le DOM"


span3.innerHTML = "<div><b>Test InnerHtml</b></div>"

let div = document.getElementById("myId")

//Retourne une liste des classes
console.log(div.classList)

//Ajouter une classe
div.classList.add("principal")
console.log(div.classList)

//Supprimer une classe
div.classList.remove("article")
console.log(div.classList)


//Vérifier si une classe existe 
console.log(div.classList.contains("important"))
console.log(div.classList.contains("article"))

//Remplacer une classer 
div.classList.replace("important", "desimportant")
console.log(div.classList)


*/

let p2 = document.querySelectorAll("p")[1]
p2.innerHTML = "<div>Je viens d'être créée</div>"
let div = p2.querySelector("div")
div.classList.add("new", "balise")
div.classList.remove("new")
div.classList.replace("balise", "anchor")
console.log(div)
console.log(div.classList.contains("new"))