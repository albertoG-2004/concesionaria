import mongoose from "mongoose";

const historialSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    venta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venta'
    }
});

export default mongoose.model('Historial', historialSchema);