// lien youTube:  https://www.youtube.com/watch?v=Jira91nvLKU

function guessNumber() {
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() * 10);// Méthode ceil arrondi au nombre le plus haut

    prompt("Devinez le nombre entre 1 et 10 inclus.");

    while(playerGuess != numberToGuess){
        playerGuess = prompt("Echec! Essayez à nouveau de devinez le nombre (entre 1 et 10 inclus.");
    }

    alert(`Félicitation! Le nombre était ${numberToGuess}!`);
}

guessNumber();