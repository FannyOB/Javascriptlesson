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

console.log(livre);

/**
 * 2-ACCÈS AUX PROPRIÉTÉS
 * Accèdes et affiches la propriété auteur de l'objet livre créé dans l'exercice 1.
 */
console.log(livre.auteur);


/**
 * 3-MODIFICATION DE PROPRIÉTÉS
 * Modifies la propriété année de l'objet livre pour qu'elle soit mise à jour à 2021.
 */

livre.anneeMiseAjour = function(nouvelAnnee){

    this.annee = nouvelAnnee;
}

console.log(livre.anneeMiseAjour(2021));
//console.log(livre);

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
console.log(livre.afficherLivre())

/**
 * 5-UTILISATION DE THIS
 * Crées un objet personne avec les propriétés nom et âge une méthode bonAnniversaire qui augmente l'âge de la personne de 1 année et
 * affiche un message.
 */
let personne = {
    nom : "Odette",
    age : 60,
    bonAnniversaire : function(){
        this.age++;
        console.log("Nouvelle année: ", this.age);
    }
}

//console.log(personne);
console.log(personne.bonAnniversaire());
/**
 * 6-BOUCLER SUR DES PROPRIÉTÉS
 * Utilises une boucle for...in pour afficher toutes les propriétés et valeurs de l'objet personne.
 */

for(let cle in personne){
    console.log(
       `cle ${cle} : ${personne[cle]}`);
}

/**
 * 7-OBJET CONTENANT UN TABLEAU
 * Crées un objet professeur qui contient une propriété matières sous forme de tableau listant les matières enseignées.
 */

let professeur = {
    matieres : ["Mathématique", "Français", "S.V.T", "Histoire"]
}

console.log(professeur);

/**
 * 8-MÉTHODE RETOURNANT UNE VALEUR
 * Ajoutez une méthode enseigneMaths à l'objet professeur qui retourne true si le professeur enseigne les mathématiques.
 */

professeur.enseigneMaths = function(){
    //this.matiere.includes("Math");
    /*
    for(let matiere of this.matieres){
        this.matieres.includes("Math");
    }
    */
    return this.matieres.includes("Mathématique");
    
}

console.log(professeur.enseigneMaths());
//console.log(professeur);