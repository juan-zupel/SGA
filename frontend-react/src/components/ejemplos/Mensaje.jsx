import { useState } from "react";


function Mensaje() {
    const [mensaje, setMensaje] = useState("Hola, Alumno");
    
    function cambiarMensaje() {
        setMensaje(mensaje === "Hola, Alumno"
            ? "Bienvenido a Programacion 4"
            : "Hola, Alumno"
        )
    }
    
    return(
        <>
        <h1>{mensaje}</h1>
        <br />
        <div style={{display: "flex", justifyContent: "center"}}>
        <button onClick={cambiarMensaje} 
        style={{width: "120px", height:"30px"}}>Cambiar</button>
        </div>
        </>
    );
}
export default Mensaje;