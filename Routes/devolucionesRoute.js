import { Router } from "express";
import {registro, actualizar, eliminar, buscar, TodasDevoluciones} from '../Controllers/devolucionController.js'
const rutasDevoluciones = Router();

rutasDevoluciones.post('/registrodevoluciones', registro);
rutasDevoluciones.put('/actualizardevoluciones/:id', actualizar);
rutasDevoluciones.delete('/eliminardevoluciones/:id', eliminar);
rutasDevoluciones.get('/buscardevoluciones/:id', buscar);
rutasDevoluciones.get('/todasDevoluciones', TodasDevoluciones);

export default rutasDevoluciones;