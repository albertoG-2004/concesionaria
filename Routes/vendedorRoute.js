import { Router } from "express";
import { registro, actualizar, eliminar, buscar, buscarVendedores } from "../Controllers/vendedorController.js";

const rutasVendedor = Router();

rutasVendedor.post('/registrovendedor', registro);
rutasVendedor.put('/actualizarturno/:id', actualizar);
rutasVendedor.delete('/eliminarvendedor/:noVendedor', eliminar);
rutasVendedor.get('/buscarvendedor/:noVendedor', buscar);
rutasVendedor.get('/TodosVendedores', buscarVendedores);

export default rutasVendedor;