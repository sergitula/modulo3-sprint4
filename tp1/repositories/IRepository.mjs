/*Abstracción de los metodos CRUD que deben ser implementados por cualquier repositorio
Asegura que todas las clases mantengan su consistencia en sus metodos, 
facilitando el mantenimiento y la escalabilidad del código.*/
class IRepository {
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
  }

  obtenerTodos() {
    throw new Error("Método 'obtenerTodos()' no implementado");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo()' no implementado");
  }

  obtenerMayoresDe30() {
    throw new Error("Método 'obtenerMayoresDe30()' no implementado");
  }
}

export default IRepository;