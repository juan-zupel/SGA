import { useState } from "react"
import { ListaDocentes } from "../components/ListaDocentes"
import FormularioDocente from "../components/FormularioDocente"

export default function Docentes() {

    const [actualizar, setActualizar] = useState(0);
    const [docenteEditar, setDocenteEditar] = useState(null);

    function docenteCreado() {
        setActualizar(valor => valor + 1);
        setDocenteEditar(null);
    }

    function seleccionarDocente(docente) {
        setDocenteEditar(docente);
    }

    function cancelarEdicion() {
        setDocenteEditar(null);
    }

    return (
        <main>
            <FormularioDocente
                key={docenteEditar?.legajo ?? "nuevo"}
                onDocenteCreado={docenteCreado}
                docenteEditar={docenteEditar}
                onCancelar={cancelarEdicion}
            />
            <ListaDocentes
                actualizar={actualizar}
                onDocenteCreado={docenteCreado}
                onEditarDocente={seleccionarDocente}
            />
        </main>
    )

}