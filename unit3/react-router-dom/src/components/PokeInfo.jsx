import { useParams } from 'react-router-dom'

function PokeInfo({ pokemons }) {
    
    // extract pokeId from the URL
    const { pokeId } = useParams();  

    const pokemon = pokemons.find(poke => Number(poke._id) === Number(pokeId));
    console.log('pokemon is', pokemon);

    return (
    <section className="poke-info">
        <h2>{pokemon.name}</h2>
        <dl>
            <dt>Weight:</dt>
            <dd>{pokemon.weight}</dd>

            <dt>Height:</dt>
            <dd>{pokemon.height}</dd>
        </dl>
    </section>
  )
}

export default PokeInfo