// Se inicializa mongoose
const mongoose = require("mongoose");

// Se crea la funcion encargada de hacer la coneccion con la basa de datos e informar sobre el estado de la conexion (exitoso o erroneo)
async function conectarBD() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada");
    }catch(error) {
        console.log("Error");
    }
}

// Se exporta la unica funcion creada
module.exports = conectarBD;