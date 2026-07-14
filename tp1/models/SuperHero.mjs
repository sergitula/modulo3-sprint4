
/*Definir el modelo asegura que cada documento en una colección 
contenga la misma estructura de datos facilitando la validación 
y manipulación de los datos.*/

import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
});

const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-17');
export default superHero;