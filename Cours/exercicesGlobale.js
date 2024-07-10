//EXERCICES GLOABLES

/**
 Niveau 1 : Imbrication de boucles
 Exercice :
 Écris deux boucles for imbriquées qui affichent un tableau de multiplication de 1 à 3 dans la console.
 * 
 */

for(let i = 1 ; i <= 3; i++){

    for(let j = 0; j <= 3; j++ ){
        console.log(`${i} x ${j} = ${i*j}`);
    }

};

/**
Niveau 2 : Parcourir un tableau d'objets
Exercice :
Écris une boucle for qui parcourt un tableau d'objets et affiche le nom et l'âge de chaque personne.
 */
let personnes = [
 {nom: "Alice", age: 25},
 {nom: "Bob", age: 30},
 {nom: "Charlie", age: 35}
];


for(let i = 0; i < personnes.length; i++){
    console.log(`Nom : ${personnes[i].nom}, Age: ${personnes[i].age}`);
};

/*
Niveau 3 : Filtrer des éléments dans un tableau
Exercice :
Écris une boucle for qui parcourt un tableau de nombres et affiche seulement les nombres pairs.
javascript
*/

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < nombres.length; i++){
    if(nombres[i] % 2 === 0){

        console.log(nombres[i]);
    }
};


/*
Niveau 4 : Boucles avec des conditions multiples
Exercice :
Écris une boucle while qui affiche les nombres de 1 à 20, mais qui s'arrête si un multiple de 7 est rencontré.
*/
console.log("Exercice 4")
let i = 1;
while(i <= 20){
    
    if(i % 7 === 0){
        
       break;
    }
    console.log(i);
    i++
};


/*
Niveau 5 : Modification d'un tableau dans une boucle
Exercice :
Écris une boucle for qui parcourt un tableau de nombres et double chaque valeur, en stockant les résultats dans un nouveau tableau.
*/
console.log("Exercice 5");
let nombres2 = [1, 2, 3, 4, 5];

/* Premier essai mon tableau doubleau s'affiche à chaque tour de boucle!
for(let i = 0; i < nombres2.length ; i++){

   let valeurDouble =  nombres2.map(function(nombre2){
        return nombre2 * 2
    })
    console.log(valeurDouble)
}
*/
// SOLUTION
let valeurDouble = [];

for(let i = 0; i < nombres2.length; i++){
    valeurDouble.push(nombres2[i] * 2);
};

console.log(valeurDouble);
/*
Niveau 6 : Utilisation de boucles pour manipuler des chaînes de caractères
Exercice :
Écris une boucle for qui inverse une chaîne de caractères.
*/
console.log("Exercice 6");
let chaine = "JavaScript";
let reverseChaine = "";

for(let i = chaine.length -1; i >= 0; i--){
    console.log(reverseChaine += chaine[i])
};
console.log(reverseChaine);

/*
Niveau 7 : Parcourir un tableau avec forEach
Exercice :
Utilise la méthode forEach pour parcourir un tableau de nombres et afficher chaque nombre multiplié par 3.
*/
console.log("Exercice 7");
let nombres3 = [1, 2, 3, 4, 5];

nombres3.forEach(function(nombre){
    console.log(nombre * 3);
});

/*
Niveau 8 : Utilisation de map pour transformer un tableau
Exercice :
Utilise la méthode map pour créer un nouveau tableau où chaque nombre est élevé au carré.
*/
console.log("Exercice 8");
let nombres4 = [1, 2, 3, 4, 5];

let carre = nombres4.map(function(nombre){
    return nombre * nombre;
});

console.log(carre);

/*
Niveau 9 : Utilisation de reduce pour agréger des données
Exercice :
Utilise la méthode reduce pour calculer la somme de tous les nombres dans un tableau.
*/
console.log("Exercice 9");
let nombres5 = [1, 2, 3, 4, 5];
/*
let initialValue = 0;
let sumWithInitialValue = nombres5.reduce(
    (accumulator, currentValue) => accumulator + currentValue
)
console.log(sumWithInitialValue)
*/

// soit
let somme = nombres5.reduce(function(total, nombre){
    return total + nombre;
});

console.log(somme);

/*
Niveau 10 : Filtrer et manipuler des données d'un tableau d'objets
Exercice :
Tu as un tableau d'utilisateurs avec leurs noms, âges et rôles. Écris une boucle for qui filtre les utilisateurs ayant plus de 30 ans et ajoute une propriété status: 'senior' à ces utilisateurs.
*/
console.log("Exercice 10");
let utilisateurs = [
 {nom: "Alice", age: 25, role: "dev"},
 {nom: "Bob", age: 35, role: "manager"},
 {nom: "Charlie", age: 40, role: "CTO"},
 {nom: "Dave", age: 28, role: "designer"}
];

//seniors est un tableau vide qui va stocker les utilisateurs ayant plus de 30 ans.
let seniors = [];

for(let i = 0; i < utilisateurs.length; i++){
    //console.log(utilisateurs)
   if(utilisateurs[i].age > 30){
    //console.log(utilisateurs[i])
    utilisateurs[i].status = "sénior";
    //console.log(utilisateurs[i]);
    seniors.push(utilisateurs[i]);
   }
}

console.log(seniors);

/*
Niveau 11 : Agréger et transformer des données d'un tableau imbriqué
Exercice :
Tu as un tableau d'objets représentant des commandes, chaque commande ayant un tableau de produits. Calcule le montant total de chaque commande et ajoute-le en tant que nouvelle propriété total.

let commandes = [
 {id: 1, produits: [{nom: "Produit A", prix: 30}, {nom: "Produit B", prix: 20}]},
 {id: 2, produits: [{nom: "Produit C", prix: 50}, {nom: "Produit D", prix: 70}]},
 {id: 3, produits: [{nom: "Produit E", prix: 40}, {nom: "Produit F", prix: 60}]}
];
*/


/*
Niveau 12 : Grouper des données par catégorie
Exercice :
Tu as un tableau de produits avec leurs catégories. Écris une boucle for qui groupe les produits par catégorie dans un nouvel objet.

let produits = [
 {nom: "Produit A", categorie: "Électronique"},
 {nom: "Produit B", categorie: "Maison"},
 {nom: "Produit C", categorie: "Électronique"},
 {nom: "Produit D", categorie: "Jardin"},
 {nom: "Produit E", categorie: "Maison"}
];
*/


/*
Niveau 13 : Calculer des statistiques à partir d'un tableau d'objets
Exercice :
Tu as un tableau d'étudiants avec leurs noms et leurs notes. Écris une boucle for qui calcule la note moyenne, la note la plus élevée et la note la plus basse.

let etudiants = [
 {nom: "Alice", note: 85},
 {nom: "Bob", note: 92},
 {nom: "Charlie", note: 78},
 {nom: "Dave", note: 88},
 {nom: "Eve", note: 91}
];
*/


/*
Niveau 14 : Transformer un tableau de données en un format différent
Exercice :
Tu as un tableau de ventes avec des dates et des montants. Écris une boucle for qui transforme ce tableau en un objet où les clés sont les dates et les valeurs sont les montants totaux des ventes pour chaque date.

let ventes = [
 {date: "2024-05-01", montant: 150},
 {date: "2024-05-01", montant: 200},
 {date: "2024-05-02", montant: 100},
 {date: "2024-05-03", montant: 250},
 {date: "2024-05-03", montant: 300}
];
*/


