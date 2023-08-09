
// NIVEL 1
var prompt = require('prompt-sync')();

//necesito una funcion sirva para convertir poeso a dolar
//FUNCION SUMAR
const sumar =(x,y)=> x+y

let resultadoSuma= sumar(100,200)
console.log(resultadoSuma)

//FUNCION restar
const restar =(x,y)=> x-y

let resultadoResta= restar(20,5)
console.log(resultadoResta)

//FUNCION multiplicar
const multiplicar = (x, y) =>  x * y;
let resultadoMultiplicacion = multiplicar(20,8)
console.log( resultadoMultiplicacion)

//FUNCION dividir
const dividir =(x,y)=> {
    if(y===0){
        console.log(`La division es indeterminada por favor colocar un dividendo diferente de cero`)
        return;
    }
    return x/y; 
}

let resultadoDivision= dividir(100,5)
console.log(resultadoDivision)

// NIVEL 2
console.log("-------------- Testeo de Operaciones / Calculadora con prompt test SUMA y RESTA--------------")
let numero1= +prompt("Por favor ingrese el primer numero para la suma y resta: ")
let numero2= +prompt("Por favor ingrese el segundo numero para la suma y resta: ")

let resultadoSuma2=sumar(numero1,numero2)
console.log(`El resultado de la suma de los numeros ${numero1} y ${numero2} es ${resultadoSuma2}`)

let resultadoResta2=restar(numero1,numero2)
console.log(`El resultado de la resta de los numeros ${numero1} menos ${numero2} es ${resultadoResta2}`)

console.log("-------------- Testeo de Operaciones / Calculadora con prompt test multiplicacion--------------")
let n1= +prompt("Por favor ingrese el primer numero para la multiplicacion:")
let n2= +prompt("Por favor ingrese el segundo numero para la multiplicacion:")

let resultadoMultiplicar=multiplicar(n1,n2)
console.log(`El resultado de la multiplicacion de los numeros ${n1} por ${n2} es ${resultadoMultiplicar}`)

console.log("-------------- Testeo de Operaciones / Calculadora con prompt test division--------------")
let nume1= +prompt("Por favor ingrese el primer número para la división: ")
let nume2= +prompt("Por favor ingrese el segundo número para la división: ")
let resultadoDividir=dividir(nume1,nume2)
console.log(`El resultado de la división de los numeros ${nume1} entre ${nume2} es ${resultadoDividir}`)

console.log("-------------- Testeo de Operaciones / Calculadora con prompt test deivision con dividendo 0--------------")

let num1= +prompt("Por favor ingrese el numero para la división: ")
let num2= +prompt("Por favor ingrese el numero cero para probar la división: ")
let resultadoDivisionPor0=dividir(num1,num2)

// console.log(resultadoDivisionPor0)
// console.log(typeof(resultadoDivision ))



//NIVEL 3
console.log("-------------- 1. FUNCION cuadradoDeunNumero--------------")
// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

const cuadradoDeUnNumero =(x)=> multiplicar(x,x)

let N= +prompt("Por favor ingrese el numero para elevar al cuadrado: ")

let resultadoCuadrado=cuadradoDeUnNumero(N)
console.log(`El resultado del numero ${N} al cuadrado es ${resultadoCuadrado}`)

console.log("-------------- 2. FUNCION promedioDeTresNumeros-------------")

const promedioDeTresNumeros = (x,y,z) => {
    let sumaInicial = sumar(x,y)
    let sumaFinal = sumar(sumaInicial,z)
    return dividir(sumaFinal,3)
}
let h1= +prompt("Por favor ingrese primer número: ")

let h2= +prompt("Por favor ingrese segundo número: ")

let h3= +prompt("Por favor ingrese tercer número: ")

let resultadoPromedio=promedioDeTresNumeros(h1,h2,h3)
console.log(`El promedio de los números ingresados es ${resultadoPromedio}`)





console.log("-------------- 1. FUNCION generadorDePorcentaje--------------")
// P.4
// Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.
number1= +prompt("Por favor ingrese el primer número: ")
number2= +prompt("Por favor ingrese el segundo número: ")

const generadorPorcentaje = (number1, number2) => {
  const result = dividir(number1, number2);
  return result*100
}

const testGenerador = generadorPorcentaje(2,200)
console.log(testGenerador)



// Nivel III punto 3
const calcularPorcentaje =(x,y)
	return multiplicar(x,y)/100


let totalPorcentaje= +prompt("Por favor ingrese el total para obetener el porcentaje: ")
let valorPorcentaje= +prompt("Por favor ingrese el valor del porcentaje a calcular: ")
let resultadoPorcentaje=calcularPorcentaje(totalPorcentaje,NumPorcentaje)
console.log(`El resultado de calcular el porcentaje ${valorPorcentaje} del total ${totalPorcentaje} es ${resultadoPorcentaje}`)