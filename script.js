//Exercici 1
//Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

let add = (a, b) => a + b;
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 1");
console.log(add(3, 4));

// Exercici 2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

let fletxa = () => Math.random() * 100;
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 2");
console.log(Math.round(fletxa()));

// Exercici 3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Persona {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log("Hola " + this.name);
  };
}

let persona = new Persona("Luis");
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 3");
persona.greet();

// Exercici 4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
let print = (x) => {
  console.log(x);
};
let printNumbers = (arrayNumbers) => {
  for (let i = 0; i < arrayNumbers.length; i++) {
    print(arrayNumbers[i]);
  }
};

let myArray = [10, 20, 30, 40, 50];
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 4");
printNumbers(myArray);

// Nivell 3
// Exercici 5
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 5");

greet = () => {
  console.log("Bon dia");
};

saludar3Seg = () => {
  setTimeout(greet, 3000);
};

saludar3Seg();

// Exercici 1.2: Operador ternari

// Exercici 1
// Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

console.log("Ejercicio 1.2 Operador ternario - 1");

potConduir = (edat) => {
  edat >= 18 ? console.log("pots conduir") : console.log("No pots conduir");
};
potConduir(28);
potConduir(18);
potConduir(17);

// Exercici 2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.
console.log("Ejercicio 1.2 Operador ternario - 2");
biggerName = (name1, name2) => {
  name1 > name2
    ? console.log(name1 + " es mas grande")
    : console.log(name2 + " es mas grande");
};
biggerName("Tomas", "Luis");

// Exercici 3
// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
console.log("Ejercicio 1.2 Operador ternario - 3");

compareNum = (num) =>
  num > 0
    ? console.log(num + "es Mayor que 0")
    : num < 0
    ? console.log(num + "es Menor que cero")
    : console.log(num + " es cero");
compareNum(2);
compareNum(-1);
compareNum(0);

trobarMax = (a, b, c) => {
  a > b && a > c
    ? console.log(a + " es el numero mayor")
    : b > a && b > c
    ? console.log(b + " es el numero mayor")
    : c > a && c > b
    ? console.log(c + " es el num mayor")
    : console.log("hay dos numeros iguales");
};
trobarMax(1, 5, 5);

// Nivell 3

// Exercici 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.
console.log("Ejercicio 1.2 Operador ternario - 4");
let unArray = [1, 2, 3, 4, 5, 6, 7];
function parOImpar(unArray) {
  unArray.forEach((e) => {
    e % 2 > 0
      ? console.log(e + " es un numero impar")
      : console.log(e + " es un numero par");
  });
}
parOImpar(unArray);
// Exercici 1.3: Callbacks
// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
console.log("Ejercicio 1.3 Callbacks - 1");
callback = (n) => console.log(n);
processar = (nombre, callback) => {
  callback(nombre);
};
processar("Tomi en un callback", callback);

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.
console.log("Ejercicio 1.3 Callbacks - 2");

callbackfunction = (n1, n2) => {
  console.log(n1 + " " + n2);
};

function calculadora(nom1, nom2, callbackfunction) {
  callbackfunction(nom1, nom2);
}
calculadora("ernesto", "eusebio", callbackfunction);

// Nivell 2

// Exercici 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

console.log("Ejercicio 1.3 Callbacks - 3");

function esperarSaludar(nom, callback) {
  setTimeout(callback (nom), 2000);
};

function mostrarNom(nom) {
  console.log(nom + " desde el async callback");
}

esperarSaludar("Jacinta", mostrarNom);

// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

console.log("Ejercicio 1.3 Callbacks - 4");

let words = [2, 3, 4, 56, 7, 53];
imprimir = (word) => {
  console.log(word);
};

function procesarElements(array, callback) {
  array.forEach((e) => {
    console.log(e);
  });
}

procesarElements(words, imprimir);

// Exercici 5

// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

console.log("Ejercicio 1.3 Callbacks - 5");

let nombre = "Tomas Casabona";

function pasarCadena(string, callback) {
  let stringTransfored = string.toUpperCase();
  callback(stringTransfored);
}
pasarCadena(nombre, imprimir);

// Exercici 1.4: Rest & Spread operators
// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
console.log("Ejercicio 1.4 Rest & spread - 1");

let array1 = [0,2,4,6,8];
let array2 = [1,3,5,7,9];
let array3 = [...array1, ...array2];
console.log(array3);
// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
console.log("Ejercicio 1.4 Rest & spread - 2");

function sumaTotal (...args){
  let total = 0
  for (const arg of args) {
    
    total += arg;
    console.log("rest "+arg) ;
  } 

  console.log(total)
}
sumaTotal(1,2,3,4);

// Nivell 2


// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
console.log("Ejercicio 1.4 Rest & spread - 3");

let object1 = new Object();
  object1.height= 1.80 ;
  object1.weight= 80 ;

let object2 = {...object1};
object2.height=1.95;
console.log(object1.height + " " + object2.height);


// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
console.log("Ejercicio 1.4 Rest & spread - 4");

arrayPibes = ["tomas", "facundo", "martin","luca","leo"];
var [ var1, var2, ...var3] = arrayPibes;
console.log(var1);
console.log(var2);
console.log(var3);

// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
console.log("Ejercicio 1.4 Rest & spread - 5");

function accept3Elements(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c); 
};
let arrayDeTres = [1,2,3];
accept3Elements(...arrayDeTres);

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
console.log("Ejercicio 1.4 Rest & spread - 6");
const dueño = {
altura:1.90,
peso:80, 
}
const mascota = {
  raza: "dobermann",
  color: "negro",
}
const binomio = {...dueño,...mascota};
console.log(binomio);
