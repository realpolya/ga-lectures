import { getPet, createPet, updatePet } from '../services/petService.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initial = {
    name: '',
    age: '',
    breed: ''
}

function PetForm(props) {

    const redirect = useNavigate();
    const [formData, setFormData] = useState(initial);
    const { id } = useParams();

    const fetchPet = async (id) => {

        console.log('id is ', id)
        const petToEdit = await getPet(id);
        console.log('pet to edit', petToEdit);
        setFormData(petToEdit);

    }

    // functions
    const handleSubmit = async (e) => {
        
        e.preventDefault();

        if (props.edit) {
            await updatePet(id, formData);
        } else {
            await createPet(formData);
        }

        console.log('toggle is ', props.toggle);
        props.setToggle(!props.toggle);

        setFormData(initial);

        redirect('/');

    }

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    useEffect(() => {
        console.log(props.edit)
        if (props.edit) {
            fetchPet(id);
        } else {
            setFormData(initial);
        }

    }, [])

    useEffect(() => {

        console.log('form data is ', formData)

    }, [formData])

    return (
        <main id="form-main">
        {props.edit ? <h2>Edit</h2> : <h2>New Pet Form</h2>}
        <form className="new-pet-form" onSubmit={handleSubmit}>

            <div className="new-pet-form-div">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"
                 value={formData.name} onChange={handleChange}
                />
            </div>

            <div className="new-pet-form-div">
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age"
                 value={formData.age} onChange={handleChange}
                />
            </div>

            <div className="new-pet-form-div">
                <label htmlFor="breed">Breed:</label>
                <input type="text" id="breed" name="breed"
                 value={formData.breed} onChange={handleChange}
                />
            </div>

            <div className="new-pet-form-div">
                <button type="submit">
                    {props.edit ? <p>Edit</p> : <p>Add</p>}
                </button>
            </div>
            
        </form>
    </main>
    )
}

export default PetForm