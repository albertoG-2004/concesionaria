import Pago from '../Models/pagoModel.js';

export const registro = async (req, res) =>{
    const {cliente,noVendedor,monto,estatus}=req.body;
    try {
        const newPago = new Pago({
            cliente,
            noVendedor,
            monto,
            estatus
        });
        newVenta.save();
        res.json({
            newPago
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al registrar el pago"});
    }
 }

 export const actualizar = async(req, res) =>{
    const id = req.params.id;
    const {estatus} = req.body;

    try {
        Venta.updateOne({
            _id: id
        },
        {
            $set:{
                estatus
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al actuzalizar el estatus"});
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params.id;

    try {
        const info = await cliente.findByIdAndDelete(id)
        res.json(info);
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar el cliente"});
    }
}

export const buscar = async (req, res) =>{
    const id = req.params.id;
    
    try {
        cliente.find({
           _id:id
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al actualizar el cliente"});
    }
}