import { useState } from 'react';

const ExampleComponent = () => {
    
    const [cats, setCats] = useState([
        { name: 'Myshka', breed: 'Ragdoll' },
        { name: 'Malta', breed: 'Turkish Angora' },
    ]);

    const addCat = (cat) => {
        const newCats = [...cats, cat];
        setCats(newCats);
    }
    
    return (
        <>
            <h1>hello cats</h1>
            <button onClick={() => {addCat({name: 'Vasya', breed: 'Egyptian'})}}>Add cat</button>
            <ul>
                {cats.map((cat, i) => 
                    <li key={i}> 
                        {cat.name} {cat.breed}
                    </li>
                )}
            </ul>
        </>
    )
}

export default ExampleComponent;