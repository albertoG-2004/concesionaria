import mongoose from "mongoose";

const pagoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    noVendedor: {
        type: mongoose.Schema.Types.Number,
        ref: 'Vendedor'
    },
    monto: Number,
    estatus: String
});

export default mongoose.model('Pago', pagoSchema);