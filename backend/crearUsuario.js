const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const Usuario = require("./models/Usuario");

async function crearUsuario() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const email = "ramonramsesIV@gmail.com";
        const password = "ramseselmascapito_:P";

        const hash = await bcrypt.hash(password, 10)

        const usuario = new Usuario({
            nombre: "Ramon Ramses", 
            email: email, 
            password: hash, 
            rol: "admin"
        });

        await usuario.save();

        console.log("Usuario creado correctamente");
        console.log("Email: ", email);

    }catch(error) {
        console.error("Error al crear el usuario: ", error.mesage);
    }finally {
        await mongoose.disconnect();
    }
}

crearUsuario()