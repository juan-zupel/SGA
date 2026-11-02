import { useState } from "react"
import { ListaMaterias } from "../components/ListaMaterias"
import FormularioMateria from "../components/FormularioMateria"

export default function Materias() {

    const [actualizar, setActualizar] = useState(0);
    const [materiaEditar, setMateriaEditar] = useState(null);

    function materiaCreada() {
        setActualizar(valor => valor + 1);
        setMateriaEditar(null);
    }

    function seleccionarMateria(materia) {
        setMateriaEditar(materia);
    }

    function cancelarEdicion() {
        setMateriaEditar(null);
    }

    return (
        <main>
            <FormularioMateria
                key={materiaEditar?.codigo ?? "nuevo"}
                onMateriaCreada={materiaCreada}
                materiaEditar={materiaEditar}
                onCancelar={cancelarEdicion}
            />
            <ListaMaterias
                actualizar={actualizar}
                onMateriaCreada={materiaCreada}
                onEditarMateria={seleccionarMateria}
            />
        </main>
    )

}