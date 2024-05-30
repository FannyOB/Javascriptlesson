// Exercices

//1..Opérateurs arithmétiques part 1
// Utilises les opérateurs arithmétiques pour calculer le périmètre d'un rectangle dont la longueur est de 5 et la largeur de 3.
const longueur = 5;
const largeur = 3;

const perimetre = (longueur * 2) +(largeur * 2);
//ou
let perim = (longueur * 2) + (largeur * 2);// 

console.log(perimetre); //affiche 16
console.log(perim);//affiche 16

//2.Opérateurs arithmétiques part 2
//Calcules la moyenne de 3 notes: 16, 14 et 12.
const note1 = 16;
const note2 = 14;   
const note3 = 12;

const moyenne = (note1 + note2 + note3 ) / 3;
console.log(moyenne);

//3.Assignation composée part 1
//Une librairie a vendu 4 livres aujourd'hui. Déduis cela d'un stock initial de 50 livres en utilisant l'opérateur -=.
let stock = 50;
let livreVendu = 4;
stock -= livreVendu; //stock = stock - livreVendu;
console.log("le nouveau stock est de:",stock, "livres!");


//4.Assignation composée 2 part 2
//Un compte d'épargne a un solde de 1000 euros. Augmentes le solde de 5% en utilisant l'opérateur *=.
let soldeEpargne = 1000;
let pourcentage = 5 ;
console.log(pourcentage);
let newSolde = (soldeEpargne *= pourcentage) / 100;
console.log(newSolde);

//5.Opérateurs  de comparaison part 1
//Vérifies si le nombres 10 est égal à "10" en utilisant l'opérateur == et ensuite avec ===. Notez la différence.


//6.Opérateurs de comparaison part 2
//Déterminez si l'âge (18 ans) est supérieur à celui de Bob (12 ans).

//7.Opérateurs Logiques Part 1
//Créer une variable nomComplet, longueur de chaine, transformation.

//8.Travailler avec des objets
// Créer deux variables aimeLeChocolat, aimeLeSucre, affichage et réassignation.