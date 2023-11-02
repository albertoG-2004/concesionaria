import express from 'express';
import { conn } from './connection/connection.js';
import rutasVehiculo from './Routes/vehiculoRoute.js';
import rutasCliente from './Routes/clienteRoute.js';
import rutasVendedor from './Routes/vendedorRoute.js';
import rutasDevolucion from './Routes/devolucionesRoute.js';
import rutasVenta from './Routes/ventaRoute.js';
import rutasPago from './Routes/pagoRouter.js';
import rutasHistorial from './Routes/historialRoute.js';

const app = express();

app.use(express.json());
app.use("/concesionaria", rutasCliente);
app.use("/concesionaria", rutasDevolucion);
app.use("/concesionaria", rutasVehiculo);
app.use("/concesionaria", rutasVendedor);
app.use("/concesionaria", rutasVenta);
app.use("/concesionaria", rutasPago);
app.use("/concesionaria", rutasHistorial);

conn();

app.listen(3001, ()=>{
    console.log("El servidor esta corriendo en el puerto 3001");
})