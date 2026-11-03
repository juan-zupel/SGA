import { useCallback, useEffect, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import { NotificacionesContext } from "../contextoNotificaciones";

export function ConfirmarEliminacionDialog({ open, entidad, nombre, onCancelar, onConfirmar }) {
    return (
        <Dialog
            open={open}
            onClose={() => {}}
            disableEscapeKeyDown
            aria-labelledby="confirmar-eliminacion-titulo"
            aria-describedby="confirmar-eliminacion-descripcion"
            PaperProps={{
                sx: {
                    bgcolor: "background.paper",
                    color: "text.primary",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                    boxShadow: "0 16px 40px rgba(30, 45, 60, 0.2)"
                }
            }}
        >
            <DialogTitle id="confirmar-eliminacion-titulo" sx={{ fontWeight: 700 }}>
                Confirmar eliminación
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="confirmar-eliminacion-descripcion" sx={{ color: "text.secondary" }}>
                    ¿Seguro que quiere eliminar {entidad}
                    {nombre ? ` ${nombre}` : ""}?
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2.5 }}>
                <Button
                    onClick={onCancelar}
                    sx={{ color: "text.secondary", textTransform: "none", fontWeight: 700 }}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={onConfirmar}
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: 1.5, textTransform: "none", fontWeight: 700 }}
                >
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export function NotificacionesProvider({ children }) {
    const [notificacion, setNotificacion] = useState(null);
    const [abierta, setAbierta] = useState(false);
    const siguienteId = useRef(0);

    const notificar = useCallback((mensaje, severidad = "success") => {
        siguienteId.current += 1;
        setNotificacion({ id: siguienteId.current, mensaje, severidad });
        setAbierta(true);
    }, []);

    useEffect(() => {
        if (!notificacion || !abierta) {
            return undefined;
        }

        const temporizador = window.setTimeout(() => setAbierta(false), 2500);
        return () => window.clearTimeout(temporizador);
    }, [notificacion, abierta]);

    function cerrarNotificacion(_, motivo) {
        if (motivo !== "clickaway") {
            setAbierta(false);
        }
    }

    return (
        <NotificacionesContext.Provider value={{ notificar }}>
            {children}
            <Snackbar
                open={abierta}
                autoHideDuration={null}
                onClose={cerrarNotificacion}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                slots={{ transition: Fade }}
                slotProps={{
                    transition: {
                        onExited: () => {
                            if (notificacion && siguienteId.current === notificacion.id) {
                                setNotificacion(null);
                            }
                        }
                    }
                }}
                transitionDuration={{ enter: 200, exit: 1000 }}
                sx={{
                    width: { xs: "calc(100% - 32px)", sm: "min(420px, calc(100% - 48px))" },
                    "&.MuiSnackbar-anchorOriginTopRight": {
                        top: { xs: 16, sm: 24 },
                        right: { xs: 16, sm: 24 }
                    }
                }}
            >
                {notificacion && (
                    <Alert
                        severity={notificacion.severidad}
                        variant="outlined"
                        onClose={() => setAbierta(false)}
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            borderRadius: 2,
                            bgcolor: "background.paper",
                            color: "text.primary",
                            boxShadow: "0 12px 32px rgba(30, 45, 60, 0.16)"
                        }}
                    >
                        {notificacion.mensaje}
                    </Alert>
                )}
            </Snackbar>
        </NotificacionesContext.Provider>
    );
}
