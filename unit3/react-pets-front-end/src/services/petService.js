import axios from 'axios';

// import.meta
const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}/pets`;

const getPets = async () => {
    
    try {

        const pets = await axios.get(BASE_URL);
        return pets.data

    } catch(err) {

        console.log(err);

    }

}

const getPet = async (id) => {

    try {

        const pet = await axios.get(`${BASE_URL}/${id}`);
        return pet.data

    } catch(err) {

        console.log(err);

    }

}

const createPet = async (petData) => {
    try {

        const newPet = await axios.post(BASE_URL, petData);
        return newPet.data;

    } catch(err) {

        console.log(err);

    }
}

const deletePet = async (id) => {
    try {

        const deletedPet = await axios.delete(`${BASE_URL}/${id}`);
        return deletedPet;

    } catch(err) {

        console.log(err);

    }
    
}

const updatePet = async (id, data) => {
    try {

        const updatedPet = await axios.put(`${BASE_URL}/${id}`, data);
        return updatedPet;

    } catch(err) {

        console.log(err);

    }
}

export { getPets, getPet, createPet, deletePet, updatePet }