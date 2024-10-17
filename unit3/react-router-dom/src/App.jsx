import { useState } from 'react'
import './App.css'
import { pokemons } from './data/pokemons.js'
import PokeList from './components/PokeList.jsx';

const App = () => {
  return (
    <>
      <h1>Pokemons</h1>
      < PokeList pokemons={pokemons} />
    </>
  );
};

export default App;
