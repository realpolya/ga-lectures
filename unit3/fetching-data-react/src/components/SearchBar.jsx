import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ fetchData }) {
    
    /* states */
    const [city, setCity] = useState('');

    const handleCity = e => setCity(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        setCity('');
    }
  
    return (
        <section className="weather-search">
            <h2>Search Bar</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city:</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={handleCity}
                />
                <button type="submit">Search</button>
            </form>

        </section>
    )
}

export default SearchBar