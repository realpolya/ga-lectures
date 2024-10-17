import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './PokeForm.css';

const initial = {
    name: '',
    weight: '',
    height: '',
}

function PokeForm({ updateList }) {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState(initial);

    const handleSubmit = e => {
        console.log("submitted");
        e.preventDefault();

        // update the list
        updateList(formData);
        setFormData(initial);

        // redirect 
        navigate('/pokemon');
    }

    const handleChange = e => {
        console.log("logging in change")
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    return (
        <main className="new-poke-main">
            <h2>New Pokemon Form</h2>
            <form className="new-poke-form" onSubmit={handleSubmit}>
                <div className="new-poke-form-div">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                     value={formData.name} onChange={handleChange}
                    />
                </div>
                <div className="new-poke-form-div">
                    <label htmlFor="height">Height:</label>
                    <input type="text" id="height" name="height"
                     value={formData.height} onChange={handleChange}
                    />
                </div>
                <div className="new-poke-form-div">
                    <label htmlFor="weight">Weight:</label>
                    <input type="text" id="weight" name="weight"
                     value={formData.weight} onChange={handleChange}
                    />
                </div>
                <div className="new-poke-form-div">
                    <button type="submit">Submit the pokemon</button>
                </div>
            </form>
        </main>
    )
}

export default PokeForm