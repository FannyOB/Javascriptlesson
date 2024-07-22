// EXERCICES TABLEAUX ET METHODES

// Exercices pratiques
// Crée un tableau de tes films préférés et ajoutez un nouveau film avec la méthode push.

const films = ["kill Bill", "Dune", "Queen and Slim", "Bohemian Rhapsody"];

let retour = films.push("Parasite");

console.log(retour); //  5
console.log(films); // [ 'kill Bill','Dune','Queen and Slim','Bohemian Rhapsody','Parasite' ]

// Retires le dernier film avec pop et affiche-le.

let supprimeDernierFilm = films.pop();
console.log(supprimeDernierFilm); // Parasite
console.log(films); // [ 'kill Bill','Dune','Queen and Slim','Bohemian Rhapsody' ]


// Utilises map() pour convertir tous les noms de film en majuscule.

let filmsMajuscules = films.map(function(film){
    return film.toUpperCase();
});

console.log(filmsMajuscules); // [ 'KILL BILL', 'DUNE', 'QUEEN AND SLIM', 'BOHEMIAN RHAPSODY' ]

// EXERCICES INTERACTIFS
/**
 * 1-AJOUTER AVEC PUSH
 * Ajoutes le nombre 30 à la fin d'un tableau nombres qui contient 10 et 20.
 */
const nombres = [10, 20];
//console.log(nombres); // [ 10, 20 ]

nombres.push(30); // 3
console.log(nombres); // [ 10, 20, 30 ]

/**
 * 2-RETIRER AVEC POP
 * Utilises la méthode pop pour retirer le dernier élément du tableaux nombres et imprimes cet élément.
 * 
 */
const dernierNombre = nombres.pop();
console.log(dernierNombre); // 30 (impression du dernier élément retiré)

/**
 * 3-AJOUTER AU DEBUT AVEC UNSHIFT
 * Utilises unshift pour ajouter 5 au début du tableau nombres.
 */
let ajoutDebutTableau = nombres.unshift(5);
//console.log(ajout);
console.log(ajoutDebutTableau); // 3 (taille du tableau)
console.log(nombres);// [ 5, 10, 20 ]

/**
 * 4-RETIRER DU DEBUT AVEC SHIFT
 * Utilises shift pour enlever le premier élément du tableau nombres et imprimes cet élément.
 */
const enleverPremierElement = nombres.shift();
console.log(enleverPremierElement); // 5
console.log(nombres); // [ 10, 20 ]


/**
 * 5-PARCOURIR AVEC FOREACH
 * Utilises forEach pour afficher chaque nombre du tableau nombres.
 */
console.log("Boucle foreach")
const parcourir = nombres.forEach(function(nombre){
    console.log(nombre) ;// 10  20
});

console.log(parcourir); // undefined

/**
 * 6-TRANSFORMER AVEC MAP
 * Crées un nouveau tableau où chaque nombre du tableau nombres est multiples de 2.
 */
nombres;

const carres = nombres.map(function(nombre){
    return nombre * 2;
});

console.log(carres); // [ 20, 40 ]


/**
 * 7-UTILISATION COMBINEE DE PUSH ET POP
 * Ajoutes deux nombres 40 et 50 à la fin du tableau, puis retires un et affiches-le
 */
let ajoutFinTableau = nombres.push(40, 50);
console.log(ajoutFinTableau) // 4
console.log(nombres); // [ 10, 20, 40, 50 ]

let retraitDernierTableau = nombres.pop();
console.log(retraitDernierTableau); // 50
console.log(nombres); // [ 10, 20, 40 ]

/**
 * 8-CHAINAGE DES METHODES MAP ET FOREACH
 * Utilisez map pour créer un tableau de nombres au carré, puis utilisez forEach pour imprimer chaque nombre.
 */
let nouveauTableau = nombres.map(function(nombre){
   return nombre * 2; 
}).forEach(function(nb){
    console.log(nb); // 20 40 80
});

// "." point accesseur 