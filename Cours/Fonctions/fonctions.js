// LES FONCTIONS
// Une fonction est un ensemble d'instructions qui permettent d'effectuer une tâche
/**Une fonction est définie par:
 * - le mots-clé function
 * - un nom
 * - des paramètres entre parenthèses
 * - et un bloc de code entre accolades
 * - le return: permet de retourner le bloc d'éxecution de la fonction lors de l'appel de la fonction (invocation de la f),
 *  sans cela le code vivra uniquement dans la fonction
 */


// SCOPE: PORTEE DES VARIABLES
// La portée détermine où les variables sont accessibles.
// Les variables à l'intérieur d'une fonction sont locales à celle-ci et ne peuvent pas être accédées à l'exterieur.
// Ou Les variables déclarées dans une fonction sont accessibles uniquement dans cette fonction.


//EXERCICES PRATIQUES
// Crées une fonction CALCULERSURFACE qui accepte deux paramètres (largeur et hauteur) 
// et retrourne la surface d'un rectangle (en m2).
// Formule: SURFACE = LARGEUR (en mètre) * HAUTEUR (en mètre)

function calculerSurface(largeur, hauteur){

    return largeur * hauteur;
}

console.log(calculerSurface(5, 2)); //NOTE: appel d'une fonction dans une fonction. Donc retour de la valeur de la f°
console.log(calculerSurface(5, 3));

// Ecris une fonction estMajeur, qui prend un âge en paramètre et renvoie true est de 18 ANS OU PLUS, SINON FALSE;

function estMajeur(age){
    //ce n'est pas faux mais se SOUVENIR que les "OPERATEURS DE COMPARAISON RETOURNENT DES BOOLEANS" !! 
    /*if(age >= 18){
        return true;
    }
    else{
        return false
    }*/
    return age >= 18;
}

console.log(estMajeur(16));
console.log(estMajeur(20));
console.log(estMajeur(18));
console.log(estMajeur(15));