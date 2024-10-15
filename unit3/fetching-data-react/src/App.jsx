import { useState } from 'react'
import * as weather from './services/weather.js'
import SearchBar from './components/SearchBar.jsx';
import './App.css'

function App() {

  const fetchData = async () => {
    const data = await weather.show('New York');
  }

  return (
    <>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch weather data</button>
    </>
  )

}

export default App
