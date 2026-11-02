// Inicializa express
const express = require("express");

// Trae todas las funciones desde "materias.controller"
const {obtenerMaterias, obtenerMateriaUnica, crearMateria, eliminarMateria, modificarMateria} = require("../controllers/materias.controller");

// Crea un "mini-router"
const routerM = express.Router();

// Asigna que acciones se llevaran a cabo al llamar a ciertos metodos en ciertas rutas 
// (Ej: si se hace una solicitud "GET" a esta ruta se hace esto)
routerM.get("/", obtenerMaterias);
routerM.get("/:id", obtenerMateriaUnica);
routerM.post("/", crearMateria),
routerM.put("/:id", modificarMateria);
routerM.delete("/:id", eliminarMateria);

// Se exportan las acciones asignadas a cada
module.exports = routerM