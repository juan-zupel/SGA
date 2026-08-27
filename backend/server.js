const express = require("express");
const app = express();

const alumnos = [
    {
        id: 1,
        nombre: "Ana",
        carrera: "Programación"
    },
    {
        id: 2,
        nombre: "Saul",
        carrera: "Sistemas"
    },
    {
        id: Date.now(),
        nombre: "Angel",
        carrera: "Negro"
    },
    {
        id: 4,
        nombre: "Arian",
        carrera: "Está re Cagado"
    },
    {
        id: 5,
        nombre: "Julio",
        carrera: "Arte Nudista"
    }
];

app.get("/alumnos", (req, res) => {
    res.json(alumnos);
});

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find( a => a.id === id);
    res.json(alumno);
});

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
});