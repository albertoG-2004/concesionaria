import mongoose from "mongoose";

const devolucionSchema = new mongoose.model({
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    noVendedor: {
        type: mongoose.Schema.Types.Number,
        ref: 'Vendedor'
    },
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculo'
    },
    pago: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pago'
    }
});

export default mongoose.model('Devolucion', devolucionSchema);