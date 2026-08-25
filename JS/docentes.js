const formulario = document.getElementById("formDocente");          // Contiene el formulario entero
const listaDocentes = document.getElementById("listaDocentes");     // Contiene la tabla donde se mostrarán los docentes
let localExistenete = null;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Variables que contienen los datos ingresados por los usuarios
    const nombre = document.getElementById("nombreD").value.trim();
    const especialidad = document.getElementById("especialidad").value.trim();
    const correo = document.getElementById("correoD").value.trim();

    // Array que contiene los del LocalStorage
    const datos = obtenerDocentes();

    // Crea un objeto con los datos ingresados por el usuario y lo añado a la constante datos
    const doc = {
        id: Date.now(),
        nombre: nombre,
        especialidad: especialidad,
        correo: correo
    };
    const docentes = datos.push(doc)

    localStorage.setItem("docentes", JSON.stringify(docentes));
    
    // mostrarEnTabla(datos);

    formulario.reset();
});

function obtenerDocentes() {
    const data = localStorage.getItem("docentes");
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

function mostrarEnTabla(docente) {
    listaDocentes.innerHTML = "";
    for (const d of docente) {
        listaDocentes.innerHTML =
            `
    <tr>
        <td>${d.id}</td>
        <td>${d.nombre}</td>
        <td>${d.especialidad}</td>
        <td>${d.correo}</td>
        <td>
            <button class="btn-editar" data-id="${d.id}" title="Editar Docente">
                <i class= "fa-solid fa-pen"></i>
            </button>
        </td>
        <td>
            <button class="btn-eliminar" data-id="${d.id}" title="Eliminar Docente">
                <i class= "fa-solid fa-trash"></i>
            </button>
        </td>
    </tr>
    `
    }
}