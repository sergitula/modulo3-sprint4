/* Esta capa contiene la logica de negocio y se encarga de validad y transformar los datos
cuando es necesario*/
import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
  return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await superHeroRepository.obtenerMayoresDe30();
}


/********************************************************
          TRABAJO PRACTICO N°1 SERVICIOS
 ********************************************************  */
export async function crearNuevoSuperheroe(superheroeData) {
  return await superHeroRepository.crearNuevoSuperheroe(superheroeData);
}

export async function actualizarSuperheroe(id, superheroeData) {
  return await superHeroRepository.actualizarSuperheroe(id, superheroeData);
}

export async function eliminarSuperheroePorId(id) {
  return await superHeroRepository.eliminarPorId(id);
}

export async function eliminarSuperheroePorNombre(nombreSuperHeroe) {
  return await superHeroRepository.eliminarPorNombre(nombreSuperHeroe);
}

/********************************************************
 ********************************************************  */