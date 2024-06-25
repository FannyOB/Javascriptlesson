// 1-Boucles FOR
//Lorsque l'on SAIT A L'AVANCE COMBIEN DE FOIS le bloc doit être éxecuté
//rappel let i = 0 , signifie tu boucles à partir de la valeur 0 (valeur de départ)

for (let i = 0; i < 5; i++){
    console.log("Numéro :", i);
}


// 2-Boucles WHILE
//elle execute un bloc de code tant que la condition est vraie. 
//Utile lorsque le nombre de répétitions N'EST PAS CONNU AVANT le début de la boucle.
// exemple script lors d'un mot de passe à entrer (login)

/*
let motDePasse ="";

while(motDePasse !== "monjoliemdp"){
    let password = prompt("Entrez votre mot de passe!");
    console.log("Tentive de connexion...")
}
console.log("Vous etes connecté.");
*/

// 3-Boucles DO...WHILE
// est une variante de la boucle while qui GARANTIT QUE LE BLOC DE CODE EST EXECUTE AU MOINS UNE FOIS,
// car la condition N'EST EVALUE QU'APRES LA 1ère EXECUTION .
// DONC execution du code, puis vérification de la condition.

let compteur = 0;

do{
    console.log("compteur", compteur);
    compteur++;
}while(compteur < 0);
// compteur: 0


// 4-Boucles FOR...OF pour PARCOURIR les TABLEAUX
// dans la boucle FOR (avec "let" on défini 1 variable avec l'élément au singulier.) ->
// OF (Donc La variable de ce que l'on va parcourir=le tableau)

let couleurs = ["rouge", "vert", "bleu"];

for(let couleur of couleurs){
    console.log("la couleur est: ", couleur);
};


// 5-Boucles FOR IN pour les OBJETS 
// dans la boucle FOR IN (avec "let" on défini 2 variables, la variable de ce que l'on va parcourir , dans l'objet)

let voiture = {
    marque: "Toyota", //cle: valeur
    modele: "Corolla",
    annee: "2008"
};

for(let cle in voiture){
    console.log(`clé ${cle}: ${voiture[cle]}`); //ES6 interpollation (utilisation des backticks)
};


