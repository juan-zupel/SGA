import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
const API_DOCENTES = "http://localhost:3001/docentes"

function FormularioDocente({ onDocenteCreado, docenteEditar, onCancelar }) {
    const nombreInputRef = useRef(null);
    
    const [formulario, setFormulario] = useState({
        legajo: String(docenteEditar?.legajo ?? ""),
        nombre: docenteEditar?.nombre ?? "",
        especialidad: docenteEditar?.especialidad ?? "",
        correo: docenteEditar?.correo ?? ""
    })
    
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    useEffect(() => {
        if (docenteEditar) {
            nombreInputRef.current?.focus();
        }
    }, [docenteEditar]);

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

        const docente = {
            ...formulario,
            legajo: Number(formulario.legajo)
        };
        const editando = Boolean(docenteEditar);
        const url = editando 
            ? `${API_DOCENTES}/${docenteEditar.legajo}` 
            : API_DOCENTES;

        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(docente)
            })
            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el docente. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({
                legajo: "",
                nombre: "",
                especialidad: "",
                correo: ""
            })

            onDocenteCreado()

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
        <Box
            component="section"
            sx={{
                width: "calc(100% - 32px)",
                maxWidth: 820,
                mx: "auto",
                mt: { xs: 3, sm: 5 },
                p: { xs: 2.5, sm: 4 },
                bgcolor: "background.paper",
                color: "text.primary",
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                boxShadow: "0 12px 32px rgba(30, 45, 60, 0.07)"
            }}
        >
            <Box
                component="h2"
                sx={{
                    m: 0,
                    mb: 3,
                    fontSize: { xs: "1.35rem", sm: "1.6rem" },
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "text.primary"
                }}
            >
                {docenteEditar ? "Editando Docente" : "Nuevo Docente"}
            </Box>
            <Box
                component="form"
                onSubmit={guardar}
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                    gap: { xs: 2, sm: 2.5 },
                    "& label": {
                        display: "block",
                        mb: 0.75,
                        color: "text.secondary",
                        fontSize: "0.9rem",
                        fontWeight: 600
                    },
                    "& input": {
                        boxSizing: "border-box",
                        width: "100%",
                        minHeight: 46,
                        px: 1.5,
                        py: 1,
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 1.5,
                        bgcolor: "background.default",
                        color: "text.primary",
                        font: "inherit",
                        fontSize: "1rem",
                        transition: "border-color 160ms ease, box-shadow 160ms ease",
                        "&:focus": {
                            outline: "none",
                            borderColor: "primary.main",
                            boxShadow: (theme) => `0 0 0 3px ${theme.palette.action.focus}`
                        }
                    },
                    "& > button": {
                        minHeight: 44,
                        px: 2.5,
                        border: 0,
                        borderRadius: 1.5,
                        font: "inherit",
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "background-color 160ms ease, transform 160ms ease",
                        "&:hover:not(:disabled)": { transform: "translateY(-1px)" },
                        "&:disabled": { cursor: "wait", opacity: 0.7 }
                    },
                    "& > button[type='submit']": {
                        gridColumn: "1 / -1",
                        mt: 0.5,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        "&:hover:not(:disabled)": { bgcolor: "primary.dark" }
                    },
                    "& > button[type='button']": {
                        gridColumn: "1 / -1",
                        mt: -1,
                        bgcolor: "action.hover",
                        color: "text.primary"
                    },
                    "& [role='alert']": {
                        gridColumn: "1 / -1",
                        m: 0,
                        color: "error.main",
                        fontSize: "0.9rem"
                    }
                }}
            >
                <Box>
                    <label htmlFor="legajo">Legajo</label>
                    <input
                        id="legajo"
                        name="legajo"
                        value={formulario.legajo}
                        onChange={manejarCambio}
                        required
                    />
                </Box>
                <Box>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        ref={nombreInputRef}
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        required
                    />
                </Box>
                <Box>
                    <label htmlFor="especialidad">Especialidad</label>
                    <input
                        id="especialidad"
                        name="especialidad"
                        value={formulario.especialidad}
                        onChange={manejarCambio}
                        required
                    />
                </Box>
                <Box>
                    <label htmlFor="correo">Correo</label>
                    <input
                        id="correo"
                        name="correo"
                        value={formulario.correo}
                        onChange={manejarCambio}
                        required
                    />
                </Box>
                <button type="submit" disabled={guardando}>
                    {guardando ? "Guardando..." : docenteEditar ? "Guardar Cambios" : "Guardar"}
                </button>
                {docenteEditar && (
                    <button type="button" onClick={cancelar} disabled={guardando}>
                        Cancelar Edición
                    </button>
                )}
                {error && <Box component="p" role="alert">{error}</Box>}
            </Box>
        </Box>
    )
}
export default FormularioDocente