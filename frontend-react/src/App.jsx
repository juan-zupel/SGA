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
    <TarjetaAlumno nombre="Ana López" carrera="Programación" edad="3"/>
    <TarjetaAlumno nombre="Raúl Centurion" carrera="Cocina" edad="74"/>
    <TarjetaAlumno nombre="Arian Ulloa" carrera="Catador de Pingos" edad="13 (sin barba)"/>
    <Footer/>
    </>
  )
}
export default App