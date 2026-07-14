/*Se implementan los metodos definidos en la interfaz, interactuando directamente con
 MongoDB a través de Mongoose para realizar operaciones de datos*/

import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    return await SuperHero.find({ [atributo]: valor });
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 } });
  }


/********************************************************
    TRABAJO PRACTICO N°1 IMPLEMENTACION DE METODOS
 ********************************************************  */

  async crearNuevoSuperheroe(superheroeData) {
    const nuevoSuperheroe = new SuperHero(superheroeData);
    return await nuevoSuperheroe.save();
  }

  async actualizarSuperheroe(id, superheroeData) {
    return await SuperHero.findByIdAndUpdate(id, superheroeData, { returnDocument: 'after' });
  }

  async eliminarPorId(id) {
    return await SuperHero.findByIdAndDelete(id);
  }

  async eliminarPorNombre(nombreSuperHeroe) {
    return await SuperHero.findOneAndDelete({ nombreSuperHeroe });
  }
/********************************************************
 ********************************************************  */

}



export default new SuperHeroRepository();


/*
$gt (Greater Than): Mayor que.
$gte (Greater Than or Equal): Mayor o igual que.
$lt (Less Than): Menor que.
$lte (Less Than or Equal): Menor o igual que.
$eq (Equal): Igual a.
$ne (Not Equal): No igual a.
$in (In): El valor está incluido en un array.
$nin (Not In): El valor no está incluido en un array.
*/