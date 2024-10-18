/* --------------------------------Imports--------------------------------*/

import Pet from '../models/model-pet.js';

const renderResult = (pet, res) => {
    
    if (!pet) {
        res.status(404);
        throw new Error("Pet not found.")
    }

    res.status(201).json(pet);

}

const renderError = (res, err) => {

    if (res.statusCode === 404) {

        return res.json({ error: err.message });

    }

    return res.status(500).json({ error: err.message })

}

/* --------------------------------GET Controllers--------------------------------*/

const displayPets = async (req, res) => {

    try {

        const allPets = await Pet.find();
        res.status(200).json(allPets);

    } catch (err) {

        res.status(500).json({ error: err.message })
        
    }
}

const displayPet = async (req, res) => {

    try {

        const pet = await Pet.findById(req.params.id);

        renderResult(pet, res);

    } catch(err) {

       renderError(res, err);
       
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

const deletePet = async (req, res) => {

    try {

        const pet = await Pet.findByIdAndDelete(req.params.id);

        if (!pet) {
            res.status(404);
            throw new Error("Pet not found.")
        }

        const allPets = await Pet.find();

        res.status(201).json(allPets);

    } catch (err) {


       renderError(res, err);

    }
}

const updatePet = async (req, res) => {

    try {

        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body);

        renderResult(pet, res);

    } catch (err) {

        renderError(res, err);
    }
}

/* --------------------------------Exports--------------------------------*/

export { displayPets, displayPet, createPet, deletePet, updatePet }