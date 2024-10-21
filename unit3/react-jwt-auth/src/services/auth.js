import axios from 'axios';

const BACK_END_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;


export const signUp = async (formData) => {
    try {

        const response = await axios.post(`${BACK_END_URL}/users/sign-up`, formData);
        console.log(response)
        return response.data;

    } catch (err) {
        
        return console.log(err);

    }
} 