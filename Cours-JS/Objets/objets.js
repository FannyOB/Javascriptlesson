// LES OBJETS
// Les objets en JavaScript sont des structures de données qui regroupent des propriétés et des méthodes.
// Ils nous permettent de modéliser des situations réelles, facilitant ainsi la gestion 
// et l'interaction avec les données dans nos programmes.

// Un objet est créé en définissant des paires " CLE-VALEUR ". Les méthodes, fonctions associées à un objet, agissent sur ces données.
// Pour accéder à une propriété d'un objet il suffit d'y accéder avec un "point accesseur" comme cela: " objet.propriété "

//Le mot clé "this" réfère à l'objet COURANT et est utilisé pour accéder aux propriétés et méthodes de l'objet depuis l'intérieur.


// EXERCICES PRATIQUE
// 1-Crées un objet personne avec des propriétés pour le nom, l'âge et une méthode pour afficher sont identité.

let personne = {
    nom : "Fanny",
    age : "39",
    afficherIdentite : function(){
        console.log(`nom : ${this.nom},
            age: ${this.age}`);
    }
}

console.log( personne ); // nom: 'Fanny', age: '39', afficherIdentite: [Function: afficherIdentite]

//ne pas oublier les parenthèse de la fonction, sinon ça ne fonctionnera pas!!!
console.log( personne.afficherIdentite() ); // nom : Fanny, age: 39


// 2-Ajoute une méthode à l'objet précédent (personne) qui permet de modifier l'âge et de l'afficher.
personne.miseAjourAge = function(nouvelAge){
    this.age = nouvelAge;
    this.afficherIdentite();
}

console.log(personne); // nom: 'Fanny', age: 40, afficherIdentite: [Function: afficherIdentite], modifierAge: [Function (anonymous)]

console.log(personne.age); // 39
console.log(personne.miseAjourAge(40)); 
