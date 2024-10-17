import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { pokemons } from './data/pokemons.js';
import PokeList from './components/PokeList.jsx';
import PokeInfo from './components/PokeInfo.jsx';
import NavBar from './components/NavBar.jsx';
import PokeForm from './components/PokeForm.jsx';

const App = () => {

  // path="*" means everything (every route)
  const [pokemonList, setPokemonList] = useState(pokemons);

  const updateList = (pokemon) => {
    pokemon._id = pokemonList.length + 1;
    setPokemonList([...pokemonList, pokemon]);
    console.log("poke list is ", pokemonList);
  };

  return (
    <>
      <h1>Pokemons</h1>
      < NavBar />
      <Routes>

        <Route path='/'element={<h1>Home Page</h1>}/>

        <Route path="/pokemon" 
              element={< PokeList pokemons={pokemonList} />} />
        
        <Route path="/pokemon/:pokeId" element={< PokeInfo pokemons={pokemonList} />} />

        <Route path="/new" element={< PokeForm updateList={updateList} />} />

        <Route path="*" element={<h2>Nothing here yet</h2>} />
        
      </Routes>
    </>
  );
};

export default App;
