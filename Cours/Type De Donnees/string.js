//Manipulation des strings
// longeur de chaine =nombre de caractère
//

const nomComplet= "Fanny Olenga Binene";
console.log(nomComplet.length);

const nomEnMajuscules = nomComplet.toUpperCase();
console.log(nomEnMajuscules);

// GUILLEMET
/* Si on souhaite ajouter cette string comme valeur à personne
let personne = "je m'appelle "Fanny" ";
*/

// Solution
// utiliser des antislash pour l'utilisation de guillemet dans des chaines de caractères,les palcer avant les guillemets;
let personne = "je m'appelle \"Fanny\" ";
console.log(personne);