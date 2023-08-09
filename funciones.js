var prompt = require('prompt-sync')();
// console.log("funcionando")
// console.log("paso adelante")
// console.log("paso al costado derecho")
// console.log("salto")
// console.log("prende el foco")

// function f1 (){

//     console.log("paso adelante")
//     console.log("paso adelante")
//     console.log("paso adelante")

// }
// f1()

// function saludar(){
//     let nombre ="pepe";
//     let saludo=`Hola ${nombre} como estas?`

//     return saludo
// }

// let saludoFinal=saludar()
// console.log(saludoFinal)


// function sumar(){
//     let n1= 2;
//     let n2=5;
//     let suma=n1+n2;
//     return suma
// }


// let sumaFinal= sumar()
// console.log(sumaFinal)

// let numeroUno=4
// let numeroDos=7

// function suma(x,y){
//     return x+y
// }

// let sumaFinal2= suma(3,5)
// console.log(sumaFinal2)

// let res= suma(numeroUno,numeroDos)
// console.log(res)

// console.log("--------MICRO DESAFIO 1----------")

// function test1(x,y){
//     return y-x
// }

// let micro1= test1(10,40)

// console.log(micro1)


// console.log("--------MICRO DESAFIO 2----------")

// function test2(x,y){
//     return x*2
//     console.log(x)
//     return  x/2
// }

// let micro2= test2(10)

// console.log(micro2)
 

// console.log("--------FUNCIONES SIMPLES----------")

// console.log("--------CONVERSOR DE PULGADAS A CM----------")

// let pulgadas= prompt("Por favor ingrese la medida en pulgadas: ");

// function conversorPc (x){
//     return x*2.54
// }

// let conversion =conversorPc(pulgadas)
// console.log(`Su medida en centimetros es  ${conversion} cm`)


// console.log("--------CONVERSOR DE UNA CADENA A URL----------")

// let nombreWeb = prompt("Ingrese el nombre de su web: ")

// function creadorUrl (x){
//     return `http://www.${x}.com`
// }

// let nombreFinal = creadorUrl(nombreWeb);
// console.log(`El nombre final de su direccion URL es ${nombreFinal}`)

// console.log("--------CONVERSOR DE ADMIRACION----------")

// let frase = prompt("Ingrese su frase: ")

// function fraseF (x){
//     return `¡${x}!`
// }

// let fraseFinal = fraseF(frase);
// console.log(`Su frase final completa es ${fraseFinal}`)


// console.log("--------EDAD PERRUNA----------")

// let edadPerro= prompt("Por favor ingrese la edad de su perro: ");

// function conversorPerro (x){
//     return x*7
// }

// let conversionPerro =conversorPerro(edadPerro)
// console.log(`La edad de su perro es  ${conversionPerro} años perrunos`)


// console.log("--------SALARIO POR HORA----------")

// let sueldo= prompt("Por favor ingrese su sueldo mensual en USD: ");

// function sueldoHora (x){
//     return x/40
// }

// let sueldoHoraFinal =sueldoHora(sueldo)
// console.log(`Su salario por hora es  ${sueldoHoraFinal} USD`)


// console.log("--------CALCULADORA IMC----------")

// let peso= prompt("Por favor ingrese su peso en kg: ");
// let talla= prompt("Por favor ingrese su talla en m: ");

// function imc (x,y){
//     return x/(y*y)
// }

// let imcFinal =imc(peso,talla)
// console.log(`Su Indice de Masa Corporal es  ${imcFinal}`)


// console.log("--------CONVERSOR MAYUSCULA----------")

// let phrase= prompt("Por favor ingrese un texto: ");


// function mayuscula (x){
//     return x.toUpperCase()
// }

// let mayusculaFinal =mayuscula(phrase)
// console.log(`El texto en mayuscula es  ${mayusculaFinal}`)


// console.log("--------FUNCION TIPO DE PARAMETRO----------")

// let parametro= prompt("Por favor ingrese un parametro: ");


// function tipoParametro (x){
//     return typeof x;
// }

// let tipoFinal =tipoParametro(parametro)
// console.log(`El tipo de parametro  es  ${tipoFinal}`)


//EXPRESADAS o ANONIMAS (2 TIPOS, REGULAR Y DE TIPO FLECHA) 

//por buena practica no se cambia una funcion por eso no se debe colocar let sino const
const restar=function (x,y){
    return x-y
}
//puedo guardar una funcion esta es funcion regular
let resultadoResta=restar(15,4);
console.log(resultadoResta);

//tipo flecha multiplicar por 5 o arrow function
const multiplicarPorCinco= (n)=>{
    return n*5
}
//se puede colocar sin parentesis si tiene un solo parametro y quitar las llaves
const multiplicarPorCinco2 = numero => numero*5

let resultadoMulti=multiplicarPorCinco(3)
console.log(resultadoMulti)

//SCOPE---> alcance o ambiente o lugar donde existe o donde vive una variable

// SCOPE ----> local se crean abriendo llaves {}

{
    //aca no se puede usar x

    {

        let x=5
        {
            x




        }
        x
    }
}
let palabra="casa"
const pruebaScope =()=>{
    let palabra ="casa"
    console.log(palabra)

}

pruebaScope()


//necesito una funcion sirva para convertir poeso a dolar

const convertirPesos =(cantidadPesos,precioDolar)=> cantidadPesos/precioDolar

let resultadoDolares= convertirPesos(5000,200)
console.log(resultadoDolares)