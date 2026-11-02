// Se inicializa mongoose
const mongoose = require("mongoose");

// Se crea un "schema" de mongoose con la estructura del modelo que se desea crear
const materiaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        unique: true,
    },
    nombre: String, 
    descripcion: String,
    cargaHoraria: Number, 
    estado: Boolean
},
{
    versionKey: false
})

// Se crea el modelo usando el schema previamente creado
const Materia = mongoose.model("Materia", materiaSchema);

// Se exporta el modelo creado
module.exports = Materia;