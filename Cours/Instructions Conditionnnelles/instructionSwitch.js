// Un switch est une structure de controle utilisée pour effectuer différentes actions
// en fonction de différentes conditions.

// C'est une alternantiveà de multiples instructions if else et est couvent plus claire
// et plus facile à lire quand on a plusieurs conditions à vérifier qui dépendendende la même valeur.

// exemple
let note = 18;
note = 10;
note = 7;

switch (note) {
    case 10:
        console.log("Juste la moyenne");
        break;  // break: signifie sort de cette instruction actuelle une fois que tu a validé l'instruction possible, sinon il va continuer à réaliser le switch case
        case 12:
        console.log("Assez bien!");
        break;
    case 14:
        console.log("Bien!");
        break;
    case 16:
        console.log("Très Bien!");
        break;
    case 18:
        console.log("Excellent!");
        break;
    case 20:
        console.log("Parfait!");
        break;
    default:  // default: signifie dans tout autre cas, equivaut au else!
        console.log("Note non standard!");
}

// avec boolean(true ou false) on peut utiliser de comparateur logique, donc plus puissant!
//ici on vérifie le type avec des comparateurs logiques

let age = 20;

switch (true){
    case age === 0:
        console.log("Vraiment nul!");
        break;
    case age === 10:
        console.log("Juste la moyenne");
        break;
    case age === 20:
            console.log("Excellent boulot! Bravo!");
        break;
    case age > 10:   
        console.log("Admis!");
        break;
    default:
        console.log("Non admis!");
}

// L'ordre est très important dans le switch car le break permet de sortir de la condition
// Sans le break le code continue à s'éxecuter dans le swith!!!

//Exercice
//Utiliser SWITCH pour gérer différents niveaux de satisfaction client( insatisfait, neutre, satisfait) basé sur une échelle de 1 à 3.

let satisfaction = 1;
satisfaction = 2;
satisfaction = 3;

switch (satisfaction){
    case 1:
        console.log("Insatisfait");
        break;
    case 2:
        console.log("Neutre");  
        break;
    case 3:
        console.log("Satisfait");
        break;
}
//le default n'est pas nécessaire car nous n'avons pas d'autres cas.