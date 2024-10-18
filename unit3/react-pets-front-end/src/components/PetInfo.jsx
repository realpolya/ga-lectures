import { useParams } from 'react-router-dom';
import { getPet } from '../services/petService.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './css/PetInfo.css'


function PetInfo() {

    // extract id from url
    const { id } = useParams();

    const [pet, setPet] = useState({});

    const fetchPet = async (id) => {
        const newPet = await getPet(id);
        console.log('new pet is', newPet);
        return setPet(newPet);
    }

    useEffect(() => {
        fetchPet(id);
    }, [id]) // reload page when pet id is changing

    return (
        <main>
            <h2>PetInfo</h2>
            
            <div id="pet-info-div">
                <h3>{pet.name}</h3>
                <p><span>Age:</span> {pet.age}</p>
                <p><span>Breed:</span> {pet.breed}</p> 
                <p><Link to={`/${pet._id}/edit`}>Edit {pet.name}</Link></p>
            </div>
        </main>
    )
}

export default PetInfo