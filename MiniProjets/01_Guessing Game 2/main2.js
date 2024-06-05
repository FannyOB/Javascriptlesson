function guessNumber2() {
    let playerGuess;

    const numberGuess = Math.ceil(Math.random() * 5);

    prompt("Devine le nombre entre 1 et 5!");
    
    while(playerGuess != numberGuess){
        playerGuess = prompt("Echec! essaie encore!")
    }
    
    alert(`Bravo! le nombre etait ${numberGuess}!`)
}

guessNumber2();