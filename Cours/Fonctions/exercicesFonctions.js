// EXERCICES FONCTIONS

/**
 * 1-FONCTION SIMPLE
 * Crées une fonction appelée saluer qui imprime "Bonjour!" dans la console.
 */

function saluer(){

    console.log("Bonjour!");
}

saluer();

/**
 * 2-FONCTION AVEC PARAMETRES
 * Ecris une fonction afficherCarre qui prends un nombre comme paramètre et affiche le carré de ce nombre
 */

function afficherCarre(nombre){

    return nombre * 2;
}

console.log(afficherCarre(4));
console.log(afficherCarre(7));

/**
 * 3-FONCTION AVEC RETOUR
 * Crées une fonction multiplier qui accepte deux paramètres et retourne leur produit.
 */

function multiplier(nombre1, nombre2){

    return nombre1 * nombre2
}

console.log(multiplier(3, 7));

/**
 * 4-COMPRENDRE LA PORTEE
 * Définis une fonction testerPortee qui tente d'acceder à une variable locale définie 
 * à l'intérieur de la fonction à l'exterieur de celle-ci
 */
let test = "test"; 

function testerPortee(){

    return test ; 
}

console.log(testerPortee())

/**
 * 5-FONCTION QUI CALCULE LA MOYENNE
 * Crées une fonction calculerMoyenne qui prend trois notes et retourne leur moyenne.
 */

function calculerMoyenne(note1, note2, note3){

    return (note1 + note2 + note3) / 3;
}

console.log(calculerMoyenne(12, 14, 18));
console.log(calculerMoyenne(10, 11, 5));
console.log(calculerMoyenne(10, 10, 10));

/**
 * 6-VERIFICATION DE L'AGE
 * Ecris une fonction verifierAge qui prend un âge en paramètre et renvoie true si l'âge est de 18 ans ou plus, sinon false
 */
function verifierAge(age){

    return age >= 18;
}

console.log(verifierAge(15));
console.log(verifierAge(18));
console.log(verifierAge(21));

/**
 * 7-CONVERSION DE TEMPERATURE
 * Crées une fonction convertirCelciusEnFahreinheit qui convertit une température de Celcius en Fahreinheit et retourne le résultat.
 */
function convertirCelciusEnFahreinheit(celcius){

    let resultatFahreinheit = ( celcius * (9/5) ) + 32;

    return resultatFahreinheit;
}

console.log(convertirCelciusEnFahreinheit(0));
console.log(convertirCelciusEnFahreinheit(5));

/**
 * 8-CALCUL DU PERIMETRE D'UN RECTANGLE
 * Crées un programme qui calcule le périmètre d'un rectangle. Vous devrez créer deux fonctions pour réaliser cet exercice, 
 * une pour calculer le périmètre et l'autre pour afficher le résultat sous cette forme:"Le périmètre du rectangle est de 20m2".
 */

// 1 ère fonction pour calculer le périmètre
function calculPerimetre(longueur, largeur){
    return (longueur * largeur) * 2;
}

console.log(calculPerimetre(2, 5));

let perimetre = calculPerimetre(2, 5);

// 2 ème fonction pour afficher le résultat sous cette forme: "Le périmètre du rectangle est de 20m2".
function afficherResultat(){

    return (
        console.log("Le périmètre du rectangle est de", perimetre, "m2.")
    )
}

console.log(afficherResultat());
