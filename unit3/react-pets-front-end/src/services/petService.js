import axios from 'axios';

// import.meta
const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}/pets`;

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