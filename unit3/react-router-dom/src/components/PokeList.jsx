import { Link } from 'react-router-dom';

function PokeList({ pokemons }) {
  return (
    <section className='poke-list'>
      {pokemons.map(pokemon => {

        return <li key={pokemon._id}>
          <Link to={`/pokemon/${pokemon._id}`}>{pokemon.name}</Link>
        </li>
        
      })}
    </section>
  )
}

export default PokeList