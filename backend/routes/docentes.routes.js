const express = require("express");
const {obtenerDocentes, obtenerDocenteUnico, crearDocente, eliminarDocente, modificarDocente} = require("../controllers/docentes.controller");
const routerD = express.Router();

routerD.get("/", obtenerDocentes);

routerD.get("/:id", obtenerDocenteUnico);

routerD.post("/", crearDocente),

routerD.put("/:id", modificarDocente);

routerD.delete("/:id", eliminarDocente);

module.exports = routerD