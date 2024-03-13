//Exercici 1
//Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

let add = (a, b) => a+b;
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 1");
console.log(add(3,4));

// Exercici 2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

let fletxa = () => Math.random() * 100;
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 2");
 console.log(Math.round(fletxa()));

// Exercici 3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Persona {
    constructor (name){
        this.name = name; 
    }
    
    greet = () => { console.log('Hola ' + this.name)};
}

let persona = new Persona("Luis");
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 3");
persona.greet();

// Exercici 4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
let print = (x) => { console.log(x)};
let printNumbers = (arrayNumbers) => {
    for (let i = 0; i < arrayNumbers.length; i++) {
        print(arrayNumbers[i]);
}};

let myArray = [10,20,30,40,50];
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 4");
printNumbers(myArray);

// Nivell 3
// Exercici 5
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
console.log("Ejercicio 1.1 Arrow Functions - Sub Ejercicio 5");

greet = () => {console.log("Bon dia")};

saludar3Seg =() =>{setTimeout(greet,3000)};
saludar3Seg();

