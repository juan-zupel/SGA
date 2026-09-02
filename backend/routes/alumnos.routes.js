const express = require("express");
// const alumnosController = require("../controllers/alumnos.controller");       // anotar
const { obtenerAlumnos, obtenerAlumnoUnico, crearAlumno, modificarAlumno, eliminarAlumno } = require("../controllers/alumnos.controller");
const routerA = express.Router();       // anota

routerA.get("/", obtenerAlumnos);

routerA.get("/:id", obtenerAlumnoUnico);

routerA.post("/", crearAlumno),

routerA.put("/:id", modificarAlumno);

routerA.delete("/:id", eliminarAlumno);

module.exports = routerA