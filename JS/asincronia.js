// console.log("Inicio");
// setTimeout(() => {
//     console.log(".......");   
// }, 3000);
// setTimeout(() => {
//     console.log("Fin");
// }, 5000);

// // Tambien se puede...

// console.log("Inicio");
// setTimeout(() => {
//     console.log(".......");   
//     setTimeout(() => {
//     console.log("Fin");
// }, 5000);
// }, 3000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function saludar() {
//     console.log("Hola");
// }
// function ejecutar(funcion) {
//     funcion();
// }

// ejecutar(saludar);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("AM PATRICK AND I LOVE POTATO CHIPS");
// setTimeout(() => {
//     console.log("Patrick, I´m out");
// }, 1000);
// setTimeout(() => {
//     console.log("I´m out");
// }, 2000);
// setTimeout(() => {
//     console.log("AM AUT...");
// }, 4000);
// setTimeout(() => {
//     console.log("AM AUT...");
// }, 5000);
// setTimeout(() => {
//     console.log("AAAUWRUWUURUUURURUUWWUAAAWAWAWWWURU");
// }, 6000);
// setTimeout(() => {
//     console.log("AAAAAHHHHHHHHHHHHHH");
// }, 8000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Abriendo SGA...");
// setTimeout(() => {
//     console.log("Alumnos Cargados")
// }, 3000);

// console.log("El usuario puede seguir navegando");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("Solicitando lista de alumnos");
// setTimeout(() => {
//     console.log("Lista recibida.")
// }, 5000);
// setTimeout(() => {
//     console.log("Mientras tanto el programa sigue ejecutandose...");
// }, 400);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// No funciona ya que la función termina antes de que el return se ejecute

// function obtenerAlumnos() {
//     setTimeout(() => {
//         return ["Ana", "José", "Angel"]
//     }, 3000);
// }


// Este si funciona

// function obtenerAlumnos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         console.log("Ya tengo el arreglo")
//            resolve(["Ana", "José", "Angel"]); 
//         }, 3000);
//     })
// }

// obtenerAlumnos().then((alumnos) => {
//     console.log(alumnos);
// })

// async function iniciar() {
//     const alumnos = await obtenerAlumnos();
//     console.log(alumnos)
// }

// iniciar();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function obtenerClima() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("22° C - Soleado")
//         }, 2000)
//     })
// }

// // Con then()
// obtenerClima().then((clima) => {
//     console.log(clima);
// })

// // Con async/await
// async function mostrarClima() {
//     const clima = await obtenerClima();
//     console.log(clima);
// }

// mostrarClima();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function consultarSaldo() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(125000);
//         }, 3000);
//     })
// }

// consultarSaldo().then((saldo) => {
//     console.log(saldo);
// })

// async function obtenerSaldo() {
//     const saldo = await consultarSaldo();
//     console.log(saldo);
// }

// obtenerSaldo();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function obtenerUsuario() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 nombre: "Maria",
//                 edad: 25
//             })
//         }, 3000);
//     })
// }

// async function mostrarUsuario() {
//     console.log("Buscando usuario.....");
//     const usuario = await obtenerUsuario();
//     console.log(usuario);
// }

// mostrarUsuario();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function prueba() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(respuesta);
}

prueba();