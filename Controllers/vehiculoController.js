import Vehiculo from '../Models/vehiculosModel.js';

export const registro = async (req, res) => {
    const { modelo, anio, color, precio, estado } = req.body;

    try {
        const newVehiculo = new Vehiculo({
            modelo,
            anio,
            color,
            precio,
            estado
        });
        newVehiculo.save();
        res.json({
            newVehiculo
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al registrar el vehiculo"});
        console.log(error);
    }
}

export const actualizar = async (req, res) =>{
    const id = req.params.id;
    const { modelo, anio, color, precio } = req.body;

    try {
        Vehiculo.updateMany({
            _id:id
        },
        {
            $set:{
                modelo,
                anio,
                color,
                precio
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al actualizar el vehiculo"});
        console.log(error);
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params.id;

    try {
        const info = await Vehiculo.findByIdAndDelete(id)
        res.send("SE ha eliminado el vehiculo");
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al eliminar el vehiculo"});
        console.log(error);
    }
}

export const buscar = async (req, res) =>{
    const modelo = req.params.modelo;
    
    try {
        Vehiculo.find({
            modelo
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema al buscar el vehiculo"});
        console.log(error);
    }
}

export const buscarTodos = async (req, res) =>{
    try {
        Vehiculo.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema buscando los vehiculos"});
        console.log(error);
    }
}