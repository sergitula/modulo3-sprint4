import express from 'express';
import { body, validationResult} from 'express-validator';
import {validarSuperHero} from '../middlewares/middlewareSuperHero.mjs';


/*****************************************************************************************
                     TRABAJO PRACTICO N°2 AGREGADO DE VALIDACIONES
 ****************************************************************************************  */
const router = express();

router.post("", validarSuperHero, (req, res) =>{
    const { nombreSuperHeroe, nombreReal, edad, poderes } = req.body;
    console.log("validación exitosa");
    res.send(req.body);
})

export default router;

/*****************************************************************************************
 ****************************************************************************************  */