let color = []
let lis = document.getElementsByTagName("li")  
for(li of lis){
    color.push(li.textContent)
}
console.log(color)

//2- Changer les couleurs
function changeColor(elt,couleur){
    switch(couleur){
        case "Rouge":
            elt.style.color = "red"
        break;

        case "Jaune":
            elt.style.color = "yellow"
        break;

        case "Bleu":
            elt.style.color = "blue"
        break;

        case "Vert":
            elt.style.color = "green"
        break;

        case "Violet":
            elt.style.color = "purple"
        break;
    }
    
}
for(li of lis){
    changeColor(li,li.textContent)
}

//3- 
let uls = document.querySelectorAll("ul")

for(ul of uls){
    if(ul.classList.contains("important")){
        ul.style.backgroundColor = "grey"
    }
    else if (ul.classList.contains("article")){
        ul.style.backgroundColor = "#d473d4"
    }
}

//4-
for(li of lis){
    if(li.textContent[0]=="V"){
        li.style.fontFamily = "Arial"
        li.style.fontSize = "20px"
    }
}