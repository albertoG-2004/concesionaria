import express from 'express';
import { conn } from './connection/connection.js';
import rutasVehiculo from './Routes/vehiculoRoute.js';
import rutasCliente from './Routes/clienteRoute.js';

const app = express();

app.use(express.json());
app.use("/concesionaria", rutasVehiculo);
app.use("/concesionaria", rutasCliente);

conn();

app.listen(3001, ()=>{
    console.log("El servidor esta corriendo en el puerto 3001");
})