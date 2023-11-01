import { Router } from "express";
import {registro, actualizar, eliminar, buscar} from '../Controllers/devolucionController.js'
const rutasDevoluciones = Router();

rutasDevoluciones.post('/registrodevoluciones', registro);
rutasDevoluciones.put('/actualizardevoluciones/:id', actualizar);
rutasDevoluciones.delete('/eliminardevoluciones/:id', eliminar);
rutasDevoluciones.get('/buscardevoluciones/:id', buscar);

export default rutasDevoluciones;