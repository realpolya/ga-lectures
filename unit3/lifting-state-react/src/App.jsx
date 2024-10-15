import { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton.jsx';
import Todos from './components/Todos.jsx';

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addOne = () => setCount(count + 1); // change to prevCount later
  const addTodo = newTodo => console.log(newTodo);

  return (
    <>
      <h1>Hello world!</h1>
      < IncrementButton addOne={addOne} />
      < Todos addTodo={addTodo}/>
    </>
  )
}

export default App
