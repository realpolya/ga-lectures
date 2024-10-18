import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import { getPets, getPet } from './services/petService.js';
import './App.css';

import PetList from './components/PetList.jsx';
import PetInfo from './components/PetInfo.jsx';
import NavBar from './components/NavBar.jsx';
import PetForm from './components/PetForm.jsx';

function App() {

  const [pets, setPets] = useState([]);
  const [toggle, setToggle] = useState(true);

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
    
  }, [toggle]) // dependency array

  return (
    <>
      <h1>Pets</h1>
      < NavBar />
      <Routes>
        <Route  path="/" element={< PetList pets={pets} />} />
        <Route  path="/:id" element={< PetInfo />} />
        <Route  path="/new" element={< PetForm edit={false} setToggle={setToggle} toggle={toggle} />} />
        <Route  path="/:id/edit" element={< PetForm edit={true} setToggle={setToggle} toggle={toggle} />} />
      </Routes>
    </>
  )

}

export default App