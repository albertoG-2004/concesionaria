import mongoose from "mongoose";

const vendedorSchema = new mongoose.Schema({
    noVendedor: Number,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    turno: String
});

export default mongoose.model('Vendedor', vendedorSchema);