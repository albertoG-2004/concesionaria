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
        newPago.save();
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
        Pago.updateOne({
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
        const info = await Pago.findByIdAndDelete(id)
        res.send("Se limino el pago del cliente exitosamente");
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar el pago"});
    }
}

export const buscar = async (req, res) =>{
    const id = req.params.id;
    
    try {
        Pago.find({
           _id:id
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar el pago"});
    }
}

export const TodosPagos = async (req, res) =>{
    try {
        Pago.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar el pago"});
    }
}