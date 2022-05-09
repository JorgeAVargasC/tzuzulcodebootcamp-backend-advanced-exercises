const express = require('express');
const {connection} = require('./config/database');

const userModel = require('./models/User');

const app = express();

// Mongoose
connection();

app.get("/", async (req,res)=>{
    const User = userModel.find();
    return res.json(User);
});

app.get("/contacto", (req, res) => {

    return res.json({
        nombre: "Jorge",
        correo: "javargas1209@gmail.com",
    })
});

app.listen(4000, () => {
    console.log("Escuchando en http://localhost:4000");
});