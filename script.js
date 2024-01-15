const panier = {
    pomme : 0,
    poire : 0,
    prune : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée

let prixPomme = 13.50;
let prixPoire = 20;
let prixPrune = 22;

let poidPomme = 10;
let poidPoire = 12;
let poidPrune = 15;

let quantiteTotal = 0;
let prixTotal = 0;
let poidsTotal = 0;

function AjouterPanierPomme(){
    panier.pomme++;
    document.querySelector("#qtePommes").textContent = panier.pomme;

    document.querySelector("#prixPommes").textContent = prixPomme;
    prixPomme += 13.50;

    document.querySelector("#poidsPommes").textContent = poidPomme;
    poidPomme += 10;

    quantiteTotal++;
    document.querySelector("#qteTotal").textContent = quantiteTotal;

    prixTotal+=13.50;
    document.querySelector("#prixTotal").textContent = prixTotal;

    poidsTotal+=10;
    document.querySelector("#poidsTotal").textContent = poidsTotal;
}

function AjouterPanierPoire(){
    panier.poire++;
    document.querySelector("#qtePoires").textContent = panier.poire;

    document.querySelector("#prixPoires").textContent = prixPoire;
    prixPoire += 20;

    document.querySelector("#poidsPoires").textContent = poidPoire;
    poidPoire += 12;

    quantiteTotal++;
    document.querySelector("#qteTotal").textContent = quantiteTotal;

    prixTotal+=20;
    document.querySelector("#prixTotal").textContent = prixTotal;

    poidsTotal+=12;
    document.querySelector("#poidsTotal").textContent = poidsTotal;
}

function AjouterPanierPrune(){
    panier.prune++;
    document.querySelector("#qtePrunes").textContent = panier.prune;

    document.querySelector("#prixPrunes").textContent = prixPrune;
    prixPrune += 22;

    document.querySelector("#poidsPrunes").textContent = poidPrune;
    poidPrune += 15;

    quantiteTotal++
    document.querySelector("#qteTotal").textContent = quantiteTotal;

    prixTotal+=22;
    document.querySelector("#prixTotal").textContent = prixTotal;

    poidsTotal+=15;
    document.querySelector("#poidsTotal").textContent = poidsTotal;
}


















