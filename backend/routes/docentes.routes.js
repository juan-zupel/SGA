// Inicializa express
const express = require("express");

// Trae todas las funciones desde "docentes.controller"
const {obtenerDocentes, obtenerDocenteUnico, crearDocente, eliminarDocente, modificarDocente} = require("../controllers/docentes.controller");

// Crea un "mini-router"
const routerD = express.Router();

// Asigna que acciones se llevaran a cabo al llamar a ciertos metodos en ciertas rutas 
// (Ej: si se hace una solicitud "GET" a esta ruta se hace esto)
routerD.get("/", obtenerDocentes);
routerD.get("/:id", obtenerDocenteUnico);
routerD.post("/", crearDocente),
routerD.put("/:id", modificarDocente);
routerD.delete("/:id", eliminarDocente);

// Se exportan las acciones asignadas a cada
module.exports = routerD