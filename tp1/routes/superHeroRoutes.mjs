/*la capa de rutas define los enpoints y mapea cada unos con sus respectivos controladores*/
import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  crearNuevoSuperheroeController,
  actualizarSuperheroeController,
  eliminarSuperheroePorIdController,
  eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

import {validarSuperHero} from '../middlewares/middlewareSuperHero.mjs';


const router = express.Router();

/********************************************************
          TRABAJO PRACTICO N°1 AGREGADO DE RUTAS
 ********************************************************  */

router.get('/heroes', obtenerTodosLosSuperheroesController);
//http://localhost:3000/api/heroes
// router.post('/heroes', crearNuevoSuperheroeController); // --> post sin validación
router.post('/heroes',validarSuperHero, crearNuevoSuperheroeController); //--> post con validaciones desde el middleware 
router.put('/heroes/:id',validarSuperHero, actualizarSuperheroeController); // --> put con validaciones desde el middleware
router.delete('/heroes/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/nombre/:nombreSuperHeroe', eliminarSuperheroePorNombreController);

/********************************************************
 ********************************************************  */

//RUTAS DEL SPRINT 2
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
//http://localhost:3000/api/heroes/mayores-30
router.get('/heroes/:id', obtenerSuperheroePorIdController);
//http://localhost:3000/api/heroes/id/69c716a20fc23e8b60f90c80
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
//http://localhost:3000/api/heroes/buscar/planetaOrigen/Tierra/
//http://localhost:3000/api/heroes/buscar/edad/1000

export default router;


/* -------EJEMPLO POST--------

http://localhost:3000/api/heroes  ...... con body - raw JSON: 
{
  "nombreSuperHeroe": "AgregoSuperhero-Prueba1",
  "nombreReal": "Tony Starkv1",
  "edad": 45,
  "planetaOrigen": "Tierra",
  "debilidad": "Dependiente de la tecnología",
  "poderes": [
    "Armadura blindada",
    "Volar"
  ],
  "aliados": [
    "Spiderman"
  ],
  "enemigos": [
    "Mandarín"
  ],
  "creador": "Sergio"
}

-----EJEMPLO PUT----------------
localhost:3000/api/heroes/69c716a20fc23e8b60f90c80

{
  "nombreSuperHeroe": "Spiderman_PRUEBA_PUT_1",
  "nombreReal": "Peter Parker",
  "edad": 25,
  "planetaOrigen": "Tierra",
  "debilidad": "Radioactiva",
  "poderes": [
    "Trepar paredes",
    "Sentido arácnido",
    "Super fuerza",
    "Agilidad"
  ],
  "aliados": [
    "Ironman"
  ],
  "enemigos": [
    "Duende Verde"
  ],
  "creador": "Sergio"
}

*/


