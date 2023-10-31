import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    edad: Number,
});

export default mongoose.model('Cliente', clienteSchema);