/*centralizamos la conexión a la BD */

import { setServers } from 'node:dns/promises';
import mongoose from 'mongoose';
import "dotenv/config";
setServers(["1.1.1.1", "8.8.8.8"]);

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        // await mongoose.connect('mongodb+srv://grupo-17:grupo-17@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}
