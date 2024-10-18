import { Link } from 'react-router-dom';

function PetList({ pets }) {

    const petsLi = pets.map(pet => <li key={pet._id}>
        <Link to={`/${pet._id}`}>Pet {pet.name}</Link>
    </li>);

    // if empty
    const placeholder = <li>No pets yet</li>
  
    return (
        <main>
            <h2>Current Pet List</h2>
            <ul>{petsLi.length < 1 ? placeholder : petsLi}</ul>
        </main>
    )

}

export default PetList