/* --------------------------------Imports--------------------------------*/

import { Router } from 'express'
import * as controllers from '../controllers/pets.js'

/* --------------------------------Express & Mongoose--------------------------------*/

const router = Router();

/* --------------------------------Routes--------------------------------*/

router.get('/', controllers.displayPets);

router.get('/:id', controllers.displayPet);


router.post('/', controllers.createPet);

/* --------------------------------Exports--------------------------------*/

export default router;