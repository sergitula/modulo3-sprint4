import express from 'express';
import { getDashboardController,
    agregarSuperheroeController,
    editarSuperheroeController,
    renderIndexController} from '../controllers/superheroesController.mjs';


/*******************************************************************************
                    TRABAJO PRACTICO N°3  - ROUTERS  
 *****************************************************************************  */

const router = express.Router();

router.get("/", renderIndexController);
router.get("/dashboard", getDashboardController);
router.get("/dashboard/agregar", agregarSuperheroeController);
router.get("/dashboard/editar/:id", editarSuperheroeController);


export default router;

/*******************************************************************************
 *****************************************************************************  */