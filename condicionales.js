//ANCHOR-----> Estructuras de control


//is -else

//superAdmin---> acceso a todo
//Admin ----> Acceso a casi todo
//Cliente----> Acceso a solo una parte

// const determinarAcceso = (rolUsuario) => {


//     if (rolUsuario === "SuperAdmin") {
//         //bloque scope
//         return "acceso a todo"
//     }
//     else if (rolUsuario === "admin") {
//         return "acceso a casi todo"
//     }
//     else if (rolUsuario === "cliente") {
//         return "acceso a solo una parte"
//     }
//     else {
//         return "Usted no tiene acceso por favor logueese"
//     }
// }

const determinarAcceso = (rolUsuario) => {
    let condicion = "";
    if (rolUsuario === "SuperAdmin") {
        //bloque scope
        condicion = "acceso a todo"
    }
    else if (rolUsuario === "admin") {
        condicion = "acceso a casi todo"
    }
    else if (rolUsuario === "cliente") {
        condicion = "acceso a solo una parte"
    }
    else {
        condicion = "Usted no tiene acceso por favor logueese"
    }
    return condicion
}
let resultadoAcceso = determinarAcceso("otra cosa")
console.log(resultadoAcceso)



//ternario
//una funcion que determine si el clima esta lluvioso tiene que decir si llevalo sino no , no hace falta

const llevoParaguas = (clima) => {
    if (clima === "lluvioso") {
        return "Si , llevalo"
    } else {
        return "No, no hace falta"
    }
}

let resultado = llevoParaguas("soleado")
console.log(resultado)

//cuando hay solo dos caminos posibles no es necesario los if sino el ternario

const llevoParaguas2 = (clima) => {
    //se llama ternario 1ero la condicion , lo verdadero y falso
    //condicion?verdadero:falso
    return clima === "lluvioso?" ? "Si, llevalo" : "No, no hace falta"
}

let resultado1 = llevoParaguas("lluvioso")
console.log(resultado1)



//switch---->case

//base impuesto 100
//vw--10
//audi---20
//volvo---30
// renault---40
// bmw---50
// tesla---- 60

const determinarImpuesto = (marcaDeAuto) => {
    let impuesto = 100;
    switch (marcaDeAuto) {
        case "vw":
            //bloque
            // impuesto=impuesto+10
            impuesto += 10;
            break
        case "audi":
            impuesto += 20;
            break
        case "volvo":
            impuesto += 30;
            break
        case "renault":
            impuesto += 40;
            break
        case "bmw":
            impuesto += 50;
            break
        case "tesla":
            impuesto += 60;
            break
        default:
            impuesto = 0;
    }
    return impuesto>0 ? impuesto:`Su auto de marca ${marcaDeAuto}  esta extento y el total a pagar es ${impuesto}`

}
let resultado2 = determinarImpuesto("toyota")
console.log(resultado2)