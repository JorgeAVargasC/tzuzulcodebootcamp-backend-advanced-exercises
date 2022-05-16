const mongoose = require("mongoose")

async function connection(){
    // const conn = await mongoose.connect("mongodb://mongo/myDB")
    const conn = await mongoose.connect("mongodb+srv://javargas:12345@cluster0.eapun.mongodb.net/myFirstDataBase?retryWrites=true&w=majority")
    console.log(conn)
    console.log("Connection established...")
}


module.exports = {mongoose,connection}