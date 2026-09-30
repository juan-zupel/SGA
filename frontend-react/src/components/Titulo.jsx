function Titulo({color, texto}) {
    return (
        <h1 style={{color: color}}> {texto} </h1>
    )
}

// function Titulo({props}) {
//     return (
//         <>
//         <h1 style={{color: props.color}}> {props.texto} </h1>
//         <br /><br /><br /><br /><br /><br /><br /><br /><br />
//         </>
//     )
// }
export default Titulo