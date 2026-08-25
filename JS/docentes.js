// const formulario = document.getElementById("formDocente");          // Contiene el formulario entero
// const listaDocentes = document.getElementById("listaDocentes");     // Contiene la tabla donde se mostrarán los docentes
// let localExistenete = null;

// formulario.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Variables que contienen los datos ingresados por los usuarios
//     const nombre = document.getElementById("nombreD").value.trim();
//     const especialidad = document.getElementById("especialidad").value.trim();
//     const correo = document.getElementById("correoD").value.trim();

//     // Array que contiene los del LocalStorage
//     const datos = obtenerDocentes();

//     // Crea un objeto con los datos ingresados por el usuario y lo añado a la constante datos
//     const doc = {
//         id: Date.now(),
//         nombre: nombre,
//         especialidad: especialidad,
//         correo: correo
//     };
//     const docentes = datos.push(doc)

//     localStorage.setItem("docentes", JSON.stringify(docentes));
    
//     // mostrarEnTabla(datos);

//     formulario.reset();
// });

// function obtenerDocentes() {
//     const data = localStorage.getItem("docentes");
//     if (data) {
//         return JSON.parse(data);
//     }
//     return [];
// }

// function mostrarEnTabla(docente) {
//     listaDocentes.innerHTML = "";
//     for (const d of docente) {
//         listaDocentes.innerHTML =
//             `
//     <tr>
//         <td>${d.id}</td>
//         <td>${d.nombre}</td>
//         <td>${d.especialidad}</td>
//         <td>${d.correo}</td>
//         <td>
//             <button class="btn-editar" data-id="${d.id}" title="Editar Docente">
//                 <i class= "fa-solid fa-pen"></i>
//             </button>
//         </td>
//         <td>
//             <button class="btn-eliminar" data-id="${d.id}" title="Eliminar Docente">
//                 <i class= "fa-solid fa-trash"></i>
//             </button>
//         </td>
//     </tr>
//     `
//     }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const formulario = document.querySelector("#formulario")
const listaDocentes = document.querySelector("#listaDocentes")
let docenteEditandoId = null

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim()
    const especialidad = document.querySelector("#especialidad").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if (nombre === "" || especialidad === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }

    if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo electrónico válido", "mje-error")
        return
    }

    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
        return
    }

    const docentes = obtenerDocentes()

    if (docenteEditandoId === null) {
        const docente = {
            id: Date.now(),
            nombre: nombre,
            especialidad: especialidad,
            correo: correo
        }
        docentes.push(docente)
        mostrarMensaje("Docente guardado correctamente", "mje-exito")
    } else {
        const docente = docentes.find(docente => docente.id === docenteEditandoId)
        docente.nombre = nombre
        docente.especialidad = especialidad
        docente.correo = correo
        docenteEditandoId = null
        formulario.querySelector("button").textContent = "Guardar Docente"

        mostrarMensaje("Docente actualizado correctamente", "mje-exito")
    }
    // localStorage.setItem("docentes", JSON.stringify(docentes))
    guardarDatos("docentes", docentes)
    mostraDocentes(docentes)
    formulario.reset()
});


function obtenerDocentes() {
    return obtenerDatos("docentes")
}

function mostraDocentes(docentes) {
    listaDocentes.innerHTML = ""
    for (const docente of docentes) {
        listaDocentes.innerHTML += `
        <tr>
            <td>${docente.id}</td>
            <td>${docente.nombre}</td>
            <td>${docente.especialidad}</td>
            <td>${docente.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-id="${docente.id}"
                title="Editar docente">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-id="${docente.id}"
                title="Eliminar docente">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}
function eliminarDocente(id) {
    const docentes = obtenerDocentes()
    const docentesActualizados = docentes.filter(
        docente => docente.id !== id
    );
    localStorage.setItem("docentes", JSON.stringify(docentesActualizados))
    mostraDocentes(docentesActualizados)
    if (docenteEditandoId === id){
        formulario.reset()
        docenteEditandoId = null
        formulario.querySelector("button").textContent = "Guardar docente"
    }
    mostrarMensaje("Docente eliminado correctamente", "mje-exito")
}

listaDocentes.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const id = Number(boton_el.dataset.id)
        const confirmar = confirm("¿Está seguro de eliminar este docente?")
        if (confirmar) {
        eliminarDocente(id)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const id = Number(boton_ed.dataset.id)
        editarDocente(id)
    }
})

function editarDocente(id) {
    const docentes = obtenerDocentes()
    const docente = docentes.find(docente => docente.id === id)
    document.querySelector("#nombre").value = docente.nombre;
    document.querySelector("#especialidad").value = docente.especialidad;
    document.querySelector("#correo").value = docente.correo;
    docenteEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar Docente"
    document.querySelector("#nombre").focus()
}

const docentes = obtenerDocentes()
mostraDocentes(docentes)  