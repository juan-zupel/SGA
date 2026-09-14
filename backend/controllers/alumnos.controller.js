const Alumno = require("../models/Alumno");

async function obtenerAlumnos(req, res) {
    const alumnos = await Alumno.find();
    res.json(alumnos);
};

async function obtenerAlumnoUnico(req, res) {
    const alumno = await Alumno.findOne({legajo: Number(req.params.id)});      // anotar
    if (!alumno) {
        return res.status(400).json({
            mensaje: "Alumno no encontrado"
        });
    };
    res.json(alumno);
};

async function crearAlumno(req, res) {
    const {legajo, nombre, carrera, correo} = req.body;        // anotar
    if(!legajo || !nombre || !carrera || !correo) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    };
    if (typeof nombre !== "string") {
        return res.status(400).json({
            mensaje: "El nombre no debe contener números"
        });
    }
    const nuevoAlumno = await Alumno.create({legajo, nombre, carrera, correo});
    res.json(nuevoAlumno);
};

async function modificarAlumno(req, res) {
    const alumno = await Alumno.findOneAndUpdate({legajo: Number(req.params.id)}, req.body, {returnDocument: "after"})
    if (!alumno) {
        return res.status(400).json({
            mensaje: "Alumo no encontrado"
        });
    };
    res.json(alumno);
};

async function eliminarAlumno(req, res) {
    const alumno = await Alumno.findOneAndDelete({legajo: Number(req.params.id)})
    if (!alumno) {
        return res.status(400).json({
            mensaje: "Alumno no existente"
        });
    };
    res.json({mensaje: "Alumno Eliminado Correctamente"});
};

module.exports = { obtenerAlumnos, obtenerAlumnoUnico, crearAlumno, modificarAlumno, eliminarAlumno };