import axios from 'axios';

// const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}/pets`;
const BASE_URL = `localhost:3000/pets`;

const getPets = async () => {
    
    try {

        const pets = await axios.get(BASE_URL);
        console.log(pets)
        return pets.data

    } catch(err) {

        console.log(err);

    }

}

const getPet = async (id) => {

    try {

        const pet = await axios.get(BASE_URL, `/${id}`);
        console.log(pet)
        return pet.data

    } catch(err) {

        console.log(err);

    }

}

getPets();

export { getPets, getPet }