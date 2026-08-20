const mensaje = document.querySelector("#mensaje");
const formulario2 = document.getElementById("formDocente");
const listaDocentes = document.getElementById("listaDocentes");

formulario2.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreD = document.querySelector("#nombreD").value.trim();
    const especialidad = document.querySelector("#especialidad").value.trim();
    const correoD = document.querySelector("#correoD").value.trim();

    const docente = {
        id: Date.now(),
        nombre: nombreD,
        especialidad: especialidad,
        correo: correoD
    }

    localStorage.setItem("docentes", JSON.stringify(docente));

    const docentess = obtenerDocentes();

    mostrarDocentes(docentess);

    formulario2.reset()
});

function obtenerDocentes() {
    
    const datos = localStorage.getItem("docentes");

    if(datos) {
        return JSON.parse(datos);
    }
    return[];

}

function mostrarDocentes(docentes) {
    listaDocentes.innerHTML = "";
    for (const docente of docentes) {
        listaDocentes.innerHTML += 
        `
        <tr>
            <td>${docente.nombre}</td>, 
            <td>${docente.especialidad}</td>, 
            <td>${docente.correo}</td>
            <td>
                <button class= "btn-editar" data-id= "${docente.id}" title= "Editar docente">
                    <i class= "fa-solid fa-pen"></i>
                </button>
            </td>
            <td>
                <button class= "btn-eliminar" data-id= "${docente.id}" title= "Eliminar Docente">
                    <i class= "fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}

function mostrarmensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
    setTimeout(() => {
        mensaje.textContent = " ";
        mensaje.className = "oculto";
    }, 3000);
}