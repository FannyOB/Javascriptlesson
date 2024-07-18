// EXERCICES

// 1-PASSER OU ECHOUER
// Ecris une instruction if pour vérifier si la note d'un étudiant est de 50 ou plus. 
// Si c'est vrai, affiches "Reussi", sinon affiches "Echoué".

let note = 40;

note = 50;

if(note >= 50){
    console.log("Réussi");
}
else{
    console.log("Echoué!");
}

// 2-GROUPE D'AGE
// Ecris une instruction if-else qui classe un âge dans les categories suivantes: 
// "Enfant" (<12), "Adolescente (12-18)", "Adulte" (19-65), Senior (>65).

let age = 15;

age = 50;

age = 70;

age = 4;

if(age < 12){
    console.log("Enfant");
}
else if(age >= 12 && age <= 18){
    console.log("Adolescente");
}
else if(age >= 19 && age <= 65){
    console.log("Adulte");
}
else {
    console.log("Sénior");
}

// 3-VERIFICATEUR D'ANNEE BISSEXTILE
// Ecris un programme qui vérifie si une année est bissextile(une années bissextile est divisible par 4,
// mais pas par 100, à moins quelle ne soit également divisible par 400).

let annee = 2024;

annee = 2025;
// Note:
// annee % 4  === 0 ,(strictement égale à 0) signifie qu'il n'y a pas de reste! Donc que c'est bien divisible .
// annee % 100 !== 0 , (que le reste n'est pas strictement égale à 0) signifie qu'il y a du reste donc que ce n'est pas divisible. 
if((annee % 4  === 0 && annee % 100 !== 0) || (annee % 400 === 0)){
    console.log(`L'année ${annee} est une année bisextile!`);
}
else {
    console.log(`L'année ${annee} n'est pas une année bisextile!`);
}

// 4-CALCULATRICE BASIQUE
// Crées une calculatrice simple qui prend deux nombres et un opérateur mathématique (+,-,*,/)
// et effectue le calcul en fonction de l'opérateur.

const number1 = 2;
const number2 = 5;

if(number1 * number2){
    const resultat = number1 * number2;

    console.log(resultat);
}

//CORRECTION
let num1 = 5, num2 = 3, operateur = "+"; //raccourci
console.log(num1, num2 , operateur );

operateur = "*";
//operateur = "%"; //division euclidienne

if (operateur === "+"){
    console.log(num1 + num2);
}
else if(operateur === "-"){
    console.log(num1 - num2);
}
else if(operateur === "*"){
    console.log(num1 * num2);
}
else if(operateur === "/"){
    console.log(num1 / num2);
}
else{
    console.log("L'opérateur n'est pas valide!");
}

// 05-OFFRES DE REDUCTION
// Ecris une instruction if-else qui applique une réduction basée sur le montant d'achat: 
// 5% pour des achats de plus de 50$, 10 % pour des achats de plus de 100 $, et 15 % pour des achats de plus de 200 $.
//augmentation 1 * (t / 100)

const montant = 100;

if(montant > 50){
    console.log("Test1")
    console.log("la réduction est de :", 1 * (5 /100));
}
else if(montant >= 100){
    console.log("Test2")
    console.log("la réduction est de :", 1 * (10 /100));
}
else if(montant >= 200){
    console.log("Test3")
    console.log("la réduction est de :", 1 * (15 /100));
}
//ne rentre pas dans les conditions et les calcul de pourcentage n'est pas abouti

// CORRECTION
// ERREUR est d'avoir mis la comparaison montant > 50 en 1er, car ds tout les cas de figure nous rentrons systèmatiquement ds celui-ci!!!
let montantAchat = 150;
montantAchat = 260;
//montantAchat = 4;

if(montantAchat > 200){
    console.log("la réduction est de 15%");
}
else if(montantAchat > 100){
    console.log("la réduction est de 10%");
}
else if(montantAchat > 50){
    console.log("la réduction est de 5%.")
}
else{
    console.log("Pas de réduction!")

}   

// 06-JOURS DE LA SEMAINE
// Ecris un programme utilisant switch qui prend un numéro de jour (1 pour lundi, 2 pour mardi, etc...)
// et affiche le jour correspondant.

let jour = 2;
jour = 4;
jour = 6;
jour = 0;
switch(jour){
    case 1: 
        console.log("lundi");
        break;
    case 2:
        console.log("mardi");
        break;
    case 3:
        console.log("mercedi");
        break;
    case 4:
        console.log("jeudi");
        break;
    case 5:
        console.log("vendredi");
        break;
    case 6:
        console.log("samedi");
        break;
    case 7:
        console.log("dimanche");
        break;
    default:      // Le "default" doit être utilisé dans les autres cas!
        console.log("Le numéro de jour est invalide!");
}

// 07-REPONSES AUTOMATISESS
// Utilise un switch pour implémenter un système de réponse automatisée 
// où 1 signifie "Oui", 2 signifie "Non", et 3 signifie "Peut-être".

let reponse = 3;
//reponse = 9;

switch(reponse){
    case 1:
        console.log("Oui");
        break;
    case 2:
        console.log("non");
        break;
    case 3:
        console.log("Peut-être");
        break
    default:   // Le "default" doit être utilisé dans les autres cas!
        console.log("Le choix est invalide!");      
}

// 08-CLASSIFICATION PAR AGE
// Ecris un programme qui utilise switch pour classifier des individus selon leur tranche d'âge.
// Par exemple, 0 pour les enfants de moins de 12 ans, 1 pour les adolescents de 12 à 18 ans,
// et 2 pour les adultes de plus de 18 ans.

let trancheAge = 1;

switch(trancheAge){ 
    case 0:
        //trancheAge < 12;
        console.log("pour les enfants de moins de 12 ans!");
        break;
    case 1:
       // trancheAge === 12 && trancheAge < 18;
        console.log("pour les adolescents de 12 à 18 ans!");
        break;
    case 2:
        //trancheAge >= 18;
        console.log("pour les adultes de plus de 18 ans!");
        break;
}

// CORRECTION
let ageClass = 0;
ageClass = 16;
ageClass = -8;
ageClass = 89;
ageClass = "salut Fanny";

// on ne peut pas utiliser la variable "ageClass", 
// car nous voulons utuliser des comparaisons avec des intervalles,donc on utilise type true
switch(true){ 
    case ageClass >= 0 && ageClass <= 12:
         console.log("Enfants !");
         break;
    case ageClass > 12 && ageClass <= 18:
        console.log("adolescents !");
        break;
    case ageClass > 18:
        console.log("Adultes de plus de 18 ans!");
        break;
    default:
        console.log("Vous n'êtes pas un humain!");
    
}