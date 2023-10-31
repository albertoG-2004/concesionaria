import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema({
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculo'
    },
    noVendedor: {
        type: mongoose.Schema.Types.Number,
        ref: 'Vendedor'
    },
    pago: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pago'
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    }
});

export default mongoose.model('Venta', ventaSchema);