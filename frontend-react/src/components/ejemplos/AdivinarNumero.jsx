import { useState } from "react";

function AdivinarNumero() {
    const [numUusario, setNumUusario] = useState("");
    const [numGanador, setNumGanador] = useState("")
    
    function generarNumero() {
        const random = Math.floor(Math.random() * 10) + 1;
        const elegido = Number(numUusario);

        if(numUusario === "") {
            setNumGanador("Ingrese un número");
            return
        }
        if(elegido < 1 || elegido > 10) {
            setNumGanador("Ingrese un número entre 1 y 10");
            return
        }
        if(random === elegido) {
            setNumGanador(`Usted ha Ganado, el número era ${random}`);
            return
        }else{
            setNumGanador(`Usted ha Perdido, el número era ${random}`);
            return
        }

    }
    
    return(
        <>
            <h2>Adivina el Número</h2>
            <p>{numGanador}</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input type="number" value={numUusario} onChange={(e) => setNumUusario(e.target.value)}/>
                <button onClick={generarNumero}>Adivinar</button>
            </div>
        </>
    )
}
export default AdivinarNumero