import axios from 'axios';

const BACK_END_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const signUp = async (formData) => {
    
    try {

        const response = await axios.post(`${BACK_END_URL}/users/sign-up`, formData);
        console.log(response)
        if (response.data.error) {
            console.log(response.data.error)
            throw new Error(response.data.error);
        }
        return response.data;

    } catch (err) {
        
        console.log(err.response.data.error);
        throw err

    }

} 

const signIn = async (formData) => {

    try {

        const response = await axios.post(`${BACK_END_URL}/users/sign-in`, formData);
        console.log(response);
        if (response.data.error) {
            console.log(response.data.error)
            throw new Error(response.data.error);
        }
        return response.data;

    } catch (err) {

        console.log(err.response.data.error);
        throw err;
        
    }

}

export { signUp, signIn }