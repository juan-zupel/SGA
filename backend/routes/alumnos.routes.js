// Inicializa express
const express = require("express");

// Trae todas las funciones desde "alumnos.controller"
const { obtenerAlumnos, obtenerAlumnoUnico, crearAlumno, modificarAlumno, eliminarAlumno } = require("../controllers/alumnos.controller");

// Crea un "mini-router"
const routerA = express.Router();

// Asigna que acciones se llevaran a cabo al llamar a ciertos metodos en ciertas rutas 
// (Ej: si se hace una solicitud "GET" a esta ruta se hace esto)
routerA.get("/", obtenerAlumnos);
routerA.get("/:id", obtenerAlumnoUnico);
routerA.post("/", crearAlumno),
routerA.put("/:id", modificarAlumno);
routerA.delete("/:id", eliminarAlumno);

// Se exportan las acciones asignadas a cada
module.exports = routerA