const express = require('express');

const app = express();

// Mongoose
// Reto conectarse a la base de datos de mongodb
// uri: mongodb://<dbuser>:<dbpassword>@ds127983.mlab.com:27983/heroku_q8qjqjqj

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
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