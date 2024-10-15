import { useState } from 'react'
import * as weather from './services/weather.js'
import SearchBar from './components/SearchBar.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';
import './App.css'

function App() {

  /* states */
  const [weatherData, setWeatherData] = useState({});

  /* functions */
  const fetchData = async (city) => {

    // fetch data
    const data = await weather.show(city);

    // sort data
    const sortedData = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }

    console.log(sortedData);

    setWeatherData(sortedData);

  }

  return (
    <>
      <h1>Weather API</h1>
      < SearchBar fetchData={fetchData} />
      < WeatherDetails />
    </>
  )

}

export default App
