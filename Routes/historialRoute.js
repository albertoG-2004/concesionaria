import { Router } from "express";
import {registro,actualizarHistorial,eliminarHistorial,buscarHistorial,Historial} from '../Controllers/hitorialController.js';

const rutasHistorial = Router();

rutasHistorial.post('/registro', registro);
rutasHistorial.put('/actualizarHistorial/:id', actualizarHistorial);
rutasHistorial.delete('/eliminarHistorial/:id', eliminarHistorial);
rutasHistorial.get('/buscarHistorial/:id', buscarHistorial);
rutasHistorial.get('/Historial', Historial);

export default rutasHistorial;