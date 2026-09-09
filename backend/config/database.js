const mongoose = require("mongoose");

async function conectarBD() {
    try{
        await mongoose.connect("mongodb://localhost:27017/SGA");
        console.log("Base de datos conectada");
    }catch(error) {
        console.log("Error");
    }
}

module.exports = conectarBD;