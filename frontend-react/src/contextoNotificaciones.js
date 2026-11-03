import { createContext, useContext } from "react";

export const NotificacionesContext = createContext(null);

export function useNotificaciones() {
    const context = useContext(NotificacionesContext);

    if (!context) {
        throw new Error("useNotificaciones debe usarse dentro de NotificacionesProvider");
    }

    return context;
}
