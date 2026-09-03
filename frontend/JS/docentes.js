const formulario = document.querySelector("#formulario")
const listaDocentes = document.querySelector("#listaDocentes")
const btnCancelar = document.querySelector(".btn-cancelar")
let docenteEditandoId = null
let docenteEditar = null
let bandera = 0

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
        if (bandera === 1) {
            const docente = docentes.find(docente => docente.id === docenteEditandoId)
            docente.nombre = docenteEditar.nombre
            docente.especialidad = docenteEditar.especialidad
            docente.correo = docenteEditar.correo
        } else {
            const docente = docentes.find(docente => docente.id === docenteEditandoId)
            docente.nombre = nombre
            docente.especialidad = especialidad
            docente.correo = correo
        }

        const datosActuales = {
            nombre: nombre,
            especialidad: especialidad,
            correo: correo
        }
        
        
        if (datosActuales.nombre === docenteEditar.nombre &&
            datosActuales.especialidad === docenteEditar.especialidad &&
            datosActuales.correo === docenteEditar.correo) {
                if (bandera === 1) {
                    mostrarMensaje("Edición cancelada", "mje-exito")
                    return
                }
                mostrarMensaje("No se realizaron cambios", "mje-error");
                return
        }
        
        mostrarMensaje("Docente actualizado correctamente", "mje-exito")

        docenteEditandoId = null
        docenteEditar = null
        btnCancelar.style.display = "none"
        formulario.querySelector("button").textContent = "Guardar Docente"
    }
    guardarDatos("docentes", docentes)

    bandera = 0

    mostraDocentes(docentes)

    formulario.reset()
});

btnCancelar.addEventListener("click", function () {
    bandera = 1
    formulario.submit()
})

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
    if (docenteEditandoId === id) {
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
    docenteEditar = {
        nombre: docente.nombre,
        especialidad: docente.especialidad,
        correo: docente.correo
    }
    docenteEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar Docente"
    document.querySelector("#nombre").focus()
    btnCancelar.style.display = "block"
}

const docentes = obtenerDocentes()
mostraDocentes(docentes)  