
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