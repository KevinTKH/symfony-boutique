/*var nbr = parseInt(prompt("Saisissez un chiffre entre 0 et 9 "))

if (nbr < 0 || nbr > 9) {
    console.log("Le chiffre entré n'est pas entre 0 et 9")

} else {
    var tab = []

    for (let i = 1; i <= 10; i++) {
        var res = nbr * i
        tab.push(nbr + " * " + i + " = " + res)
    }
    for (let i in tab) {
        console.log(tab[i])
    }
}*/

function calculatrice(a,b,o){
    switch(o){
        case "-":
            return a - b
            break;
        case "+":
            return a + b
            break;
        case "*":
            return a * b
            break;
        case "/":
            return a / b
            break;

        default:
        console.log("Opérande non reconnu")
    }
}

console.log(calculatrice(5,6,"*"));