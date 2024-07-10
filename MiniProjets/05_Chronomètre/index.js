// 1- Initialisation des variables
let hours = 0, minutes = 0, secondes = 0, millisecondes = 0;

//3-a)Va permettre de gérer les stops et les starts
let myInterval;

// 3-b)Gestion commencement du chrono, sans raffraichir la page
function start(){
    //le fait de stocker ds la varable permet de clear l'interval
    //sans ce stockage de cette valeur problème, pas de possibilité d'arret
    myInterval = setInterval(renderChrono, 100);// 100 pour dire chaque mseconde

}

// 2- Gestion du chrono
function renderChrono(){
    millisecondes += 1;

    if(millisecondes == 10){
        secondes += 1; // soit secondes = secondes + 1;
        //réinitialiser à 0, sinon il y aura un problème ds la fonction
        millisecondes = 0;
    }

    if(secondes ==  60){
        minutes += 1;
        secondes = 0;
    }

    if(minutes == 60){
        hours += 1;
        minutes = 0;
    }
    //on va faire une mise à jour dès que le chrono est lancé
    //innerhtml = à l'intérieur de l'input
    document.getElementById('ms').innerHTML = `${millisecondes}ms`;
    document.getElementById('s').innerHTML = `${secondes}s`;
    document.getElementById('min').innerHTML = `${minutes}min`;
    document.getElementById('hour').innerHTML = `${hours}h :`;

};

// 3-Gestion de  l'arret, on va faire un clean de myInteravalle de mise à jour, de répétition
function stop(){
    clearInterval(myInterval);
};


// 4-Pour réinitialiser le compteur
function reset(){
    clearInterval(myInterval);
    hours = 0 , minutes = 0, secondes = 0, millisecondes = 0;
    myInterval;

    document.getElementById('ms').innerHTML = `Oms`;
    document.getElementById('s').innerHTML = `0s`;
    document.getElementById('min').innerHTML = `0min`;
    document.getElementById('hour').innerHTML = `0h :`;

};
