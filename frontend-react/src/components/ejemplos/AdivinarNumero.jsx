import { useState } from "react";

function AdivinarNumero() {
    const [numUusario, setNumUusario] = useState("");
    const [color, setColor] = useState ("white");
    const [numGanador, setNumGanador] = useState("");
    const [jugadas, setJugadas] = useState(0);
    const [ganadas, setGanadas] = useState(0);
    const [perdidas, setPerdidas] = useState(0);
    
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
            setColor("green");
            setGanadas(ganadas + 1);
            setJugadas(jugadas + 1);
            return
        }else{
            setNumGanador(`Usted ha Perdido, el número era ${random}`);
            setColor("red");
            setPerdidas(perdidas + 1);
            setJugadas(jugadas + 1);
            return
        }
    }
    
    return(
        <>
            <h2>Adivina el Número</h2>
            <p style={{color: color}}>{numGanador}</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input type="number" value={numUusario} onChange={(e) => setNumUusario(e.target.value)}/>
                <button onClick={generarNumero}>Adivinar</button>
            </div>
            <div>
                <p>Partidas Jugadas: {jugadas}</p>
                <p>Partidas Ganadas: {ganadas}</p>
                <p>Partidas Perdidas: {perdidas}</p>
            </div>
        </>
    )
}
export default AdivinarNumero