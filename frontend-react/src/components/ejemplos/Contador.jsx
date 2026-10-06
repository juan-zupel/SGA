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
        <div style={{display: "table-column", justifyContent: "center"}}>
        <button onClick={mostrarOcultar} style={{height: "25px", width: "120px"}}>Mostrar/Ocultar</button>
        {mostrar && <p>BUUU</p>}
        </div>
        </>
    )
}
export default Contador