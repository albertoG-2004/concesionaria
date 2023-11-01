import { Router } from "express";
import { registro, actualizar, eliminar, buscar, buscarTodos } from "../Controllers/vehiculoController.js";

const rutasVehiculo = Router();

rutasVehiculo.post('/registrovehiculo', registro);
rutasVehiculo.put('/actualizarvehiculo/:id', actualizar);
rutasVehiculo.delete('/eliminarvehiculo/:id', eliminar);
rutasVehiculo.get('/buscarmodelo/:modelo', buscar);
rutasVehiculo.get('/TodosVehiculo',buscarTodos)

export default rutasVehiculo;