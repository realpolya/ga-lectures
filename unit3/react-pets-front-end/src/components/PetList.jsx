
function PetList({ pets }) {

    const petsLi = pets.map(pet => <li key={pet._id}>Name: {pet.name}</li>)
    const placeholder = <li>No pets yet</li>
  
    return (
        <main>
            <h2>Current pet list</h2>
            <ul>{petsLi ? petsLi : placeholder}</ul>
        </main>
    )

}

export default PetList