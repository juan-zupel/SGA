const formulario = document.querySelector("#formulario")
const listaDocentes = document.querySelector("#listaDocentes")
let docenteEditandoLegajo = null
let docenteEditar = null
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display = "none"
const btnGuardar = document.querySelector("#btnGuardar")
const API_DOCENTES = "http://localhost:3001/docentes"

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Cargamos los valores de los campos del formulario
    const legajo = document.querySelector("#legajo").value.trim()
    const nombre = document.querySelector("#nombre").value.trim()
    const especialidad = document.querySelector("#especialidad").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    // validaciones de los campos del formulario
    if (legajo === "" || nombre === "" || especialidad === "" || correo === "") {
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

    try {
        // Si docenteEditandoLegajo es null, significa que estamos creando un nuevo docente, por lo que hacemos un POST.
        if (docenteEditandoLegajo === null) {
            const docente = {
                legajo: Number(legajo),
                nombre: nombre,
                especialidad: especialidad,
                correo: correo
            }
            const respuesta = await fetch(API_DOCENTES, {
                method: "POST", 
                headers:{
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(docente)
            })
            if(!respuesta.ok) {
                throw new Error("No fue posible obtener los docentes")
            }
            mostrarMensaje("Docente guardado correctamente", "mje-exito")
        } else {
            const datosActuales = {
                nombre: nombre, 
                especialidad: especialidad, 
                correo: correo
            }
            if(JSON.stringify(datosActuales) === JSON.stringify(docenteEditandoLegajo)) {
                mostrarMensaje("No se realizaron cambios", "mje-adv")
                return
            }
            const respuesta = await fetch(`${API_DOCENTES}/${docenteEditandoLegajo}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    nombre: nombre, 
                    especialidad: especialidad, 
                    correo: correo
                })
            })
            if(!respuesta.ok) {
                throw new Error("La API respondió un error")
            }
            docenteEditandoLegajo = null
            docenteEditar = null
            btnGuardar.textContent = "Guardar Docente"
            document.querySelector("#legajo").disabled = false

            mostrarMensaje("Docente actualizado correctamente", "mje-exito")
        }
        await actualizarListaDocentes()
        formulario.reset()
    } catch (error) {
        console.error(error.message)
        mostrarMensaje("No fue posible realizar la operacion", "mje-error")
    }
});


async function obtenerDocentes() {
    try {
        const respuesta = await fetch(API_DOCENTES)
        const docente = await respuesta.json()
        return docente
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

function mostraDocentes(docentes) {
    listaDocentes.innerHTML = ""
    for (const docente of docentes) {
        listaDocentes.innerHTML += `
        <tr>
            <td>${docente.legajo}</td>
            <td>${docente.nombre}</td>
            <td>${docente.especialidad}</td>
            <td>${docente.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-legajo="${docente.legajo}"
                title="Editar docente">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-legajo="${docente.legajo}"
                title="Eliminar docente">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}

async function eliminarDocente(legajo) {
    const respuesta = await fetch(`${API_DOCENTES}/${legajo}`, {
        method: "DELETE"
    })
    if (!respuesta.ok) {
        mostrarMensaje("No se pudo eliminar el docente", "mje-error")
        return
    }

    if (docenteEditandoLegajo === legajo) {
        formulario.reset()
        docenteEditar = null
        docenteEditandoLegajo = null
        btnGuardar.textContent = "Guardar Docente"
        document.querySelector("#legajo").disabled = false
        btnCancelar.style.display = "none"
    }
    mostrarMensaje("Docente eliminado correctamente", "mje-exito")
    await actualizarListaDocentes()
}

async function actualizarListaDocentes() {
    try {
        const docentes = await obtenerDocentes()
        mostraDocentes(docentes)
    } catch (error) {
        mostrarMensaje("No se Pudo cargar la lista de docentes", "mje-error")
    }
}

listaDocentes.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const legajo = Number(boton_el.dataset.legajo)
        const confirmar = confirm("¿Está seguro de eliminar este docente?")
        if (confirmar) {
            eliminarDocente(legajo)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const legajo = Number(boton_ed.dataset.legajo)
        editarDocente(legajo)
    }
})

async function editarDocente(legajo) {
    const docentes = await obtenerDocentes()
    const docente = docentes.find(docente => docente.legajo === legajo)

    if (!docente) {
        mostrarMensaje("Docente no encontrado", "mje-error")
        return
    }

    document.querySelector("#legajo").value = docente.legajo;
    document.querySelector("#legajo").disabled = true;
    document.querySelector("#nombre").value = docente.nombre;
    document.querySelector("#especialidad").value = docente.especialidad;
    document.querySelector("#correo").value = docente.correo;

    docenteEditar = {
        nombre: docente.nombre,
        especialidad: docente.especialidad,
        correo: docente.correo
    }

    docenteEditandoLegajo = docente.legajo;
    btnCancelar.style.display = "inline-block"
    btnGuardar.textContent = "Actualizar Docente"
    document.querySelector("#nombre").focus()
}

function cancelarEdicion() {
    formulario.reset()
    docenteEditandoLegajo = null
    docenteEditar = null
    btnGuardar.textContent = "Actualizar Docente"
    document.querySelector("#legajo").disabled = false
    btnCancelar.style.display = "none"
    document.querySelector("#legajo").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion)

async function iniciar() {
    await actualizarListaDocentes()
}

iniciar()