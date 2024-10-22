import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/auth.js';


const initial = {
    username: '',
    password: ''
}

function SigninForm({ setUser }) {

    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState(initial);

    const redirect = useNavigate();

    const updateMessage = msg => setMessage(msg);
    const handleChange = e => setFormData(prev => ({...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        try {

            const response = await signIn(formData);
            setUser(response.user);
            updateMessage('');
            redirect('/');

        } catch (err) {

            console.log("ERROR!")
            console.log(err);
            setFormData(initial);
            updateMessage(err.response.data.error);

        }
        
    }

    const { username, password } = formData;

    const invalidForm = () => {
        return !(username && password);
    }

    return (
        <main>
            <h1>Log In</h1>
            <p>{message}</p>
            <form autoComplete="off" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        autoComplete="off"
                        id="username"
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        autoComplete="off"
                        id="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button disabled={invalidForm()} type="submit">Log In</button>
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                </div>
                
            </form>
        </main>
    )
}

export default SigninForm