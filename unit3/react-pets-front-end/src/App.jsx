import { useState, useEffect } from 'react'
import { getPets, getPet } from './services/petService.js';

function App() {

  const [pets, setPets] = useState([]);



  return (
    <div>App</div>
  )

}

export default App