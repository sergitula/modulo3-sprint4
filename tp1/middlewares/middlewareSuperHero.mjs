import { body, validationResult} from 'express-validator';
// https://express-validator.github.io/docs/api/validation-chain/

/*****************************************************************************************
                     TRABAJO PRACTICO N°2 AGREGADO DE VALIDACIONES
 ****************************************************************************************  */

export const validarSuperHero = [
    /* nombreSuperHeroe debe validarse que sea requerido, no tenga espacios en blanco (trim),
    un longitud minima de 3 caracteres  y una longitud maxima de 60 */
    body("nombreSuperHeroe")
        .notEmpty().withMessage("El nombre del superhéroe es requerido") 
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage("El nombre del superhéroe debe tener entre 3 y 60 caracteres"),

    /* nombreReal debe validarse que sea requerido, no tenga espacios en blanco (trim),
    un longitud minima de 3 caracteres  y una longitud maxima de 60  */
    body("nombreReal")
        .notEmpty().withMessage("El nombre real es requerido")
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage("El nombre real debe tener entre 3 y 60 caracteres"),

    /* edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco (trim),
    valor minimo 0 (no admite edad negativa)  */
    body("edad")
        .notEmpty().withMessage("La edad es requerida")
        .isNumeric().withMessage("La edad debe ser un número")
        .isInt({ min: 0 }).withMessage("La edad no puede ser negativa"),

    /* poderes debe validarse que sea requerido, que sea un array  de string cuyo  tamaño no sea 0, 
    cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y 
    una longitud maxima de 60 */

    body("poderes")
        .isArray({ min: 1 }).withMessage("Los poderes deben ser un array y no puede estar vacío"), //-> array mayor que 0 | Requerido
        // para acceder a cada elemento del array utilizo el "*"    
    body("poderes.*")
        .isString().withMessage("Cada poder debe ser un texto")
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage("Cada poder debe tener entre 3 y 60 caracteres"),
    
    
    (req, res, next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

/*****************************************************************************************
 ****************************************************************************************  */