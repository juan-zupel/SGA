const express = require("express");
const { obtenerAlumnos } = require("../controllers/alumnos.controller");
const routerA = express.Router();       // anota

routerA.get("/", obtenerAlumnos());

routerA.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find( a => a.id === id);
    res.json(alumno);
});

routerA.post("/", (req, res) => {
    const nuevoAlumno = req.body;
    alumnos.push(nuevoAlumno);
    res.json({mensaje: "Alumno Registrado Correctamente"});
}),

routerA.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.json({mensaje: "Alumno Actualizado Correctamente"});
});

routerA.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    alumnos = alumnos.filter(alumno => alumno.id !== id);
    res.json({mensaje: "Alumno Eliminado Correctamente"});
});

module.exports = routerA