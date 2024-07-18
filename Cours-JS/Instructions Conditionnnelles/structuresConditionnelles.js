// if / else if / else
// permet de prendre des décisions et répéter da actions dans notre programme
// if va executer une condition, qui va éxecuter un bloc si uniquement la condition est vrai.
// PREDICAT = Ce qui, dans un énoncé, est affirmé à propos d'un autre terme, le thème. C'est la condition, c'est l'expression à vérifier.

// IF
let age = 20;

//age = 6; avec cette valeur ce code ne sera jamais executé

if(age > 18){
    console.log("tu es majeur");
}

// ELSE IF: se placera toujours après un if, car il fournit une condition suplémentaire si la première n'est pas rempli
let age2 = 20;

age2 = 18;

if(age2 > 18){
    console.log("tu es majeur et +");
}
else if(age2 === 18){
    console.log("tu es tout juste majeur");
}

// ELSE: execute un bloc de code si aucune des conditions précédentes est vraie.
const age3 = 17;

if(age3 >= 18){
    console.log("majeur");
}
else{
    console.log("mineur");
}

// Exercice
// Ecris une instruction conditionnelle IF pour vérifier si une variable note est supérieur ou égale à 10, 
// et affichez "ADMIS" si c'est vrai

const note = 15;

if(note >= 10){
    console.log("ADMIS");
}