import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
const API_DOCENTES = "http://localhost:3001/docentes";

export function ListaDocentes({ actualizar, onDocenteCreado, onEditarDocente }) {

    const [docentes, setDocentes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("")

    async function eliminarDocente(legajo) {
        const confirmar = window.confirm("¿Seguro que quiere eliminar el docente?");

        if (!confirmar) {
            return
        }

        try {
            
            const respuesta = await fetch(`${API_DOCENTES}/${legajo}`,
                { method: "DELETE" }
            );

            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar al docente.Estado HTTP: ${respuesta.status}`)
            };

            onDocenteCreado();

        } catch(error) {
            console.error("Error al eliminar: ", error);
            alert(error.message || "No se pudo eliminar al Docente");
        }
    }

    useEffect(() => {

        async function cargarDocentes() {

            setCargando(true);
            setError("");

            try {
                const respuesta = await fetch(API_DOCENTES);

                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista")
                }

                const datos = await respuesta.json();
                setDocentes(datos);
            } catch (error) {
                console.error("Error de conexión: ", error);
                setError("No se pudo cargar la lista de docentes")
            } finally {
                setCargando(false)
            }
        }
        cargarDocentes()

    }, [actualizar]);

    if (cargando) {
        return (
            <Box component="p" sx={{ mx: 2, my: 4, color: "text.secondary", textAlign: "center" }}>
                Cargando Docentes...
            </Box>
        )
    }
    if (error) {
        return (
            <Box component="p" role="alert" sx={{ mx: 2, my: 4, color: "error.main", textAlign: "center" }}>
                {error}
            </Box>
        )
    }

    return (
        <Box
            component="section"
            sx={{
                width: "calc(100% - 32px)",
                maxWidth: 900,
                mx: "auto",
                my: { xs: 3, sm: 5 },
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
                Docentes
            </Box>
            {docentes.length === 0
                ? (
                    <Box
                        component="p"
                        sx={{
                            m: 0,
                            py: 3,
                            color: "text.secondary",
                            textAlign: "center",
                            bgcolor: "action.hover",
                            borderRadius: 2
                        }}
                    >
                        No hay docentes registrados
                    </Box>
                )
                : (
                    <Box
                        component="ul"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "repeat(auto-fit, minmax(260px, 1fr))" },
                            gap: 2,
                            listStyle: "none",
                            p: 0,
                            m: 0
                        }}
                    >
                        {docentes.map(docente => (
                            <Box
                                component="li"
                                key={docente.legajo}
                                sx={{
                                    minWidth: 0,
                                    p: 2.25,
                                    border: 1,
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    bgcolor: "background.default"
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: "minmax(72px, auto) minmax(0, 1fr)",
                                        columnGap: 1.5,
                                        rowGap: 1,
                                        mb: 2
                                    }}
                                >
                                    {[
                                        ["Legajo", docente.legajo],
                                        ["Nombre", docente.nombre],
                                        ["Especialidad", docente.especialidad],
                                        ["Correo", docente.correo]
                                    ].map(([label, value]) => (
                                        <Box key={label} sx={{ display: "contents" }}>
                                            <Box
                                                component="span"
                                                sx={{ color: "text.secondary", fontSize: "0.85rem", fontWeight: 600 }}
                                            >
                                                {label}
                                            </Box>
                                            <Box
                                                component="span"
                                                sx={{
                                                    minWidth: 0,
                                                    color: "text.primary",
                                                    overflowWrap: "anywhere"
                                                }}
                                            >
                                                {value}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1,
                                        "& button": {
                                            flex: "1 1 100px",
                                            minHeight: 40,
                                            px: 1.5,
                                            border: 0,
                                            borderRadius: 1.5,
                                            font: "inherit",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            transition: "background-color 160ms ease, transform 160ms ease",
                                            "&:hover": { transform: "translateY(-1px)" }
                                        },
                                        "& button:first-of-type": {
                                            bgcolor: "primary.main",
                                            color: "primary.contrastText",
                                            "&:hover": { bgcolor: "primary.dark" }
                                        },
                                        "& button:last-of-type": {
                                            bgcolor: "action.hover",
                                            color: "text.primary"
                                        }
                                    }}
                                >
                                    <button type="button" onClick={() => onEditarDocente(docente)}>Editar</button>
                                    <button type="button" onClick={() => eliminarDocente(docente.legajo)}>Eliminar</button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )
            }
        </Box>
    );
}