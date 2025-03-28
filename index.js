let compte = document.querySelector(".temps");
let butn = document.querySelector("#vide");
let bouton = document.querySelector(".go");
let decompte = null
let minute 
let second


function decomptage() {
    if (minute === 0 && second === 0) {
        clearInterval(decompte)
       compte.textContent = "C'est terminé !"
       return
        
    }
    if (second == 0 && minute > 0) {
        minute--;
        second = 59; 
    } else {
        second--;
    }
    compte.textContent= minute + " : " + second;

}

function affichtemp() {
    minute = parseInt (butn.value);
    second = 0;
    if (decompte!==null) {
        clearInterval(decompte)  
    }
    compte.textContent = minute + " : " + second;
    decompte = setInterval(decomptage, 1000)
}

bouton.addEventListener("click", affichtemp)





