//tuto youTube: https://www.youtube.com/watch?v=GpJ-kTR-crM

// Récupération élément du DOM de toutes les touches(les keycodes)
const touches = [...document.querySelectorAll('.bouton')];
//console.log(touches);

//récupération de la valeur, "dataset" propriété récupéré le keycode ds la console sur les eléments bouton
const listeKeycode = touches.map(touche => touche.dataset.key);
//console.log(listeKeycode)

//on veut récupérer la div écranavec cette variable
const ecran = document.querySelector('.ecran');

//récupération de l'evenement, avec "keydown" proriété récupéré ds la console sur les eléments bouton
//(dès qu'on touche l'event sera ds le console.log)
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    console.log(valeur, typeof valeur);

    calculer(valeur)
})

// on veut récupérer la valeur au click sur une touche
// récupération de l'evenement, avec "target" proriété récupéré ds la console sur les eléments bouton
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    console.log(valeur, typeof valeur);

    calculer(valeur)
})

//On crée une fonction pour récupérer le keycode au touche ou au click, 
// donc on veut eliminer toutes les autres interactions des touches non concerné, donc on vérifier si notre liste de key code
const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        console.log(listeKeycode)
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);// on veut évaluer le texte à l'intérieur de l'écran
                ecran.textContent = calcul; //on va mettre à l'intérieur de l'écran le résultat su'on vient dévaluer
                break;
            default:
                //on veut qu'au click ou au press de la touche, on veut que la valeur soit affiché à l'interieur de l'écran 
                const indexKeycode = listeKeycode.indexOf(valeur);// ça vérifier l'index
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;// on rajoute ds le html la valeur de la touche appuyé
        }
    }
}
//permet d'écouter l'event error
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})