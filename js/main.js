console.log("script loadead");
// On récupère les  éléments de notre calculatrice
const button = document.querySelector("button");
console.log("button => ", button);

const buttons = document.querySelectorAll("button");
console.log("buttons => ", buttons);

const screen = document.querySelector(".screen");
console.log("screen => ", screen);

const history = document.querySelector(".history");
console.log("history => ", history);
//  on définit les variables utiles
let firstOperand = "";
let lastOperand = "";
let operateur = "";

//   on ajout un écouteur d'évenment à chaque bouton

// er facon d'ecriture

// buttons.forEach((button) => {
// button.addEventListener("click", ecoute)
// });
//  function ecoute(e){
//     console.log(e)
//  }

buttons.forEach((button) => {
    // Boucle, button prend chaque valeur du tableau
    button.addEventListener("click", (e) => {
        const bouttonContent = e.target.innerText;
        // console.log(e.target.innerText);
        //  si c'est un chifftr on l'ajoute à
        if (!isNaN(bouttonContent) || bouttonContent === ".") {
            if (operateur === "") {
                firstOperand += bouttonContent;
                console.log("bouttonContent => ", bouttonContent);
                screen.innerText = firstOperand;
            } else {
                lastOperand += bouttonContent;
                console.log("bouttonContent => ", bouttonContent);
                screen.innerText = lastOperand;
            }
        }
        // si  c'est un operateur en stocke
        if (
            bouttonContent === "+" ||
            bouttonContent === "-" ||
            bouttonContent === "*" ||
            bouttonContent === "/"
        ) {
            // TODO   firstOperand === true
            operateur = bouttonContent;
        }
        // on affiche le resultat
        if (bouttonContent === "=") {
            screen.innerText = eval(
                `${firstOperand} ${operateur} ${lastOperand}`
            );
        }

        //RESET
   
    if (bouttonContent === "C") {
        // screen.innerText = eval(
        //     `${firstOperand} ${operateur} ${lastOperand}`
        // );
        screen.innerText = "";
        firstOperand = "";
        lastOperand = "";
        operateur = "";
    } });
});
