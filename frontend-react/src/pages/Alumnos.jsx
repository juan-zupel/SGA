import { useState } from "react"
import { ListaAlumnos } from "../components/ListaAlumnos"
import FormularioAlumno from "../components/FormularioAlumno"

export default function Alumnos() {

    const [actualizar, setActualizar] = useState(0);
    const [alumnoEditar, setAlumnoEditar] = useState(null);

    function alumnoCreado() {
        setActualizar(valor => valor + 1);
        setAlumnoEditar(null);
    }

    function seleccionarAlumno(alumno) {
        setAlumnoEditar(alumno);
    }

    function cancelarEdicion() {
        setAlumnoEditar(null);
    }

    return (
        <main>
            <FormularioAlumno
                key={alumnoEditar?.legajo ?? "nuevo"}
                onDocenteCreado={alumnoCreado}
                docenteEditar={alumnoEditar}
                onCancelar={cancelarEdicion}
            />
            <ListaAlumnos
                actualizar={actualizar}
                onDocenteCreado={alumnoCreado}
                onEditarDocente={seleccionarAlumno}
            />
        </main>
    )

}