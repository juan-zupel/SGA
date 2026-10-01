import { useState } from "react";

function Contador() {
    const[cont, setContador] = useState(0);
    const[mostrar, setMostrar] = useState(false);

    function incremento() {
        setContador(cont + 1);
    }

    function decremento() {
        if(cont > 0) {
            setContador(cont - 1);
        }
    }

    function mostrarOcultar() {
        setMostrar(!mostrar)
    }

    return(
        <>
        <h3>Contador: {cont}</h3>
        <div style={{display: "flex",justifyContent: "center", gap: "10px"}}>
            <button onClick={incremento}style={{width: "40px"}}>+</button>
            <button onClick={decremento}style={{width: "40px"}}>-</button>
        </div>
        <br />
        <button onClick={mostrarOcultar}>Mostrar/Ocultar</button>
        {mostrar && <p>Big Dick</p>}
        </>
    )
}
export default Contador