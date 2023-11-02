import Historial from '../Models/historialModel.js';

export const registro = async (req, res) =>{
    const {venta, cliente}=req.body;
    try {
        const newHistorial = new Historial({
            venta,
            cliente
        });
        newHistorial.save();
        res.json({
            newHistorial
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al registrar el historial"});
    }
 }

 export const actualizarHistorial = async(req, res) =>{
    const id = req.params.id;
    const {cliente} = req.body;

    try {
        Historial.updateOne({
            _id: id
        },
        {
            $set:{
                cliente
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al actuzalizar el historial"});
    }
}

export const eliminarHistorial = async (req, res) =>{
    const id = req.params.id;

    try {
        const info = await Historial.findByIdAndDelete({
            _id: id
        })
        res.send("Historial eliminado");
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar el historial"});
    }
}

export const buscarHistorial = async (req, res) =>{
    const id = req.params.id;

    try {
        Historial.findById({
            _id:id
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar el historial"});
    }
}

export const TodoHistorial = async (req, res) =>{
    try {
        Historial.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar el historial"});
        console.log(error);
    }
}