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
// TODO EL CODIGO ANTERIOR ES DE PRUEBA

const formulario = document.querySelector("#formAlumno");
const mensaje = document.querySelector("#mensaje");
let alumnoEditandoId = null;


formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nombre = document.querySelector("#nombre").value.trim();
    const carrera = document.querySelector("#carrera").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    if(nombre === "" || carrera === "" || correo === "") {
        mostrarmensaje("Todos los campos son obligatorios", "mje-error");
        return
    }

    if(!correo.includes("@")) {
        mostrarmensaje("Ingrese un correo electrónico valido", "mje-error");
        return
    }

    if(nombre.length < 3) {
        mostrarmensaje("El nombre debe tener por lo menos 3 caracteres", "mje-error");
        return
    }

    const alumnos = obteneralumnos();
    const listaAlumnos = document.querySelector("#listaAlumnos");

    if (alumnoEditandoId === null) {
        const alumno = {
            id: Date.now(),
            nombre: nombre,
            carrera: carrera,
            correo: correo
        };
        alumnos.push(alumno)
        mostrarmensaje("Alumno guardado correctamente", "mje-exito");
    }else{
        const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId);
        alumno.nombre = nombre;
        alumno.carrera = carrera;
        alumno.correo = correo;
        alumnoEditandoId = null;
        formulario.querySelector("button").textContent = "Guardar Alumno";

        mostrarmensaje("Alumno actualizado correctamente", "mje-exito");
    }

    localStorage.setItem("alumnos", JSON.stringify(alumnos))

    mostrarmensaje("Alumno guardado")

    mostrarAlumnos(alumnos)

    formulario.reset()
});

function obteneralumnos() {
    const datos = localStorage.getItem("alumnos")
    if (datos) {
        return JSON.parse(datos)
    }
    return []

}

function mostrarmensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
    setTimeout(() => {
        mensaje.textContent = " ";
        mensaje.className = "oculto";
    }, 3000);
}

function mostrarAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <tr>
            <td> ${alumno.nombre}<td/>
            <td> ${alumno.carrera}<td/>
            <td> ${alumno.correo} <td/>
            <td> 
               <button class="btn-editar" data-id="${alumno.id}">Editar</button>
               <button class="btn-eliminar" data-id="${alumno.id}">Eliminar</button>
            </td>
        </tr>
        `;
    }
}

function eliminarAlumno(id) {
    const alumnos = obteneralumnos()
    const alumnosActuales = alumnos.filter(alumno => alumno.id != id);
    localStorage.setItem("alumnos", JSON.stringify(alumnosActuales));
    mostrarAlumnos(alumnosActuales);
    mostrarmensaje("Alumno eliminado", "mje-exito");
}

listaAlumnos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
        const id = Number(e.target.dataset.id)
        eliminarAlumno(id)
    }
})

function editarAlumno(id) {
    //obtener alumnos
    const alumnos = obteneralumnos();
    //filtrar alumnos
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar alumno"
}

listaAlumnos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-editar")) {
        const id = Number(e.target.dataset.id)
        editarAlumno(id)
    }
})

const alumnos = obteneralumnos();
mostrarAlumnos(alumnos);