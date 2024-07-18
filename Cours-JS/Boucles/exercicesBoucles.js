// Exercices Boucles
// 1-Utilise une boucle for pour afficher les nombres pairs de 1 à 10.

for(let i = 1;  i <= 10 ; i++){
    //pour faire un test on utilise une condition
    if(i % 2 === 0 ){ // si le nbre est divisible par 2, on regarde le reste de la division euclidienne
        console.log(i)
    }/*
    else{
        console.log(i, ": n'est pas un nombre pair")
    }*/
};

// 2-Crées une boucle while qui continue jusqu'a ce qu'un nombre aléatoire généré soit inférieur à 0.1 .
// Le nombre de départ est 100;
let nombre = 100;

while(nombre >= 0.1){
    console.log( nombre);
    nombre = Math.random(); //génération d'un nombre aleatoire
};
console.log("voici le nombre:", nombre);

// EXERCICES INTERACTIFS --------------------------------------------------------------
// 1-COMPTER JUSQU'A DIX
// Ecris une boucle for qui affiche les nombres de 1 à 10.
for(let j = 1; j <= 10; j++){
    console.log("Le nombre", j);
};

// 2-SOMME DES NOMBRES
// Utilises une boucle for pour calculer la somme des nombres de 1 à 100.
let somme = 0;

for(let k = 1; k <= 100; k++){
    somme = somme + k; 
    //somme += k (opérateur d'assignation composé "+="")
}
console.log("La somme est de :",somme);


// 3-FACTORIELLE
// Ecris une boucle for qui calcule la factorielle d'un nombre donné (5 != 5 * 4 * 3 * 2 * 1).
let nombreF = 5; //factorielle de 5
let factorielle = 1; // ici on va assigner la valeur de 1 (en tant qu'entier) pour y ajouter le nombre de tour de boucle (car on commence à 1)

for(let l = 1; l <= nombreF ; l ++){
    //soit factorielle = factorielle * l;  /**factorielle va stocker le cumul des sommes à chaque tour */
    factorielle *= l;
}
console.log("La factorielle du nombre",nombreF, "vaut : ", factorielle);

// 4-NOMBRES IMPAIRS
// Utilises une boucle while pour afficher tous les nombres impairs entre 1 à 20.
let nbImpair = 1 ; // on débute à 1

while( nbImpair <= 20){
    if(nbImpair % 2 !== 0){
        console.log("Le nombre impair est:", nbImpair);
    }
    nbImpair++// on incrémente même si la condition n'est pas valide 
}

// 5-ATTENTE DE CROISSANCE
// Tu as un compte d'épargne qui commence avec 100€ et croît de 5% chaque année.
// Utilises une boucle while pour determiner combien d'années cela prendra pour que le compte atteigne au moins de 200€.

let solde = 100;
//formule de la croissance c'est: 1 +(t/100), donc dans notre cas : 1 + (5/100)= 1.05
//let croissance = 1.5;
let annee = 0;

while(solde <= 200){
    solde *= 1.05 ;
    annee++;   
}
console.log("Le nombre d'année nécéssaire est:", annee );


// 6-TROUVER UN NOMBRE
// Utilises une boucle do...while pour générer des nombres aléatoires entre 1 et 10 jusqu'à ce que tu géneres le nombre 5. 
// Comptes et affiches le nombre d'essais nécessaires.

let numbers, essais = 0;

do{
    numbers = Math.floor(Math.random() * 10) + 1; //Math.floor() pour obtenir un entier , et si float l'arrondi à l'inférieur
    essais++;
}
while(numbers !== 5)

console.log("Nombre d'essais pour obtenir 5: ", essais);

// 7-VALIDATION DE L'ENTREE
// Ecris un script qui demande à l'utilisateur de saisir un nombre entre 1 et 10.
// Utilisez une boucle do...while pour répéter la demande tant que le nombre saisi n'est pas dans cette intervale.
let choix;

do{
   choix = prompt("Veuillez saisir un nombre entre 1 et 10!")
}while(choix <= 1 || choix >= 10);

console.log("Nombre accepté: ", choix)
    


// 8-MOT DE PASSE
// Imagines un système de sécurité qui demande un mot de passe pour continuer. 
// Le mot de passe est "abracadabra". Utilises une boucle do...while pour demander à l'utilisateur de saisir le mot de passe
// jusqu'à ce qu'il soit correct.

let motDePasse ;

do{
    motDePasse = prompt("Veuillez sasir le saisir le mot de passe!!");
}
while( motDePasse !== "abracadabra");
//tant que le mot de passe n'est pas correct on ne sort pas de la boucle
console.log("Accès Autorisé!")