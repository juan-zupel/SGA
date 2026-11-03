// Define que se usara el modelo establecido en la carpeta establecida
const Materia = require("../models/Materia");

// Se crean las funciones correspondientes
async function obtenerMaterias(req, res) {
    const materia = await Materia.find();
    return res.json(materia);
}

async function obtenerMateriaUnica(req, res) {
    const materia = await Materia.findOne({codigo: String(req.params.id)});
    if (!materia) {
        return res.status(400).json({
            mensaje: "Materia no encontrada"
        });
    };
    return res.json(materia);
}

async function crearMateria(req, res) {
    const existente = await Materia.findOne({codigo: req.body.codigo});
    const {codigo, nombre, descripcion, cargaHoraria, estado} = req.body;
    if (!(codigo.trim()) || !(nombre.trim()) || !(descripcion.trim()) || !(cargaHoraria) || !estado) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    };
    if (typeof codigo !== "string") {
        return res.status(400).json({
            mensaje: "El codigo debe ser de tipo String"
        });
    };
    if (typeof nombre !== "string") {
        return res.status(400).json({
            mensaje: "El nombre debe ser de tipo string"
        });
    };
    if (typeof descripcion !== "string") {
        return res.status(400).json({
            mensaje: "La descripción debe ser de tipo string"
        });
    };
    if (typeof cargaHoraria !== "number") {
        return res.status(400).json({
            mensaje: "Porfavor ingrese un número entero en el campo 'Carga Horaria'"
        })
    };
    if (cargaHoraria <= 0) {
        return res.status(400).json({
            mensaje: "La materia debe tener una carga horaria mayor a 0 hs"
        })
    };
    if (existente) {
        return res.status(400).json({
            mensaje: "Materia ya existente"
        });
    };
    const nuevaMateria = await Materia.create({codigo, nombre, descripcion, cargaHoraria, estado});
    return res.json(nuevaMateria);
}

async function eliminarMateria(req, res) {
    const materia = await Materia.findOneAndDelete({codigo: String(req.params.id)});
    if (!materia) {
        return res.status(400).json({
            mensaje: "Materia inexistente"
        });
    };
    return res.status(200).json({
        mensaje: "Materia eliminada con exito"
    });
}

async function modificarMateria(req, res) {
    const {nombre, descripcion, cargaHoraria, estado} = req.body;
    const materia = await Materia.findOneAndUpdate(
        {codigo: String(req.params.id)}, 
        {nombre, descripcion, cargaHoraria, estado}, 
        {returnDocument: "after"}
    );
    if (!materia) {
        return res.status(400).json({
            mensaje: "Materia inexistente"
        });
    };
    return res.json(materia);
}

// Se exportan todas las funciones creadas
module.exports = { obtenerMaterias, obtenerMateriaUnica, crearMateria, eliminarMateria, modificarMateria }