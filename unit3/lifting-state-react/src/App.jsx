import { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton.jsx';
import Todos from './components/Todos.jsx';

function App() {

  return (
    <>
      <h1>To-do App</h1>
      < IncrementButton />
      < Todos />
    </>
  )
  
}

export default App
