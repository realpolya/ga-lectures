import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { pokemons } from './data/pokemons.js';
import PokeList from './components/PokeList.jsx';
import PokeInfo from './components/PokeInfo.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => {

  // path="*" means everything (every route)

  return (
    <>
      <h1>Pokemons</h1>
      < NavBar />
      <Routes>

        <Route path='/'element={<h1>Home Page</h1>}/>

        <Route path="/pokemon" 
              element={< PokeList pokemons={pokemons} />} />
        
        <Route path="/pokemon/:pokeId" element={< PokeInfo pokemons={pokemons} />} />

        <Route path="*" element={<h2>Nothing here yet</h2>} />
        
      </Routes>
    </>
  );
};

export default App;
