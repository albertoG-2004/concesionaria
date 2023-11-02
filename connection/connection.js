import mongoose from "mongoose";

export const conn = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1/Concesionaria")
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.log(error);
    }
}