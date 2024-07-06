// 1-

let list = [];
let oldResult = 0;

function addToList(a){
    console.log(a)

        if(a === "/" || a === "+" || a === "-" || a === "*"){
            list.push(` ${a} `); //ES6, lors de calcul arithmétique on laisse de l'espace.
        }
        else{
            list.push(a);
        }
        //Permet de récupérer les éléments cliqué dans l'affichage au niveau de l'id avec la valeur "result"
        document.getElementById('result').innerHTML = list.join('') //(va convertir notre array en chaine de caract.) scrée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur. Ici list.join(''), la string vide mise, indique que les strings sont concatené sans les virgules.(tout est collé)    
};

// 5-Fonction pour vérifier si les informations sont bien correctes,
//avec expression regulière pour accepter des chiffres et caractères arithmétiques
function secureCalc(){
    let regex = /^[\d\s()+\-*/.,*]+$/;

    if(!regex.test(list.join(''))){
        throw new Error("valeur de liste incorrecte!")
    }
    //On va stocker l'évalutaion ds cette variable oldResult, pour enregistrer l'information,  qui sera push dans l'array list plus bas
    return oldResult = eval(list.join(''));
}


// 6-Calculer le résultat
function calc(){
    document.getElementById('calcul').innerHTML = list.join('');
    document.getElementById('result').innerHTML = secureCalc();
    list = [];
    list.push(oldResult);
}

// 2-gestion de la suppression du dernier élément ds l'array list
function del(){
    list.pop();
    if(list.length === 0){
        document.getElementById('result').innerHTML = 0;
    }
    else{
        document.getElementById('result').innerHTML = list.join('');
    }
}

// 3-gestion de tout l'affichage
function delAll(){
    list = [];
    document.getElementById('result').innerHTML = 0;
}
