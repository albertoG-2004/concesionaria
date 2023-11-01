import Venta from '../Models/ventaModel.js'

 export const registro = async (req, res) =>{
    const {vehiculo, noVendedor,pago,cliente}=req.body;
    try {
        const newVenta = new Venta({
            vehiculo,
            noVendedor,
            pago,
            cliente
        });
        newVenta.save();
        res.json({
            newVenta
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al registrar la venta"});
    }
 }

 export const actualizar = async(req, res) =>{
    const id = req.params.id;
    const { vehiculo} = req.body;

    try {
        Venta.updateOne({
            _id: id
        },
        {
            $set:{
                vehiculo
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al actuzalizar el vehiculo"});
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params.id;

    try {
        const info = await Venta.findByIdAndDelete({
            _id: id
        })
        res.json(info);
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar la venta"});
    }
}

export const buscar = async (req, res) =>{
    const id = req.params.id;

    try {
        Venta.findById({
            _id:id
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar al vehiculo"});
    }
}