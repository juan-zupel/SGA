import { useState, useEffect } from "react";
const API_ALUMNOS = "http://localhost:3001/alumnos";

export function ListaAlumnos({ actualizar, onAlumnoCreado }) {

    const [alumnos, setAlumnos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("")

    async function eliminarAlumno(legajo) {
        const confirmar = window.confirm("¿Seguro que quiere eliminar el alumno?");

        if (!confirmar) {
            return
        }

        try {
            
            const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`,
                { method: "DELETE" }
            );

            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar al alumno.Estado HTTP: ${respuesta.status}`)
            };

            onAlumnoCreado();

        } catch(error) {
            console.error("Error al eliminar: ", error);
            alert(error.message || "No se pudo eliminar al Alumno");
        }
    }

    useEffect(() => {

        async function cargarAlumnos() {

            setCargando(true);
            setError("");

            try {
                const respuesta = await fetch(API_ALUMNOS);

                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista")
                }

                const datos = await respuesta.json();
                setAlumnos(datos);
            } catch (error) {
                console.error("Error de conexión: ", error);
                setError("No se pudo cargar la lista de alumnos")
            } finally {
                setCargando(false)
            }
        }
        cargarAlumnos()

    }, [actualizar]);

    if (cargando) {
        return <p>Cargando Alumnos...</p>
    }
    if (error) {
        return <p role="alert">{error}</p>
    }

    return (
        <>
            <h2 style={{ marginTop: "20px" }}>Alumnos</h2>
            {alumnos.length === 0
                ? (<p>No hay alumnos registrados</p>)
                : (
                    <ul style={{ listStyle: "none" }}>
                        {alumnos.map(alumno => (
                            <li key={alumno.legajo}>
                                {alumno.legajo} - {alumno.nombre} - {alumno.carrera} - {alumno.correo}
                                <br />
                                <button type="button" onClick={() => eliminarAlumno(alumno.legajo)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                )
            }




            {/* <table style={{marginLeft: "15px", marginRight: "15px"}}>
                <tbody>
                    <tr >
                        <th style={{ border: "solid 1px white" }}>Legajo</th>
                        <th style={{ border: "solid 1px white" }}>Nombre</th>
                        <th style={{ border: "solid 1px white" }}>Carrera</th>
                        <th style={{ border: "solid 1px white" }}>Correo</th>
                    </tr>
                    {alumnos.map(alumno => (
                        <tr key={alumno.legajo}>
                            <th style={{ border: "solid 1px white" }}>{alumno.legajo}</th>
                            <th style={{ border: "solid 1px white" }}>{alumno.nombre}</th>
                            <th style={{ border: "solid 1px white" }}>{alumno.carrera}</th>
                            <th style={{ border: "solid 1px white" }}>{alumno.correo}</th>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {/* {alumnos.map(alumno => (
                <p key={alumno.legajo}>
                    {alumno.legajo} - {alumno.nombre} - {alumno.carrera} - {alumno.correo}
                </p> */}
            {/* ))} */}

        </>
    );
}