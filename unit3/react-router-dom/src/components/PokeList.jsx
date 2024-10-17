

function PokeList({ pokemons }) {
  return (
    <section className='poke-list'>
      {pokemons.map(pokemon => {
        return <li key={pokemon._id}>{pokemon.name}</li>
      })}
    </section>
  )
}

export default PokeList