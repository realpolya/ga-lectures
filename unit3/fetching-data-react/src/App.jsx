import { useState } from 'react'
import * as weather from './services/weather.js'
import SearchBar from './components/SearchBar.jsx';
import './App.css'

function App() {

  /* states */
  const [weatherData, setWeatherData] = useState({});

  /* functions */
  const fetchData = async () => {

    // fetch data
    const data = await weather.show('New York');

    // sort data
    const sortedData = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }

    setWeatherData(sortedData);

  }

  return (
    <>
      <h1>Weather API</h1>
      < SearchBar fetchData={fetchData} />
    </>
  )

}

export default App
