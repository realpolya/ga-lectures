import { useState } from 'react'
import './App.css'

function App() {

  const [cityInput, setCityInput] = useState('');

  const handleChange = e => setCityInput(e.target.value);

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <label htmlFor='cityInput'> City: </label>
        <input 
          id='cityInput' 
          name='cityInput' 
          type='text'
          value={cityInput}
          onChange={handleChange} 
        />
      </div>
    </>
  )

}

export default App
