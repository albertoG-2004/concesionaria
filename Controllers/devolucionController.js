import Devolucion from '../Models/DevolucionModel.js'

 export const registro = async (req, res) =>{
    const {cliente, noVendedor,vehiculo,pago}=req.body;
    try {
        const newDevolucion = new Devolucion({
            cliente, 
            noVendedor,
            vehiculo,
            pago
        });
        newDevolucion.save();
        res.json({
            newDevolucion
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al registrar la devolución"});
        console.log(error);
    }
 }

 export const actualizar = async(req, res) =>{
    const id = req.params.id;
    const { vehiculo} = req.body;

    try {
        Devolucion.updateOne({
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
        res.status(500).json({error: "Ha surgido un problema al actuzalizar la devolucion"});
        console.log(error);
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params.id;

    try {
        const info = await Devolucion.findByIdAndDelete({
            _id: id
        })
        res.send("Devolución eliminada");
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar la devolucion"});
        console.log(error);
    }
}

export const buscar = async (req, res) =>{
    const id = req.params.id;

    try {
        Devolucion.findById({
            _id:id
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar la devolucion"});
        console.log(error);
    }
}

export const TodasDevoluciones = async (req, res) =>{
    try {
        Devolucion.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar las devoluciones"});
        console.log(error);
    }
}