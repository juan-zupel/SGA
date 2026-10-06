import { useState } from "react"

function FormularioAlumno() {

    const [legajo, setLegajo] = useState("");
    const [nombre, setNombre] = useState("");
    const [carrera, setCarrera] = useState ("");
    const [correo, setCorreo] = useState("");


    function guardar(e) {
        e.preventDefault()

        console.log(nombre);
        console.log(correo);
    }

    return(
        <>
            <form onSubmit={guardar} style={{display: "flex",flexDirection: "column", marginRight: "30%",  marginLeft: "30%", gap: "5px"}}>
                
                <label>Legajo</label>
                <input value={legajo}  onChange={(e) => {
                    setLegajo(e.target.value);
                }} st/>
                
                <label>Nombre</label>
                <input value={nombre}  onChange={(e) => {
                    setNombre(e.target.value);
                }} st/>
                
                <label>Carrera</label>
                <input value={carrera}  onChange={(e) => {
                    setCarrera(e.target.value);
                }} st/>
                
                <label>Correo</label>
                <input value={correo}  onChange={(e) => {
                    setCorreo(e.target.value)
                }} st/>
                <br />
                <button type="submit" style={{height: "30px", marginRight: "30%", marginLeft: "30%"}}>Guardar</button>
            </form>
            <h3>Legajo: {legajo}</h3>
            <h3>Nombre: {nombre}</h3>
            <h3>Carrera: {carrera}</h3>
            <h3>Correo: {correo}</h3>
        </>
    );
}
export default FormularioAlumno