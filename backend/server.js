const express = require("express");
const app = express();
app.use(express.json());
const alumnosRoutes = require("./routes/alumnos.routes");   // anotar
app.use("/alumnos", alumnosRoutes);                         // anotar

let alumnos = [
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

// Creo un middleware
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
});