import { useState, useEffect } from "react";

export function ListaAlumnos() {

    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {

        async function cargarAlumnos() {
            try {
                const respuesta = await fetch("http://localhost:3001/alumnos");

                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista")
                }

                const datos = await respuesta.json();
                setAlumnos(datos);
            }catch (error) {
            console.error("Error de conexión: ", error);
            }
        }
        cargarAlumnos()

    }, []);

    return (
        <>
            <h2>Alumnos</h2>
            <br />
            <table>
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
            </table>
            {/* {alumnos.map(alumno => (
                <p key={alumno.legajo}>
                    {alumno.legajo} - {alumno.nombre} - {alumno.carrera} - {alumno.correo}
                </p> */}
            {/* ))} */}
        </>
    );
}