require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const alumnosRoutes = require("./routes/alumnos.routes");   // anotar
app.use("/alumnos", alumnosRoutes);                         // anotar

const docentesRoutes = require("./routes/docentes.routes");
app.use("/docentes", docentesRoutes);

const conectarBD = require("./config/database");

const PORT = process.env.PORT;

conectarBD();

// Creo un middleware
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });

app.listen(PORT, () => {
    console.log(`Servidor funcionando en ${PORT}`)
});
