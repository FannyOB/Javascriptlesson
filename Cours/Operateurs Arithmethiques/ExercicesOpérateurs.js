// Exercices

// 1.Opérateurs arithmétiques part 1
// Utilises les opérateurs arithmétiques pour calculer le périmètre d'un rectangle dont la longueur est de 5 et la largeur de 3.
const longueur = 5;
const largeur = 3;

//const perimetre = (longueur * 2) +(largeur * 2); 
const perimetre = 2 * (longueur + largeur); // mais mieux pour une meilleure optimisation: 
// ou
let perim = (longueur * 2) + (largeur * 2);// 

console.log("Le périmètre est de:", perimetre); //affiche 16
console.log(perim);//affiche 16

// 2.Opérateurs arithmétiques part 2
// Calcules la moyenne de 3 notes: 16, 14 et 12.
const note1 = 16;
const note2 = 14;   
const note3 = 12;

const moyenne = (note1 + note2 + note3 ) / 3;
console.log("La moyenne tes notes est de:", moyenne);

// 3.Assignation composée part 1
// Une librairie a vendu 4 livres aujourd'hui. Déduis cela d'un stock initial de 50 livres en utilisant l'opérateur -=.
// on va utiliser let car nous alllons vers varier le stock et on voudra le réassigner!
let stock = 50;
let livreVendu = 4;
stock -= livreVendu; //stock = stock - livreVendu;
console.log("le nouveau stock est de:", stock, "livres!");


// 4.Assignation composée 2 part 2
// Un compte d'épargne a un solde de 1000 euros. Augmentes le solde de 5% en utilisant l'opérateur *=.
let soldeEpargne = 1000;
let pourcentage = 5 ;
console.log(pourcentage);
let interet = 1 + (pourcentage / 100); // revient à faire: let newSolde = (soldeEpargne = soldeEpargne * pourcentage) / 100;
console.log("L'intêret annuel est de:", interet);
console.log("Le solde après intêret annuel est de:", soldeEpargne * interet);

//Correction
let solde = 1000;
//pour une augmentation: 1 + ( t / 100);  donc 1 + ( 5 / 100) = 1,05;
solde *= 1.05; // revient à faire:  solde = solde * 1,05
console.log("La correction, le solde après intêret annuel est de:", solde);

// 5.Opérateurs  de comparaison part 1
// Vérifies si le nombres 10 est égal à "10" en utilisant l'opérateur == et ensuite avec ===. Notez la différence.
const number1 = 10;
const number2 = "10";

const result1 = number1 == number2;
console.log("Voilà le résultat d'un test de comparaison d'égalité entre 10 et '1O' :", result1);//true car meme valeur

const result2 = number1 === number2;
console.log("Voilà le résultat d'un test de comparaison d'égalité stricte entre 10 et '1O' :", result2);//false car les type ne sont pas égaux

// typeof: propriété permettant de voir le type
console.log(typeof number1);
console.log(typeof number2);

// 6.Opérateurs de comparaison part 2
// Déterminez si l'âge de John (18 ans) est supérieur à celui de Bob (12 ans).
const johnAge = 18;

const bobAge = 12;

const test = johnAge > bobAge; //true
console.log("L'âge de John est-il supérieur à celui de Bob?", test);

// 7.Opérateurs Logiques Part 1
// Créer une variable nomComplet, longueur de chaine, transformation.
const nomComplet = "Tangu-Mand";

const longueurChaine = nomComplet.length;
console.log(longueurChaine);

const nomEnMajuscules = nomComplet.toUpperCase();
console.log(nomEnMajuscules);

// Version 2
// Vérifiez si un utilisateur est majeur (age >= 18), et à un permis de conduire (aPermis = true).
const utilisateur = 20;
const age = 18;
const aPermis = true;

const majorite = utilisateur >= age && aPermis;
console.log("Est-ce que l'utilisateur est majeur et à un permis de conduire? ", majorite);

// 8.Travailler avec des objets
// Créer deux variables aimeLeChocolat, aimeLeSucre, affichage et réassignation.
let aimeLeChocolat = true;
console.log("La valeur initiale de aimeLeChocolat est:", aimeLeChocolat);

let aimeLeSucre = false;
console.log("La valeur initiale de aimeLeSucre est:", aimeLeSucre);

aimeLeChocolat = aimeLeSucre;
console.log("La nouvelle valeure de aimeLeChocolat est:", aimeLeChocolat);//false

// Version 2
// Un restaurant offre un menu gratuit aux enfants de moins de 10 ans ou aux personnes de plus de 65 ans. 
// Vérifies si une personne de 70 ans est éligible.
const client = 70;
const eligibilite = client < 10 || client > 65;
console.log("Est-ce que le client est éligible? ",eligibilite); //true