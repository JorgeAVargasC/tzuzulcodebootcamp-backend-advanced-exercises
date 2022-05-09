const mongoose = require('mongoose');

async function connection() {
    await mongoose.connect('mongodb://mongo:27017/myDB');
    console.log('Conectado a la base de datos');
}

module.exports = {mongoose, connection};