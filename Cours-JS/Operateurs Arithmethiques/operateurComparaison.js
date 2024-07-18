//comparaison de deux valeurs et va retourner un boolean

//égalité non stricte == ; permet de comparer la valeur mais pas les types 
const a = 1;
const b = 2;

const test = a == b;
console.log(test); // false 

//"égalité stricte" === ; permet de comparer: "le type et la valeur"  
const c = 1;
const d = "1";

const test1 = a == d;
console.log(test1); // true

const test2 = a === d;
console.log(test2); // false car la type de données est différent

// Différence !=
const e = 3;
const f = 3;

const test4 = e != f // false
console.log(test4);

const test5 = e != 6; //true
console.log(test5);

//Différence stricte !== ; permet de vérifier le type et la valeur.
const g = 3;
const h = "3";

const test6 = g != h // false car même valeur et on ne compare pas les types
console.log("test 6:", test6);

const test7 = e !== h; // true car même valeur mais type différent!
console.log("test 7:", test7);

//supériorité stricte > (plus grand que)


//supériorité ou égal >=
const i = 10;
const j = 10;

const test8 = i >= j;
console.log("test 8:", test8);// true

const test9 = i >= 18;
console.log("test 9:", test9);// false


//Infériorité stricte < (plus petit que)
const k = 10;
const l = 50;

const test10 = k < l;
console.log("test 10:", test10);// true

const test11 = l < 10;
console.log("test 11:", test11);// false


//Infériorité ou égal <=
const m = 10;
const n = 50;

const test12 = m <= n;
console.log("test 12:", test12);// true car inférieur

const test13 = n <= 30;
console.log("test 13:", test13);// false car supérieur