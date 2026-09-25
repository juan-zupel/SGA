// Se inicializa "dotenv", una erramienta que permite usar las variables definidas en el archivo .env
require("dotenv").config();

// Se inicializa express en una variable ("express") y luego se crea la variable que contiene el servidor ("app")
const express = require("express");
const app = express();

// Se inicializa "cors" y se lo usa dentro del servidor (cors en una erramienta de node que permite acceso al servidor desde el frontend)
const cors = require("cors");
app.use(cors());

// Se define que el lenguaje utilizado dentro del servidor será JSON
app.use(express.json());

// Se crean variables que contienen las acciones asignadas en los archivos "controladores" y luego se los asigna al servidor
const alumnosRoutes = require("./routes/alumnos.routes");
app.use("/alumnos", alumnosRoutes);
const docentesRoutes = require("./routes/docentes.routes");
app.use("/docentes", docentesRoutes);

// Se guarda en una constante la funcion encargada de hacer la conexion con la base de datos
const conectarBD = require("./config/database");

// Se guarda en una constante el puerto en el que corre el servidor
const PORT = process.env.PORT;

// Se ejecuta la funcion encargada de hacer la conexion con la base de datos
conectarBD();

// Creo un middleware
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });

// Se hace que el servidor responda a las solicitudes hechas en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor funcionando en ${PORT}`)
});
