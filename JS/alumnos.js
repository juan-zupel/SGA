// Variables para objetos dentro de la página
const formulario = document.querySelector("#formulario")
const listaAlumnos = document.querySelector("#listaAlumnos")
const btnCancelar = document.querySelector(".btn-cancelar")

// Variables usadas para controlar funciones dentro del código
let alumnoEditandoId = null
let alumnoEditar = null
let bandera = 0

//Evento de envio de formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();                                                                 

    // Variables que contienen los datos introducidos por los usuarios
    const nombre = document.querySelector("#nombre").value.trim()                           
    const carrera = document.querySelector("#carrera").value.trim()                       
    const correo = document.querySelector("#correo").value.trim()                          

    // Se encarga de validar los datos ingresados por los usuarios
    if (nombre === "" || carrera === "" || correo === "") {
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

    // devuelve un array con los datos de los alumnos del localStorage en caso 
    // de haber y un array vacio en caso de no haber
    const alumnos = obtenerAlumnos()

    // Condicional que separa cuando se ingresa un alumno || cuando se edita un alumno ya registrado  
    if (alumnoEditandoId === null) {
        const alumno = {
            id: Date.now(),
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }
        alumnos.push(alumno)
        mostrarMensaje("Alumno guardado correctamente", "mje-exito")
    } else {
        if (bandera === 1) {
            const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
            alumno.nombre = alumnoEditar.nombre
            alumno.carrera = alumnoEditar.carrera
            alumno.correo = alumnoEditar.correo
        } else {
            const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
            alumno.nombre = nombre
            alumno.carrera = carrera
            alumno.correo = correo
        }

        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo
        };
        
        if (bandera === 1) {
            mostrarMensaje("Edición cancelada", "mje-exito")
            return
        }

        if (datosActuales.nombre === alumnoEditar.nombre &&
            datosActuales.carrera === alumnoEditar.carrera &&
            datosActuales.correo === alumnoEditar.correo) {
            mostrarMensaje("No se realizaron cambios", "mje-error");
            return
        }

        mostrarMensaje("Alumno actualizado correctamente", "mje-exito")

        alumnoEditandoId = null
        alumnoEditar = null
        btnCancelar.style.display = "none"
        formulario.querySelector("button").textContent = "Guardar Alumno"
    }

    guardarDatos("alumnos", alumnos)

    mostraAlumnos(alumnos)

    formulario.reset()
});

// Evento para cancelar la modificación de un registro
btnCancelar.addEventListener("click", function () {
    bandera = 1
    formulario.submit()
})

// Evento que permite la funcionalidad de los botones de editar y borrar en la lista de alumnos
listaAlumnos.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const id = Number(boton_el.dataset.id)
        const confirmar = confirm("¿Está seguro de eliminar este alumno?")
        if (confirmar) {
            eliminarAlumno(id)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const id = Number(boton_ed.dataset.id)
        editarAlumno(id)
    }
})

// Función para traer los alumnos del localStorage
function obtenerAlumnos() {
    return obtenerDatos("alumnos")
}

// Función para mostrar los alumnos dentro de la página
function mostraAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-id="${alumno.id}"
                title="Editar alumno">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-id="${alumno.id}"
                title="Eliminar alumno">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}

// Función para eliminar un registro en específico
function eliminarAlumno(id) {
    const alumnos = obtenerAlumnos()
    const alumnosActualizados = alumnos.filter(
        alumno => alumno.id !== id
    );
    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    mostraAlumnos(alumnosActualizados)
    if (alumnoEditandoId === id) {
        formulario.reset()
        alumnoEditandoId = null
        formulario.querySelector("button").textContent = "Guardar alumno"
    }
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}


// Función para edistar un registro en especifico
function editarAlumno(id) {
    const alumnos = obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    };
    alumnoEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar Alumno"
    document.querySelector("#nombre").focus()
    btnCancelar.style.display = "block"
}

// Permite que los registros se muestren en la tabla desde que se ingresa a la página
const alumnos = obtenerAlumnos()
mostraAlumnos(alumnos)  