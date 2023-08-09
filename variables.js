// Creacion  de variables  Let y const
var prompt = require('prompt-sync')();
let edad = 25;
const apellido = "perez";


console.log(edad);
console.log(apellido);

//----->TIPO de DATOS----> primitivos
console.log(typeof(apellido))

//STRING-----> cadena de texto
let nombre = "pepe"

//NUMBER-->numeros

let numero = 21234

//boolean ---> true-false
let isLogged = true

//UNDEFINED 

let nombreDeUsuario = undefined

let nombreDeUsuario2 
//este ultimo tb es undefined

//NULL
let datos = null

//NaN

let x = NaN
//la respuesta a una pregunta es Not a Number

let number3=-25

// operadores matematicos

let n1=13
let n2=6
console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2)
console.log(n1/n2)

//MODULO %
console.log(n1%n2)


//CONCATENAR---> juntar

let saludo ="hola"

//TEMPLATE LITERALS ---->backsticks

let saludoBien = `hola ${nombre} como estas `
console.log(saludoBien)


//---> comparacion-> siempre devuelve un booleano

let number1= 2;
let number2=5;

console.log(number1 ==number2);//simple
console.log(number1 !=number2);//simple

console.log(number1 ===number2);//estricta
console.log(number1 !==number2);//estricta
console.log(number1>number2);

//operadores ---->logicos
console.log("--------------------")
//AND---> &&
let estaLogueado = true;
let esAdmin = false;
let tienePermiso = estaLogueado===true;

tienePermiso = estaLogueado===true && esAdmin ===true;

//se queda con el ultimo Truthy si todos son TRUthy o se queda con el primer FALSY

console.log(tienePermiso)


// OR  ----------> || pregunta si al menos uno es true

let tienePermiso2= estaLogueado=== true || esAdmin===true||2>13 ||"mama"==="mama"
//Se queda con el primer TRUthy y corta o se queda con el ultimo FALSY
console.log(tienePermiso2)

// FALSY's -----> 0--- ""---- undefined--- null
//TRUTHY's -----> 1---"mam"


//NOT----------> !

let f=true
console.log(!f)