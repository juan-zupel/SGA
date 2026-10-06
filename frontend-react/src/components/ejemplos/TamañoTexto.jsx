import { useState } from "react";

function TamañoTexto() {
    const [texto, setTexto] = useState("40px");
    return (
        <>
            <h1 style={{ fontSize: texto }}>"¡Bienvenidos a Programación 4!"</h1>
            <br />
            <div style={{display: "flex", justifyContent: "center", gap: "15px"}}>
                <button onClick={() => {
                    setTexto("20px")
                }} style={{height: "25px", width: "80px"}}>Pequeño</button>
                <button onClick={() => {
                    setTexto("40px")
                }} style={{height: "25px", width: "80px"}}>Mediano</button>
                <button onClick={() => {
                    setTexto("60px")
                }} style={{height: "25px", width: "80px"}}>Grande</button>
            </div>
        </>
    )
}
export default TamañoTexto