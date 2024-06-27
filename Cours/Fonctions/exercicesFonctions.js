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

    //return nombre * 2; //ici on n'utilise pas le mot clé "return", car on souhaite pas retourner quelque chose mais seulement afficher! Et le chifre doit être au carré dc multiplié par lui même!
   console.log(nombre * nombre);
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
//let test = "test"; // mon code permettait de pouvoir avoir accès à la variable à l'exterieur de la f°, hors ce n'était pas ce qui était demandé

function testerPortee(){

    //return test ; // mon code permettait de pouvoir avoir accès à la variable à l'exterieur de la f°, hors ce n'était pas ce qui était demandé
    let message = "Ce message est visible uniquement depuis ma fonction";
}

console.log(testerPortee())
// On observe que rien n'apparait dans la console!
// Le but de cet exercice était de voir ce qu'il se passe.
// Donc la la variable n'existe pas (message d'erreur ds le navigateur: "Uncaugtht ReferenceError: message is not defined"
// car le "scope" de la variable se limite uniquement à la fonction testerPortee, mais n'est pas accessiblà à l'exterieur,elle n'existe pas!!

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
console.log(calculerMoyenne(20, 15, 10));
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

    //correct et autre solution possible sans le stockage dans une variable:
    //return ( celcius * (9/5) ) + 32;
}

console.log(convertirCelciusEnFahreinheit(0));
console.log(convertirCelciusEnFahreinheit(5));

/**
 * 8-CALCUL DU PERIMETRE D'UN RECTANGLE
 * Crées un programme qui calcule le périmètre d'un rectangle. Vous devrez créer deux fonctions pour réaliser cet exercice, 
 * une pour calculer le périmètre et l'autre pour afficher le résultat sous cette forme:"Le périmètre du rectangle est de 20m2".
 * Formule du calcul de perimetre = (longueur * largeur) * 2
 */

// 1 ère fonction pour calculer le périmètre
function calculPerimetre(longueur, largeur){
    return (longueur * largeur) * 2;
}

console.log(calculPerimetre(2, 5));


let perimetre = calculPerimetre(2, 5);

// 2 ème fonction pour afficher le résultat sous cette forme: "Le périmètre du rectangle est de 20m2".
function afficherResultat(){

    return (//le return n'est pas nécéssaire car on affiche déjà avec 
        console.log("Le périmètre du rectangle est de", perimetre, "m2.")
    )
}

console.log(afficherResultat());

//correct, mais autre solution:
/**
 * // 1 ère fonction pour calculer le périmètre
function calculPerimetre(longueur, largeur){
    return (longueur * largeur) * 2;
    }

 * function afficherPerimetre(longueur, largeur){ //ici on peut transferer les paramètres car on a besoin des mêmes choses
 * 
    const perimetre = calculPerimetre(longueur, largeur);
    
    console.log("Le périmètre du rectangle est de", perimetre, "m2.")
    
    }

    console.log(afficherPerimetre(10, 6))
 */



