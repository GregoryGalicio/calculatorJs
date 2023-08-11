console.log("---------------FUNCION EDADES PARA ENTRAR-----------")

// EDAD PARA ENTRAR A BAR
let edad = 51

//(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas) 
const entrada = (edad) => {
    if (edad < 18 && edad > 0) {
        return edad % 2 === 1 ? `No puede pasar al bar y ademas tu edad ${edad} es impar ` : "No puede pasar al bar"
    }
    else if (edad <= 0) {
        return "Error, edad invalida, por favor ingrese un número válido"
    }
    else if (edad < 21) {
        return edad % 2 === 1 ? `Puede pasar al bar, pero no puede tomar alcohol y ademas tu edad ${edad} es impar ` : "Puede pasar al bar, pero no puede tomar alcohol"
    }
    else if (edad === 21) {
        return `Puede pasar al bar y tomar alcohol, felicidades por cumplir 21 y ademas tu edad ${edad} es impar `
    }

    else {
        return edad % 2 === 1 ? `Puede pasar al bar  y tomar alcohol, ademas tu edad ${edad} es impar ` : "Puede pasar al bar  y tomar alcohol"

    }

}

let resultadoEntrada = entrada(21)
console.log(resultadoEntrada)





// FUNCTION totalAPagar() 
const totalAPagar = (vehiculo, litrosConsumidos) => {
    console.log("---------------FUNCION TOTAL A PAGAR-----------")
    let precioLitro = 0;
    let litrosCostoXPagar = 0;
    if (vehiculo === 'coche') {
        precioLitro = 86;
    } else if (vehiculo === 'moto') {
        precioLitro = 70;
    } else if (vehiculo === 'autobus') {
        precioLitro = 55;
    }
    litrosCostoXPagar = (litrosConsumidos >= 0 && litrosConsumidos <= 25) == true ? 50 : 25;
    return `El tipo de vehiculo es ${vehiculo}, el costo por litro a pagar es ${precioLitro} la cantidad de litros consumidos es ${litrosCostoXPagar}. El total a pgar es ${precioLitro * litrosCostoXPagar}`
}

let total= totalAPagar("coche",20)
console.log(total)



console.log("---------------FUNCION NUMERO SECRETO-----------")
// ¿Cual es el número secreto? 
// Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el número secreto. 
// El número secreto deberá ser seleccionado de manera random de entre 1 y 10 (investiga que hace la función 
// Math.random()), en caso de ser correcto retorna un mensaje felicitando al usuario, y en caso de que no acierte, 
// retorna un mensaje de aliento junto con el número ingresado y el secreto. 
const secreto = Math.round(Math.random() * 10 + 1)

const numeroSecreto = (numero) => {
    if (numero === secreto) {
        return `Correcto el numero secreto es ${secreto}!!`
    }
    return `Incorrecto, elegiste ${numero} pero el numero secreto es: ${secreto}, sigue intentando!!`
}

for (let i = 1; i < 11; i++) {
    respuesta = numeroSecreto(i)
    console.log(respuesta)

    if(respuesta.includes('Correcto')){
        break;
    }
}



// FUNCION

let sandwich = prompt("Selecciona el tipo de sandwich: Pollo - carne - veggie")

const sistemaLocal = (sandwich) => {
    let base = 0
    if (sandwich === "pollo") {
        base = 150
    } else if (sandwich === "carne") {
        base = 200
    } else if (sandwich === "veggie") {
        base = 100
    }
    pan = prompt("¿Qué tipo de pan desea?")
    let precioPan = 0
    if (pan === "blanco") {
        precioPan = 50
    } else if (pan === "negro") {
        precioPan = 60
    } else if (pan === "s/gluten") {
        precioPan = 75
    }
    extra = prompt("¿Quiere algún elemento adicional?")
    let queso = true
    let tomate = true
    let lechuga = true
    let cebolla = true
    let mayonesa = true
    let mostaza = true
}