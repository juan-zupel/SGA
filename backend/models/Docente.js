// Se inicializa mongoose
const mongoose = require("mongoose");

// Se crea un "schema" de mongoose con la estructura del modelo que se desea crear
const docenteSchema = new mongoose.Schema({
    legajo: {
        type: Number,
        unique: true
    },
    nombre: String, 
    especialidad: String, 
    correo: String
}, 
{
    versionKey: false
})

// Se crea el modelo usando el schema previamente creado
const Docente = mongoose.model("Docente", docenteSchema);

// Se exporta el modelo creado
module.exports = Docente;