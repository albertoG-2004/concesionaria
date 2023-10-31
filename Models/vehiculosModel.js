import mongoose from 'mongoose';

const vehiculoSchema = new mongoose.Schema({
    modelo: String,
    anio: Number,
    color: String,
    precio: Number,
    estado: String
});

export default mongoose.model('Vehiculo', vehiculoSchema);