

console.log("-------------EJERCICIO 1--------------")

const contarDiezSiguientes = (x) => {

    for (let i = x; i < x + 10; i++) {
        //bloque
        console.log(`este es el numero ${i + 1}`)

    }

    console.log("termine")

}

contarDiezSiguientes(5)

console.log("-------------EJERCICIO 1)--------------")

const numerosEntre = () => {

    for (let i = 5; i <= 20; i += 3) {
        //bloque
        console.log(`este es el numero ${i}`)

    }

    console.log("termine")

}

numerosEntre()

console.log("-------------EJERCICIO 2)--------------")

const sumatoria = () => {

    let sumador=0
    for (let i = 0; i <= 100; i++) {
        //bloque
        console.log(`este es el numero ${i} la suma momentanea es ${sumador+i}`)
        sumador=sumador+i
    }

    return sumador

}
let resultado=sumatoria()
console.log(resultado)