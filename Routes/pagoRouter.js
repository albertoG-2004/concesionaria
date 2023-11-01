import { Router } from "express";
import {registro, actualizar, eliminar, buscar} from '../Controllers/pagoController'
const rutasPago = Router();

rutasPago.post('/registropago', registro);
rutasPago.put('/actualizarpago/:id', actualizar);
rutasPago.delete('/eliminarpago/:id', eliminar);
rutasPago.get('/buscarpago/:id', buscar);

export default rutasPago;