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

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            const user = JSON.parse(atob(response.data.token.split('.')[1]));
            return user;
        }

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

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            const user = JSON.parse(atob(response.data.token.split('.')[1]));
            return user;
        }

    } catch (err) {

        console.log(err.response.data.error);
        throw err;

    }

}

const getUser = () => {

    const token = localStorage.getItem('token');
    if (!token) return null;

    const user = JSON.parse(atob(token.split('.')[1]));
    return user;

}

const signOut = () => {

    localStorage.removeItem('token');

}

export { signUp, signIn, getUser, signOut }