import { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0) 
  // useState = hook is a special function
  // [variable to hold data, function that manages that variable]

  const [darkMode, setDarkMode] = useState(false)

  const [person, setPerson] = useState({
    firstName: 'Polya',
    lastName: 'Stepa',
    hasPets: false,
    age: 27
  })

  console.log('Dark mode is ', darkMode);
  console.log('Person is ', person);


  return (
    <>
      <div className={darkMode ? 'dark' : 'light'}>
        <h1>Hello world!</h1>
        <p>Hello, my name is {person.firstName} {person.lastName}</p>
        <p>I am {person.age} years old and I {person.hasPets ? 'have' : "don't have"} pets</p>
      </div>
    </>
  );
}

export default App
