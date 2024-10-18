import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import { getPets, getPet } from './services/petService.js';
import './App.css';

import PetList from './components/PetList.jsx';
import PetInfo from './components/PetInfo.jsx';

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
    <>
      <h1>Pets</h1>
      <Routes>
        <Route  path="/" element={< PetList pets={pets} />} />
        <Route  path="/:id" element={< PetInfo />} />
      </Routes>
    </>
  )

}

export default App