//propiedades -metodos
//pares clave: valor

let usuario = {
    email: "pepe@gmail.com",
    nombre: "pepe",
    edad:22,
    iniciarSesion: function(){
        console.log("inicio sesion")
    },
    cerrarSesion: function(){
        console.log("cerro sesion")
    }
}

//DOT NOTATION
console.log(usuario.nombre)

//BRACKET NOTATION

console.log(usuario["edad"])

usuario.iniciarSesion()

//modificar
usuario.edad = usuario.edad+1

//agregar
usuario.apellido = "perez";


//borrar

delete usuario.email

console.log(usuario)


//TABLAS--REGISTROS-----> sql
//COLECCIONES --DOCUMENTOS ----->no Sql

[
    {
        nombre: "televisor",
        precio:22,
        stock:2
    },
    {
        nombre: "televisor1",
        precio:22,
        stock:2
    }
    
]

let estudiante= {
    nombre:"maria",
    domicilio:{
        calle:"italia",
        numero:45
    },
    notas:[6,7,9],
    promediar: function(){
        let acumulador =0;
        for(let i=0; i<this.notas.length; i++){
            // acumulador = acumulador+this.notas[i]
            acumulador += this.notas[i];
        }
        return acumulador/this.notas.length;
    }
}

let promedioEstudiante = estudiante.promediar()

console.log(promedioEstudiante)
