
import express from "express";
import { PORT } from "./config.js";
// import indexRoutes from './routes/index.routes.js'
import testRoutes from './routes/test.routes.js'

const app = express();

//uso de las rutas

app.use(testRoutes);

// puerto de prueba para ver funcionamiento
app.listen(PORT);
console.log(`server is listening ${PORT}`);
