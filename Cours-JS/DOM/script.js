let first = "Hello world <br>";
document.write(first); /** methode pour imprimer ds le navigateur,sur les pages web */
console.log("test");

// Boite d'Alerte:
//alert("Hello Everyone");
/*
let resp1 = 10;
let resp2 = 7;

if(resp1 > resp2){
    alert("Yes, it's correct!");
}
else{
    alert("No, it's not correct!");
};
*/

// Boite d'invit: permet d'obtenir une zone de confirmation.
let a = confirm("Are you human?");
if(a){ // si on clique sur "OK", on rentre dans cette condition. Sinon si on clique sur "annuler", on rentre ds le "else".
    alert("Thanks")
}
else{
    alert("It's ok")
};

// Boite de confirmation: permet de récupérer la valeur rentrer par l'utilisateur.
//prompt

// Exemple 1
//let question = prompt("Write something: ");
//document.write(question);

// Exemple 2: on peut récupérer la valeur de l'utilisateur affecté à une variable directement ds le prompt, et l'appliquer dans une condition. Donc pas nécéssaire d'attribuer une valeur à une variable comme précédemment!
var value = prompt("Enter the value: ");
      if (value >= 80 && value <= 100) {
        document.write("1st ");
      } else if (value >= 60 && value <= 80) {
        document.write("2nd ");
      } else if (value >= 45 && value <= 60) {
        document.write("3rd ");
      } else if (value < 40) {
        document.write("Pass");
      } else {
        document.write("Enter the valid value");
      };


/*
let answer= "";

answer = prompt("Comment tu t'appelles?")
*/

