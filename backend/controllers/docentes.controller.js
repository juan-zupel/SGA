// Define que se usara el modelo establecido en la carpeta establecida
const Docente = require("../models/Docente");

// Se crean las funciones correspondientes
async function obtenerDocentes(req, res) {
    const docente = await Docente.find();
    return res.json(docente);
}

async function obtenerDocenteUnico(req, res) {
    const docente = await Docente.findOne({legajo: Number(req.params.id)});
    if (!docente) {
        return res.status(400).json({
            mensaje: "Docente no encontrado"
        });
    };
    return res.json(docente);
}

async function crearDocente(req, res) {
    const {legajo, nombre, especialidad, correo} = req.body;
    if (!legajo || !nombre || !especialidad || !correo) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    };
    if (typeof legajo !== "number") {
        return res.status(400).json({
            mensaje: "El legajo debe ser de tipo numerico"
        });
    };
    if (typeof nombre !== "string") {
        return res.status(400).json({
            mensaje: "El nombre debe ser un string"
        });
    };
    const existente = await Docente.findOne({legajo})
    if (existente) {
        return res.status(400).json({
            mensaje: "Docente ya existente"
        });
    };
    const nuevoDocente = await Docente.create({legajo, nombre, especialidad, correo});
    return res.json(nuevoDocente);
}

async function eliminarDocente(req, res) {
    const docente = await Docente.findOneAndDelete({legajo: Number(req.params.id)});
    if (!docente) {
        return res.status(400).json({
            mensaje: "Docente inexistente"
        });
    };
    return res.status(200).json({
        mensaje: "Docente eliminado con exito"
    });
}

async function modificarDocente(req, res) {
    const {nombre, especialidad, correo} = req.body;
    const docente = await Docente.findOneAndUpdate(
        {legajo: Number(req.params.id)}, 
        {nombre, especialidad, correo}, 
        {returnDocument: "after"}
    );
    if (!docente) {
        return res.status(400).json({
            mensaje: "Docente inexistente"
        });
    };
    return res.json(docente);
}

// Se exportan todas las funciones creadas
module.exports = { obtenerDocentes, obtenerDocenteUnico, crearDocente, eliminarDocente, modificarDocente }