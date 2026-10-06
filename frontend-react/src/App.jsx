import AdivinarNumero from "./components/ejemplos/AdivinarNumero"
import CambiarTitulo from "./components/ejemplos/CambiarTitulo"
import Contador from "./components/ejemplos/Contador"
import Mensaje from "./components/ejemplos/Mensaje"
import TamañoTexto from "./components/ejemplos/TamañoTexto"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import TarjetaAlumno from "./components/TarjetaAlumno"
import Titulo from "./components/Titulo"

function App() 
{
  return (
    <>
    <Navbar/>
    <Titulo texto = "Sistema de Gestión Académica" color = "blueviolet"/>
    <br /><br />
    <h2>Administración de Alumnos</h2>
    <br />
    <TarjetaAlumno nombre="Ana López" carrera="Programación" edad="Edad: 3"/>
    <TarjetaAlumno nombre="Raúl Centurion" carrera="Cocina" edad="Edad: 74"/>
    <TarjetaAlumno nombre="Arian Ulloa" carrera="Catador de Pingos" edad="Edad: 13 (sin barba)"/>
    <br /><br /><br />
    <Contador/>
    <br /><br /><br />
    <CambiarTitulo/>
    <br /><br /><br />
    <AdivinarNumero/>
    <br /><br /><br />
    <Mensaje/>
    <br /><br /><br />
    <TamañoTexto/>
    <Footer/>
    </>
  )
}
export default App