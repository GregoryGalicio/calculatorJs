// ANCHOR ----> Estructura de repeticion
console.log("casa")
console.log("casa")
console.log("casa")
console.log("casa")
console.log("casa")
console.log("casa")
console.log("casa")
console.log("casa")


let numero=4
// numero=numero+5
numero +=5
numero++ //esto incrementa en 1 significa numero=numero+1
numero-- //decrementa en 1 
console.log("--------------REPETIR VECES------------")
//for tiene inicializacion; condicion y modificador
const repetirDiez =()=>{
    
    for(let i= 1;i<11; i++){
        //bloque
        console.log(`casa numero ${i}` )
    }

    console.log("termine")
  
}

repetirDiez()

const contarHasta =(x)=>{
    
    for(let i= 1;i<=x; i++){
        //bloque
        console.log(`Este es el numero ${i}` )
    }

    console.log("termine")
  
}
contarHasta(5)

console.log("--------FUNCION CONTAR IMPARES----------------")
//desde el 0 al 16
const contarImpares =()=>{


    let acumulador= 0
    for(let i=0; i<17;i++){

        if(i%2 !==0){
            acumulador++

        }
        
    }
    return acumulador
}

let resultado =contarImpares()
console.log(resultado)

//cuando las funciones no retornan nada no tiene sentido colocarlo enn una variable
//for

//while aquellos caso que dependan de una variable externa

console.log("-----------NUMEROS DEL 20 al 25-------------")

const mostrarNumeros =()=>{
    
    let i=20
    while(i<26){
        console.log(i)
        i++
    }
}

mostrarNumeros()

//do while