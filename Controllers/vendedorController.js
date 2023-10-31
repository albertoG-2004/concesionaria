import Vendedor from '../Models/vendorModel.js';

export const registro = async(req, res) =>{
    const { noVendedor, nombre, apellidoPaterno, apellidoMaterno, turno } = req.body;

    try {
        const newVendedor = new Vendedor({
            noVendedor,
            nombre,
            apellidoPaterno,
            apellidoMaterno, 
            turno 
        });
        newVendedor.save();
        res.json({
            newVendedor
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al registrar al vendedor"});
    }
}

export const actualizar = async(req, res) =>{
    const id = req.params.id;
    const { turno } = req.body;

    try {
        Vendedor.updateOne({
            _id: id
        },
        {
            $set:{
                turno
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al actuzalizar el turno"});
    }
}

export const eliminar = async (req, res) =>{
    const no = req.params.noVendedor;

    try {
        const info = await Vendedor.findOneAndDelete({
            noVendedor: no
        })
        res.json(info);
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar al vendedor"});
    }
}

export const buscar = async (req, res) =>{
    const noVendedor = req.params.noVendedor;

    try {
        Vendedor.findOne({
            noVendedor
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar al vendedor"});
    }
}