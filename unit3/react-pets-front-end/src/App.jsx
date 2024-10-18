import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import { getPets, getPet } from './services/petService.js';
import './App.css';

function App() {

  const [pets, setPets] = useState([]);

  /* FUNCTIONS */
  const fetchPets = async () => {
    try {

      const petsData = await getPets();
      setPets(petsData);

    } catch (err) {

      console.log(err);

    }
  }

  /* USE PETS */
  useEffect(() => {

    fetchPets();
    
  }, []) // dependency array

  return (
    <div>App</div>
  )

}

export default App