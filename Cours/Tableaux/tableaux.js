// Les Tableaux et Méthodes

// Accès et modification des valeurs

let fruits = ["pomme", "banane", "fraise"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // "undefined" car cet indice n'existe pas

// Modifications des valeurs

const fruitos = ["peche", "cerise", "kiwi"];
console.log(fruitos); // Affiche [ 'peche', 'cerise', 'kiwi' ]

fruitos[0] = "fruit du dragon";
fruitos[1] = "orange";
console.log(fruitos); // Affiche [ 'fruit du dragon', 'orange', 'kiwi' ]


// Fonctions Tableau

// Methodes push() 
// AJOUTE un ou plusieurs ELEMENT(S) à la FIN d'un TABLEAU. Et RETOURNE la NOUVELLE TAILLE du tableau.
const legumes = ["carotte", "tomate", "poireau"];
const retour = legumes.push("pomme de terre");

console.log(retour); // 4
console.log(legumes); // [ 'carotte', 'tomate', 'poireau', 'pomme de terre' ]


// Méthode pop() 
// SUPPRIME le DERNIER ELEMENT d'un tableau, et RETOURNE la VALEUR de cet ELEMENT. Elle MODIFIE la TAILLE du tableau.
const retour2 = legumes.pop();

console.log(retour2); // pomme de terre  .NOTE: cette méthode permet d'effectuer des opérations car elle garde une copie du résultat!
console.log(legumes); // [ 'carotte', 'tomate', 'poireau' ] . Retrait de "pomme de terre".


// Méthode shitft() 
// SUPPRIME le PREMIER ELEMENT du tableau, RETOURNE la VALEUR de l'ELEMENT supprimé. Et MODIFIE la taille du tableau.

const retour3 = legumes.shift()
console.log(retour3); // carotte  .NOTE: cette méthode permet d'effectuer des opérations car elle garde une copie du résultat!
console.log(legumes); // [ 'tomate', 'poireau' ]


// Méthode unshitft()
// AJOUTE un ou plusieurs élément(s) au DEBUT du tableau. Et RETOURNE la NOUVELLE TAILLE du tableau.

const retour4 = legumes.unshift("aubergine");
console.log(retour4); // 3
console.log(legumes); // [ 'aubergine', 'tomate', 'poireau' ]


// Méthode foreach()
// permet d'executer une FONCTION donnée sur CHAQUE ELEMENT du tableau.

const nombres = [10, 20, 30 , 40];
let somme = 0;

const retour5 = nombres.forEach(function(nombre){
    somme += nombre;
});

console.log(`La somme est de ${somme} .`);

console.log(retour5);// indique "undefined" parceque la valeur de forEach() ne retourne rien! 
                    // C'est pourquoi nous avons mis la méthode ds la variable retour5.


// Méthode map() 
// créé un NOUVEAU TABLEAU avec les RESULTAT de l'appel d'une fonction fournie sur CHAQUE ELEMENT du tableau.         

const numbers = [1, 2, 3, 4 , 5];

const carres = numbers.map(function (number){
     return number * number;
    }
);

console.log(carres); // [ 1, 4, 9, 16, 25 ]
