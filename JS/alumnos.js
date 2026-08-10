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

async function cargarAlumnos() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const alumnos = await respuesta.json();
    console.log(alumnos);
    return alumnos;
}

function mostrarAlumnos(alumnos) {
    // console.table(alumnos);
    console.log(typeof alumnos);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    const datos = localStorage.getItem("alumnos");
    console.log(typeof datos);
    console.log(datos);
    const alumnosRecuperados = JSON.parse(datos);
    console.log(typeof(alumnosRecuperados));
    console.log(alumnosRecuperados);
    console.table(alumnosRecuperados);
}

async function iniciar() {
    const alumnos = await cargarAlumnos();
    mostrarAlumnos(alumnos);
}

iniciar();

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