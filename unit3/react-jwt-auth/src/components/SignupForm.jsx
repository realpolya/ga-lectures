import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth.js'

const initial = {
    username: '',
    password: '',
    passwordConf: ''
}

function SignupForm(props) {

    const redirect = useNavigate();
    const [message, setMessage] = useState([]);
    const [formData, setFormData] = useState(initial);

    const updateMessage = msg => setMessage(msg);
    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signUp(formData);
            props.setUser(response.user);
            redirect('/');
        } catch (err) {
            updateMessage(err.message);
        }
        updateMessage('');
    }

    const { username, password, passwordConf } = formData;

    const invalidForm = () => {
        return !(username && password && password === passwordConf);
    }

    return (
        <main>

            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={username}
                        name="username"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm"
                        value={passwordConf}
                        name="passwordConf"
                        onChange={handleChange}
                    />
                </div>

                <div>

                    <button disabled={invalidForm()}>Sign Up</button>
                    
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>

                </div>

            </form>
           
        </main>
    )
}

export default SignupForm