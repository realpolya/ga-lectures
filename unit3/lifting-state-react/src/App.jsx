import { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton.jsx';
import Todos from './components/Todos.jsx';

function App() {

  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1); // change to prevCount later

  return (
    <>
      <h1>To-do App</h1>
      < IncrementButton addOne={addOne} />
      < Todos />
    </>
  )
}

export default App
