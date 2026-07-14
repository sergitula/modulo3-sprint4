import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import superHeroRoutesValiadator from './routes/superHeroRoutesValidator.mjs';
import superHeroRoutesFront from './routes/superHeroRoutesFront.mjs'


const app = express();
const PORT = process.env.PORT || 3000;


// setear configuración del motor de vistas EJS
app.set("view engine", "ejs");
app.set('views', path.resolve('./views'));

//Configurar express ejs layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // Establecer el layout principal

//Agregar archivos estativos:
app.use(express.static(path.resolve('./public')));

// Middleware para parsear JSON
app.use(express.json()); 


// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/api', superHeroRoutes);  //--> conectado a la BD 
app.use('/validarheroe', superHeroRoutesValiadator); //--> forma directa sin conectar a la BD
app.use("/", superHeroRoutesFront) // --> rutas para el front end

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});