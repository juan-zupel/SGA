import { useState } from "react";
const API_ALUMNOS = "http://localhost:3001/alumnos"

function FormularioAlumno({ onAlumnoCreado, alumnoEditar, onCancelar }) {
    
    const [formulario, setFormulario] = useState({
        legajo: String(alumnoEditar?.legajo ?? ""),
        nombre: alumnoEditar?.nombre ?? "",
        carrera: alumnoEditar?.carrera ?? "",
        correo: alumnoEditar?.correo ?? ""
    })
    
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    function manejarCambio(e) {
        const { name, value } = e.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true)

        const alumno = {
            ...formulario,
            legajo: Number(formulario.legajo)
        };

        const editando = Boolean(alumnoEditar);
        const url = editando 
            ? `${API_ALUMNOS}/${alumnoEditar.legajo}` 
            : API_ALUMNOS

        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(alumno)
            })
            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({
                legajo: "",
                nombre: "",
                carrera: "",
                correo: ""
            })

            onAlumnoCreado()

        } catch (error) {
            console.error("Error al guardar:", error)
            setError(error.message || "No se pudo conectar con el servidor")
        } finally {
            setGuardando(false)
        }
    }

    function cancelar() {
        onCancelar()
    }

    return (
        <>
            <h2>{alumnoEditar ? "Editando Alumno" : "Nuevo Alumno"}</h2>
            <form onSubmit={guardar} style={{display: "flex", flexDirection: "column", marginRight: "30%", marginLeft: "30%"}}>
                <label htmlFor="legajo">Legajo</label>
                <input
                    id="legajo"
                    name="legajo"
                    value={formulario.legajo}
                    onChange={manejarCambio}
                    required
                />
                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    required
                />
                <label htmlFor="carrera">Carrera</label>
                <input
                    id="carrera"
                    name="carrera"
                    value={formulario.carrera}
                    onChange={manejarCambio}
                    required
                />
                <label htmlFor="correo">Correo</label>
                <input
                    id="correo"
                    name="correo"
                    value={formulario.correo}
                    onChange={manejarCambio}
                    required
                />
                <button style={{marginRight: "auto", marginLeft: "auto", marginTop: "30px", height: "27px"}} type="submit" disabled={guardando}>
                    {guardando ? "Guardando..." : alumnoEditar ? "Guardar Cambios" : "Guardar"}
                </button>
                {alumnoEditar && (
                    <button style={{marginRight: "auto", marginLeft: "auto", marginTop: "5px", height: "27px"}} 
                    type="button" onClick={cancelar} disabled={guardando}>Cancelar Edición</button>
                )}
                <br />
                {error && <p role="alert">{error}</p>}
            </form>
        </>
    )
}
export default FormularioAlumno