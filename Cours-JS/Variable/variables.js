//let : une variable peut être déclarée et affecté une seule fois, avec possibilité de réassignation. ex: let test = "hello"; test = "world" (+ rigide)

//const : une variable est déclarée une seule et unique fois, impossibilité de la réaffecter à une nouvelle valeur (immuable). (++ rigide)

//var: une même variable ne peut être déclarée plusieurs fois avec var (donc - rigide)

//Exercices variables
const citation = "Après la pluie vient le beau temps!"
console.log(citation);

const fruits = ["orange", "banane", "kiwi"];
console.log(fruits);

const animalDeCompagnie = {
nom: "pouch",
age: 5,
espece: "chien"
};

console.log(animalDeCompagnie);


// Portée de variable Locale et Globale.
// Variable Globale: s'éxécute à l'intérieur et l'éxtérieur de la fonction

// Variable Locale: s'éxécute à l'intérieur d'une la fonction.
