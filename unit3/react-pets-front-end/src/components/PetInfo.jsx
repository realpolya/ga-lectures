import { useParams } from 'react-router-dom';
import { getPet } from '../services/petService.js';
import { useState, useEffect } from 'react';

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
    }, [])

    return (
        <main>
            <h2>PetInfo</h2>
            
            <div id="pet-info-div">
                <h3>{pet.name}</h3>
                <p><span>Age:</span> {pet.age}</p>
                <p><span>Breed:</span> {pet.breed}</p> 
            </div>
        </main>
    )
}

export default PetInfo