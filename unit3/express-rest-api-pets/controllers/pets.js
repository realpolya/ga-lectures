/* --------------------------------Imports--------------------------------*/

import Pet from '../models/model-pet.js';

/* --------------------------------GET Controllers--------------------------------*/

const displayPets = async (req, res) => {

    try {

        const allPets = await Pet.find();
        res.status(200).json(allPets);

    } catch (err) {

        res.status(500).json({ error: err.message })
        
    }
}

/* --------------------------------POST Controllers--------------------------------*/


const createPet = async (req, res) => {

    try {

        const pet = await Pet.create(req.body);
        res.status(201).json(pet);

    } catch (err) {

        res.status(500).json({ error: err.message })

    }
}

/* --------------------------------Exports--------------------------------*/

export { displayPets, createPet }