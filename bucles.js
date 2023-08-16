

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

console.log("-------------EJERCICIO 3) FACTORIAL--------------")

const mostrarFactorial = (x) => {
    
    if(x>0 && x%1==0){

        let factorial=1
        for (let i = 1; i <= x; i++) {
            //bloque
            // console.log(`este es el numero ${i} la suma momentanea es ${sumador+i}`)
            factorial=factorial*i
        }
        return factorial
    }
    else{
        console.log("EL numero es negativo o decimal no tiene factorial")
    }
    


}
let resultadoFactorial=mostrarFactorial(5)
console.log(resultadoFactorial)