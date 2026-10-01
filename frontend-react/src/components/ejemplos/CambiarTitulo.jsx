import { useState } from "react";

function CambiarTitulo() {
    
    const [titulo, setTitulo] = useState("Inicio");

    return(
        <>
            <h2>{titulo}</h2>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button onClick={() => {
                    if(titulo === "Alumnos") {
                        setTitulo("Inicio");
                    }else{
                        setTitulo("Alumnos");
                    }
                }}
            style={{height: "30px"}}>Alumnons</button>
                <button onClick={() => {
                    if (titulo === "Docentes") {
                        setTitulo("Inicio");
                    }else{
                        setTitulo("Docentes")
                    }
                    }}style={{height: "30px"}}>Docentes</button>
            </div>
        </>
    )
}
export default CambiarTitulo