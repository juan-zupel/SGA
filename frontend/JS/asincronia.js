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

// async function prueba() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(respuesta);
// }

// prueba();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const alumnos = [
//     {
//         id: 1,
//         nombre: "José"
//     },
//     {
//         id: 2,
//         nombre: "Jerardo"
//     },
//     {
//         id: 3,
//         nombre: "Jamez"
//     }
// ];

// function obtenerAlumnos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//            resolve(alumnos); 
//         }, 3000);
//     })
// }

// obtenerAlumnos().then((e) => {
//     console.log(e);
// })

// async function iniciar() {
//     const datos = await obtenerAlumnos();
//     console.log(datos);
// }

// iniciar();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Crear obtenerMaterias() y obtenerDocentes() para luego mostrar los datos a travez de async/await

//  function obtenerMaterias() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Matematicas", "Geografia", "Ingles"]);
//         }, 3000);
//     })
//  }

// function obtenerDocentes() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Mariela", "Cristina", "Segio"]);
//         }, 3000);
//     })
// }

// async function iniciar() {
//     const materias = await obtenerMaterias();
//     const profesores = await obtenerDocentes();
//     console.log(materias);
//     console.log(profesores);
// }

// iniciar();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async function cargarAlumnos() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
//     const alumnos = await respuesta.json();
//     console.log(alumnos);
//     return alumnos;
// }

// function mostrarAlumnos(alumnos) {
//     // console.table(alumnos);
//     console.log(typeof alumnos);
//     localStorage.setItem("alumnos", JSON.stringify(alumnos));
//     const datos = localStorage.getItem("alumnos");
//     console.log(typeof datos);
//     console.log(datos);
//     const alumnosRecuperados = JSON.parse(datos);
//     console.log(typeof(alumnosRecuperados));
//     console.log(alumnosRecuperados);
//     console.table(alumnosRecuperados);
// }

// async function iniciar() {
//     const alumnos = await cargarAlumnos();
//     mostrarAlumnos(alumnos);
// }

// iniciar();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// post y coments = id, titulo, usuario

// async function post() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const info= await respuesta.json()
//     return info;

// }

// async function comments(){
//  const respuesta= await fetch("https://jsonplaceholder.typicode.com/comments")
//  const info = await respuesta.json()
//  return info;
// }
// function mostrar (info){
//     console.table(info)
//     for(const element of info){
//         console.log(element.id+"||"+element.name)
//     }
// info.forEach((element) => {

// });
// }
//  async function iniciar() {
//     const info = await comments()
//     mostrar(info)   
//  }
//  iniciar()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++