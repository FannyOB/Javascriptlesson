// EXERCICES OBJETS

/**
 * 1-CREATION D'UN OBJET
 * Crées un objet livre avec les propriétés titre, auteur et année et initialisez-le avec des valeurs.
 */
let livre = {
    titre : "Peau noire, masques blancs",
    auteur : "Frantz Fanon",
    annee : 1952
}

console.log(livre); // titre: 'Peau noire, masques blancs', auteur: 'Frantz Fanon', annee: 1952

/**
 * 2-ACCÈS AUX PROPRIÉTÉS
 * Accèdes et affiches la propriété auteur de l'objet livre créé dans l'exercice 1.
 */
console.log(livre.auteur); // Frantz Fanon


/**
 * 3-MODIFICATION DE PROPRIÉTÉS
 * Modifies la propriété année de l'objet livre pour qu'elle soit mise à jour à 2021.
 */

//Ici j'ai créé une méthode,ce qui est correct aussi. Mais on souhaite juste modifier la valeur de la propriété "année"!!
/*
livre.anneeMiseAjour = function(nouvelAnnee){

    this.annee = nouvelAnnee;
}
console.log(livre.anneeMiseAjour(2021));
*/

//CORRECTION, il est possible de réassigner (=overider) une Valeur dans l'objet.
livre.annee = 2024;
console.log(livre); // { titre : Peau noire, masques blancs  auteur : Frantz Fanon  annee : 2024 }

/**
 * 4-AJOUT DE MÉTHODES
 * Ajoutes une méthode afficherLivre à l'objet livre qui imprime tous les détails du livre.
 */

livre.afficherLivre = function(){

    console.log(
        "titre :", this.titre,
        "auteur :",this.auteur,
        "annee :", this.annee
    )
}
console.log(livre.afficherLivre()) // titre : Peau noire, masques blancs auteur : Frantz Fanon annee : 2024 

/**
 * 5-UTILISATION DE THIS
 * Crées un objet personne avec les propriétés nom et âge une méthode bonAnniversaire qui augmente l'âge de la personne de 1 année et
 * affiche un message.
 */
let personne = {
    nom : "Odette",
    age : 60,
    bonAnniversaire : function(){
        this.age++; // ou this.age += 1
        console.log("Joyeux anniversaire", this.nom,"Vous avez maintenant", this.age, "ans!!");
    }
}

//console.log(personne);
console.log(personne.bonAnniversaire());
/**
 * 6-BOUCLER SUR DES PROPRIÉTÉS
 * Utilises une boucle for...in pour afficher toutes les propriétés et valeurs de l'objet personne.
 */

for(let propriete in personne){
    console.log(
       `propriété ${propriete} : ${personne[propriete]}`);
       // correct mais équivalent:
       // propriete,":", personne[propriete])
}

/**
 * 7-OBJET CONTENANT UN TABLEAU
 * Crées un objet professeur qui contient une propriété matières sous forme de tableau listant les matières enseignées.
 */

let professeur = {
    nom : "Monsieur Dupont",
    matieres : ["Mathématique", "Français", "S.V.T", "Histoire"]
}

console.log(professeur); // {nom: 'Monsieur Dupont', matieres: [ 'Mathématique', 'Français', 'S.V.T', 'Histoire' ] }

/**
 * 8-MÉTHODE RETOURNANT UNE VALEUR
 * Ajoutez une méthode enseigneMaths (= nouvelle propriété)  à l'objet professeur qui retourne true si le professeur enseigne les mathématiques.
 */

professeur.enseigneMaths = function(){

   //la f° include va prendre l'argument "Mathématique" pour la vérification et retourne un boolean.
    return this.matieres.includes("Mathématique");
    
}

console.log(professeur.enseigneMaths()); // true
//console.log(professeur);

//ici réassigne une nouvelle valeur à la propriété matière
professeur.matieres = ["Anglais", "Géographie"];

console.log(professeur); // { nom: 'Monsieur Dupont', matieres: [ 'Anglais', 'Géographie' ], enseigneMaths: [Function (anonymous)] }

//Ici il vérifie si "Mathématique" est inclus ds le tableau, ce qui sera faux
console.log(professeur.enseigneMaths())// false
