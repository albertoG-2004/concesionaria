import { Router } from "express";
import {registro, actualizar, eliminar, buscar} from '../Controllers/ventaController.js'
const rutasVenta = Router();

rutasVenta.post('/registroventa', registro);
rutasVenta.put('/actualizarventa/:id', actualizar);
rutasVenta.delete('/eliminarventa/:id', eliminar);
rutasVenta.get('/buscarventa/:id', buscar);

export default rutasVenta;