import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { pokemons } from './data/pokemons.js';
import PokeList from './components/PokeList.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => {
  return (
    <>
      <h1>Pokemons</h1>
      < NavBar />
      <Routes>

        <Route path='/'element={<h1>Home Page</h1>}/>

        <Route path="/pokemon" 
              element={< PokeList pokemons={pokemons} />} />
        
      </Routes>
    </>
  );
};

export default App;
