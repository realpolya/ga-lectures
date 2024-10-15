import { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton.jsx';

function App() {

  const [count, setCount] = useState(0)

  const addOne = () => setCount(count + 1); // change to prevCount later

  return (
    <>
      <h1>Hello world!</h1>
      < IncrementButton addOne={addOne} />
    </>
  )
}

export default App
