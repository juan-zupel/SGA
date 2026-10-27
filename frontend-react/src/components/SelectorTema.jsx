import Box from "@mui/material/Box"
import { useColorScheme } from "@mui/material/styles"
import MaterialUISwitch from "./MaterualUISwitch"

function SelectorTema() {
    
    const {mode, setMode} = useColorScheme();

    if (!mode) {
        return null
    }

    const modoOscuro = mode === "dark"

    function cambiarModo(event) {
        setMode(event.target.checked ? "dark" : "light")
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", m: 0, width: "auto"}}>
            <MaterialUISwitch checked={modoOscuro} onChange={cambiarModo} inputProps={{"aria-laber": "Cambiar a modo claro/oscuro"}} />
        </Box>
    )
}
export default SelectorTema