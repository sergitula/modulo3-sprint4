
/*a capa de controladores gestiona las solicitudes del cliente y llama a la 
capa de servicios para realizar las operaciones necesarias*/

import {obtenerSuperheroePorId,obtenerTodosLosSuperheroes,buscarSuperheroesPorAtributo,obtenerSuperheroesMayoresDe30
    ,crearNuevoSuperheroe,
    actualizarSuperheroe,
    eliminarSuperheroePorId,
    eliminarSuperheroePorNombre
} from '../services/superheroesService.mjs';
import {renderizarSuperheroe,renderizarListaSuperheroes} from '../views/responseView.mjs';


export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
        return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
    }
    
    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}


export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });
    }
}




/********************************************************
          TRABAJO PRACTICO N°1 CONTROLADORES
 ********************************************************  */


export async function crearNuevoSuperheroeController(req, res) {
    try{
        const superheroeData = req.body;
        const superheroeCreado = await crearNuevoSuperheroe(superheroeData);

        res.status(201).json({ mensaje: 'Nuevo superhéroe creado', superheroe: superheroeCreado });
    }catch(error){
        res.status(500).send({ mensaje: 'Error al crear el nuevo superhéroe', error: error.message });
    }
}

export async function actualizarSuperheroeController(req, res) {
    try{
        const { id } = req.params;
        const superheroeActualizado = await actualizarSuperheroe(id, req.body);
        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado para actualizar' });
        }
        res.status(200).json({ mensaje: 'Superhéroe actualizado', superheroe: superheroeActualizado });

    }catch(error){
        return res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}


export async function eliminarSuperheroePorIdController(req, res) {
    try{
        const { id } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorId(id);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado para eliminar' });
        }
        res.status(200).json({ mensaje: 'Superhéroe eliminado', superheroe: superheroeEliminado });
    }catch(error){
        return res.status(500).send({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }

}

export async function eliminarSuperheroePorNombreController(req, res) {
    try{
        const { nombreSuperHeroe } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorNombre(nombreSuperHeroe);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado para eliminar' });
        }
        res.status(200).json({ mensaje: 'Superhéroe eliminado', superheroe: superheroeEliminado });
    }catch(error){
        return res.status(500).send({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }
}



/*******************************************************************************
          TRABAJO PRACTICO N°3  CONTROLADORES DEL DASHBOARD
 *****************************************************************************  */
export async function getDashboardController(req, res) {
    try{
        const superheroes = await obtenerTodosLosSuperheroes();
        res.render("dashboard", { title: 'Inicio - Dashboard', superheroes });
    }catch(error){
        res.status(500).send("Error al obtener los superhéroes");
    }

}

export async function agregarSuperheroeController(req, res) {
    res.render("añadirSuperheroe", { title: 'Agregar Superhéroe' });
}


export async function editarSuperheroeController(req,res) {
    const respuesta = await fetch(`http://localhost:3000/api/heroes/${req.params.id}`);
    const superheroe = await respuesta.json();
    if(!superheroe){
        res.status(404).send("Superheroe no encontrado");
    }
    superheroe.id = req.params.id;
    res.render("editarSuperheroe", {title: 'Editar Superhéroe', superheroe});
}


    /* si hago un console.log del "editar" obtengo esto:
    {
        Nombre: 'Spiderman_PRUEBA_PUT_1',
        'Nombre Real': 'Peter Parker',
        Edad: 25,
        'Planeta de Origen': 'Tierra',
        Debilidad: 'Radioactiva',
        Poderes: [ 'Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad' ],
        Aliados: [ 'Ironman' ],
        Enemigos: [ 'Duende Verde' ]
}
 */



/*******************************************************************************
 *****************************************************************************  */

export async function renderIndexController(req, res) {
    // Aquí renderizamos views/index.ejs
    res.render('index', { 
        title: 'Inicio - Centro de Comando' 
    });
};