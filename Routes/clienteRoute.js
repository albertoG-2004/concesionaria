import { Router } from "express";
import { registro, actualizar, eliminar, buscar } from "../Controllers/clienteController.js";

const rutasCliente = Router();

rutasCliente.post('/registrocliente', registro);
rutasCliente.put('/actualizarcliente/:id', actualizar);
rutasCliente.delete('/eliminarcliente/:id', eliminar);
rutasCliente.get('/buscarcliente/:id', buscar);

export default rutasCliente;