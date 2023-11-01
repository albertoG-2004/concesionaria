import Cliente from "../Models/clienteModel.js";

export const registro = async (req, res) =>{
    const { nombre, apellidoPaterno, apellidoMaterno, edad } = req.body;

    try {
        const newCliente = new Cliente({
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            edad
        })
        newCliente.save();
        res.json({
            newCliente
        })
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema registrando al cliente"});
        console.log(error);
    }   
}

export const actualizar = async (req, res) =>{
    const id = req.params.id;
    const { edad } = req.body;

    try {
        Cliente.updateOne({
            _id: id
        },
        {
            $set:{
                edad
            },
        })
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema actualizando la edad del cliente"});
        console.log(error);
    }
}

export const eliminar = async (req, res) =>{
    const id = req.params.id;
    
    try {
        const info = await Cliente.findByIdAndDelete(id)
        // res.json(info);
        res.send("Se elimino el cliente");
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema eliminando al cliente"});
        console.log(error);
    }
}

export const buscar = async (req, res) =>{
    const id = req.params.id;

    try {
        Cliente.findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema buscando al cliente"});
        console.log(error);
    }
}

export const buscarVarios = async (req, res) =>{
    try {
        Cliente.find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json ({message:error}));
    } catch (error) {
        res.status(500).json({error: "Ha surgido un problema buscando los clientes"});
        console.log(error);
    }
}