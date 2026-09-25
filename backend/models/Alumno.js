// Se inicializa mongoose
const mongoose = require("mongoose");

// Se crea un "schema" de mongoose con la estructura del modelo que se desea crear
const alumnoSchema = new mongoose.Schema({
    legajo: {
        type: Number,
        unique: true
    },
    nombre: String, 
    carrera: String, 
    correo: String
}, 
{
    versionKey: false
})

// Se crea el modelo usando el schema previamente creado
const Alumno = mongoose.model("Alumno", alumnoSchema);

// Se exporta el modelo creado
module.exports = Alumno;